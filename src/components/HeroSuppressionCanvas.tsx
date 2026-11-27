"use client";

import React, { useEffect, useRef } from "react";

export type SuppressionPhase = "fire" | "sucking" | "extinguished";

interface FireParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
  heat: number; // 1 = full flame, 0 = cooled/vaporized
  sucked: boolean;
  isSpark: boolean;
  seed: number;
}

interface GasParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  life: number;
  maxLife: number;
}

interface ShockwaveRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

interface HeroSuppressionCanvasProps {
  paused?: boolean;
  burstTrigger?: number;
  onPhaseChange?: (phase: SuppressionPhase) => void;
}

/**
 * Real-time HTML5 Canvas simulation of Hartindo AF11E Clean Agent:
 * - Multi-layered flickering flame plumes & rising sparks
 * - Gossamer-thin pressurized gas/vapor ribbons sweeping out toward the fire
 * - Tight suction vortex that spirals flames inward, cools them to vapor, and extinguishes cleanly
 * - Supports user-triggered manual discharge ("Semprot Gas AF11E") and Pause/Play control
 */
export default function HeroSuppressionCanvas({
  paused = false,
  burstTrigger = 0,
  onPhaseChange,
}: HeroSuppressionCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pausedRef = useRef(paused);
  const triggerRef = useRef<(() => void) | null>(null);
  const onPhaseChangeRef = useRef(onPhaseChange);
  const resumeLoopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    pausedRef.current = paused;
    if (!paused) {
      resumeLoopRef.current?.();
    }
  }, [paused]);

  useEffect(() => {
    onPhaseChangeRef.current = onPhaseChange;
  }, [onPhaseChange]);

  useEffect(() => {
    if (burstTrigger > 0 && triggerRef.current) {
      triggerRef.current();
    }
  }, [burstTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = 0;
    let initTimer = 0;
    let isVisible = true;
    let disposed = false;
    let lastTime = 0;
    let cachedRect: DOMRect | null = null;

    // Pre-bake radial gradient sprites once to avoid hundreds of createRadialGradient calls/frame
    const createSprite = (stops: [number, string][], size = 96) => {
      const s = document.createElement("canvas");
      s.width = size;
      s.height = size;
      const sCtx = s.getContext("2d");
      if (sCtx) {
        const half = size / 2;
        const g = sCtx.createRadialGradient(half, half, 0, half, half, half);
        for (const [offset, color] of stops) {
          g.addColorStop(offset, color);
        }
        sCtx.fillStyle = g;
        sCtx.fillRect(0, 0, size, size);
      }
      return s;
    };

    const flameSprite = createSprite([
      [0, "rgba(255, 226, 120, 1)"],
      [0.42, "rgba(255, 72, 0, 0.9)"],
      [1, "rgba(211, 2, 1, 0)"],
    ]);
    const cooledSprite = createSprite([
      [0, "rgba(241, 245, 249, 0.75)"],
      [0.5, "rgba(186, 230, 253, 0.35)"],
      [1, "rgba(15, 23, 42, 0)"],
    ]);
    const gasSprite = createSprite([
      [0, "rgba(248, 250, 252, 1)"],
      [0.5, "rgba(186, 230, 253, 0.58)"],
      [1, "rgba(186, 230, 253, 0)"],
    ]);

    const fireParticles: FireParticle[] = [];
    const gasParticles: GasParticle[] = [];
    const shockwaves: ShockwaveRing[] = [];

    let cycleTimer = 25;
    let lastPhase: SuppressionPhase | null = null;
    let vortexX = 0;
    let vortexY = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let lastMouseBurst = 0;
    let blastX = -9999;
    let blastY = -9999;
    let blastTimer = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect ? rect.width : window.innerWidth;
      height = rect ? rect.height : window.innerHeight;
      cachedRect = canvas.getBoundingClientRect();
      dpr = width < 768 ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      vortexX = width * 0.66;
      vortexY = height * 0.42;
    };

    const spawnFire = (count: number) => {
      const originX = width * 0.68;
      const originY = height * 0.64;
      const spreadX = Math.max(220, width * 0.36);
      const maxParticles = width < 768 ? 110 : 210;

      for (let i = 0; i < count; i++) {
        if (fireParticles.length > maxParticles) break;
        const isSpark = Math.random() < 0.35;
        fireParticles.push({
          x: originX + (Math.random() - 0.5) * spreadX,
          y: originY + (Math.random() - 0.5) * 42,
          vx: (Math.random() - 0.5) * (isSpark ? 1.8 : 0.75),
          vy: -(isSpark ? 2.1 + Math.random() * 2.4 : 1.5 + Math.random() * 1.9),
          radius: isSpark ? 2 + Math.random() * 3 : 19 + Math.random() * 34,
          life: 0,
          maxLife: isSpark ? 68 + Math.random() * 44 : 78 + Math.random() * 54,
          heat: 1,
          sucked: false,
          isSpark,
          seed: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnGasStream = (
      startX: number,
      startY: number,
      targetX: number,
      targetY: number,
      count: number,
      speedScale = 1
    ) => {
      const dx = targetX - startX;
      const dy = targetY - startY;
      const dist = Math.hypot(dx, dy) || 1;
      const dirX = dx / dist;
      const dirY = dy / dist;

      for (let i = 0; i < count; i++) {
        if (gasParticles.length > 210) break;
        const speed = (3.8 + Math.random() * 3.4) * speedScale;
        const jitter = (Math.random() - 0.5) * 0.34;
        const cos = Math.cos(jitter);
        const sin = Math.sin(jitter);
        const vx = (dirX * cos - dirY * sin) * speed;
        const vy = (dirX * sin + dirY * cos) * speed;

        gasParticles.push({
          x: startX + (Math.random() - 0.5) * 18,
          y: startY + (Math.random() - 0.5) * 18,
          vx,
          vy,
          radius: 10 + Math.random() * 26,
          alpha: 0.16 + Math.random() * 0.22,
          life: 0,
          maxLife: 56 + Math.random() * 38,
        });
      }
    };

    // Allow external "Uji Semprot Gas AF11E" button to jump directly to suppression
    triggerRef.current = () => {
      if (fireParticles.length < 35) {
        spawnFire(52);
      }
      cycleTimer = 92;
      blastX = vortexX;
      blastY = vortexY;
      blastTimer = 46;
      spawnGasStream(width * 0.24, height * 0.68, vortexX, vortexY, 28, 1.45);
      shockwaves.push({
        x: vortexX,
        y: vortexY,
        radius: 18,
        maxRadius: 270,
        alpha: 0.65,
      });
    };

    const invalidateRect = () => {
      cachedRect = null;
    };

    const getCanvasRect = () => {
      if (!cachedRect) {
        cachedRect = canvas.getBoundingClientRect();
      }
      return cachedRect;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (pausedRef.current || !isVisible) return;
      const rect = getCanvasRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      mouseX = x;
      mouseY = y;

      const now = performance.now();
      if (now - lastMouseBurst > 36) {
        lastMouseBurst = now;
        spawnGasStream(
          mouseX - 60,
          mouseY + 20,
          mouseX + 42,
          mouseY - 20,
          3
        );
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (pausedRef.current || !isVisible) return;
      const rect = getCanvasRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      blastX = x;
      blastY = y;
      blastTimer = 36;
      spawnGasStream(blastX - 105, blastY + 42, blastX, blastY, 18, 1.35);
      shockwaves.push({
        x: blastX,
        y: blastY,
        radius: 12,
        maxRadius: 195,
        alpha: 0.52,
      });
    };

    const handlePointerLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const startLoop = () => {
      if (disposed || animationId || !isVisible || document.hidden || pausedRef.current) {
        return;
      }
      lastTime = performance.now();
      animationId = requestAnimationFrame(tick);
    };

    resumeLoopRef.current = startLoop;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = 0;
        }
      } else {
        startLoop();
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", invalidateRect, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible) {
          invalidateRect();
          startLoop();
        } else if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = 0;
        }
      },
      { threshold: 0.02 }
    );

    const drawGasRibbons = (
      nozzleX: number,
      nozzleY: number,
      targetX: number,
      targetY: number,
      progress: number,
      time: number
    ) => {
      const envelope = Math.sin(progress * Math.PI);
      if (envelope <= 0.02) return;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      // 5 gossamer-thin gas/vapor ribbons sweeping into the fire vortex
      for (let s = 0; s < 5; s++) {
        const wave = Math.sin(time * 0.055 + s * 1.65) * (20 + s * 11);
        const ctrlX = (nozzleX + targetX) * 0.5 + wave * 0.45;
        const ctrlY = Math.min(nozzleY, targetY) - (32 + s * 22) + wave;

        const grad = ctx.createLinearGradient(nozzleX, nozzleY, targetX, targetY);
        grad.addColorStop(0, "rgba(226, 232, 240, 0)");
        grad.addColorStop(0.35, `rgba(240, 249, 255, ${envelope * (0.28 - s * 0.04)})`);
        grad.addColorStop(0.75, `rgba(186, 230, 253, ${envelope * (0.34 - s * 0.045)})`);
        grad.addColorStop(1, "rgba(226, 232, 240, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = Math.max(1, 3.2 - s * 0.55);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(nozzleX - s * 12, nozzleY + s * 8);
        ctx.quadraticCurveTo(ctrlX, ctrlY, targetX, targetY);
        ctx.stroke();
      }

      // Spiral suction streamlines pulling flames inward
      for (let arm = 0; arm < 3; arm++) {
        const baseAngle = time * 0.08 + (arm * Math.PI * 2) / 3;
        const startR = Math.max(24, 128 * (1 - progress * 0.55));
        const endR = 10;
        const sx = targetX + Math.cos(baseAngle) * startR;
        const sy = targetY + Math.sin(baseAngle) * startR;
        const cx = targetX + Math.cos(baseAngle + 1.1) * (startR * 0.55);
        const cy = targetY + Math.sin(baseAngle + 1.1) * (startR * 0.55);
        const ex = targetX + Math.cos(baseAngle + 2.2) * endR;
        const ey = targetY + Math.sin(baseAngle + 2.2) * endR;

        ctx.strokeStyle = `rgba(224, 242, 254, ${envelope * 0.3})`;
        ctx.lineWidth = 1.35;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(cx, cy, ex, ey);
        ctx.stroke();
      }

      ctx.restore();
    };

    const tick = (now: number) => {
      animationId = 0;
      if (disposed || !isVisible || document.hidden || pausedRef.current) return;

      const dt = Math.min(2.5, Math.max(0.4, (now - lastTime) / 16.6667));
      lastTime = now;

      const prevFloor = Math.floor(cycleTimer);
      cycleTimer += dt;
      const currFloor = Math.floor(cycleTimer);
      const stepped = currFloor > prevFloor;
      if (blastTimer > 0) blastTimer = Math.max(0, blastTimer - dt);

      const cyclePos = cycleTimer % 340;
      const isBurning = cyclePos < 165;
      const isSuppressing = cyclePos >= 145 && cyclePos < 290;

      const currentPhase: SuppressionPhase = isSuppressing
        ? "sucking"
        : isBurning
        ? "fire"
        : "extinguished";
      if (currentPhase !== lastPhase) {
        lastPhase = currentPhase;
        onPhaseChangeRef.current?.(currentPhase);
      }

      ctx.clearRect(0, 0, width, height);

      // Ambient fire glow (fades out completely as gas cools the zone)
      const heatIntensity = isSuppressing
        ? Math.max(0.03, 0.42 * (1 - (cyclePos - 145) / 115))
        : isBurning
        ? 0.34 + Math.sin(cycleTimer * 0.05) * 0.07
        : 0.02;

      const ambientFire = ctx.createRadialGradient(
        width * 0.68,
        height * 0.52,
        14,
        width * 0.68,
        height * 0.46,
        Math.max(300, width * 0.42)
      );
      ambientFire.addColorStop(0, `rgba(255, 95, 10, ${heatIntensity})`);
      ambientFire.addColorStop(0.45, `rgba(211, 2, 1, ${heatIntensity * 0.7})`);
      ambientFire.addColorStop(1, "rgba(2, 2, 2, 0)");
      ctx.fillStyle = ambientFire;
      ctx.fillRect(0, 0, width, height);

      if (isBurning && stepped && currFloor % 3 === 0) {
        spawnFire(cyclePos < 60 ? 5 : 6);
      }

      if (isSuppressing) {
        const progress = (cyclePos - 145) / 145;
        const nozzleX = width * (0.24 + progress * 0.24);
        const nozzleY = height * (0.58 - progress * 0.16);
        vortexX = width * (0.67 - Math.sin(progress * Math.PI) * 0.06);
        vortexY = height * (0.44 - progress * 0.1);

        if (stepped && currFloor % 3 === 0) {
          spawnGasStream(nozzleX, nozzleY, vortexX, vortexY, 6);
        }
        const posFloor = Math.floor(cyclePos);
        if (stepped && (posFloor === 152 || posFloor === 210)) {
          shockwaves.push({
            x: vortexX,
            y: vortexY,
            radius: 20,
            maxRadius: 250,
            alpha: 0.48,
          });
        }

        const mistAura = ctx.createRadialGradient(
          vortexX,
          vortexY,
          10,
          vortexX,
          vortexY,
          Math.max(240, width * 0.3)
        );
        const mistAlpha = Math.sin(progress * Math.PI) * 0.26;
        mistAura.addColorStop(0, `rgba(224, 242, 254, ${mistAlpha})`);
        mistAura.addColorStop(0.5, `rgba(226, 232, 240, ${mistAlpha * 0.5})`);
        mistAura.addColorStop(1, "rgba(2, 2, 2, 0)");
        ctx.fillStyle = mistAura;
        ctx.fillRect(0, 0, width, height);

        drawGasRibbons(nozzleX, nozzleY, vortexX, vortexY, progress, cycleTimer);
      }

      // Update & draw flame tongues / sparks
      ctx.globalCompositeOperation = "lighter";
      for (let i = fireParticles.length - 1; i >= 0; i--) {
        const p = fireParticles[i];
        p.life += 1;

        if (isSuppressing) {
          const dx = vortexX - p.x;
          const dy = vortexY - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < width * 0.56) {
            p.sucked = true;
            const pull = 0.55 + (1 - dist / (width * 0.56)) * 1.05;
            p.vx += (dx / dist) * pull - (dy / dist) * 0.26;
            p.vy += (dy / dist) * pull + (dx / dist) * 0.26;
            p.vx *= 0.91;
            p.vy *= 0.91;
            p.heat = Math.max(0, p.heat - 0.032);
            p.radius *= 0.968;
          }
        }

        if (blastTimer > 0 && blastX > 0) {
          const bdx = blastX - p.x;
          const bdy = blastY - p.y;
          const bDist = Math.hypot(bdx, bdy) || 1;
          if (bDist < 260) {
            p.sucked = true;
            p.vx += (bdx / bDist) * 1.6 - (bdy / bDist) * 0.55;
            p.vy += (bdy / bDist) * 1.6 + (bdx / bDist) * 0.55;
            p.heat = Math.max(0, p.heat - 0.09);
            p.radius *= 0.92;
          }
        }

        if (mouseX > 0) {
          const mdx = mouseX - p.x;
          const mdy = mouseY - p.y;
          const mDist = Math.hypot(mdx, mdy) || 1;
          if (mDist < 200) {
            p.sucked = true;
            p.vx += (mdx / mDist) * 0.85 - (mdy / mDist) * 0.35;
            p.vy += (mdy / mDist) * 0.85 + (mdx / mDist) * 0.35;
            p.heat = Math.max(0, p.heat - 0.065);
            p.radius *= 0.945;
          }
        }

        if (!p.sucked) {
          p.vx += Math.sin(p.life * 0.09 + p.seed) * 0.045;
        }

        p.x += p.vx;
        p.y += p.vy;

        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio >= 1 || p.radius < 1 || p.heat <= 0.02) {
          fireParticles.splice(i, 1);
          continue;
        }

        const alpha =
          (1 - lifeRatio) * (p.isSpark ? 0.95 : 0.72) * (0.4 + p.heat * 0.6);

        ctx.save();
        ctx.translate(p.x, p.y);
        if (!p.isSpark && !p.sucked) {
          ctx.scale(0.8, 1.45 + Math.sin(p.life * 0.14 + p.seed) * 0.14);
        }

        ctx.globalAlpha = alpha;
        ctx.drawImage(
          p.heat > 0.5 ? flameSprite : cooledSprite,
          -p.radius,
          -p.radius,
          p.radius * 2,
          p.radius * 2
        );
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      // Update & draw gossamer clean-agent gas wisps
      ctx.globalCompositeOperation = "screen";
      for (let i = gasParticles.length - 1; i >= 0; i--) {
        const g = gasParticles[i];
        g.life += 1;

        const dx = vortexX - g.x;
        const dy = vortexY - g.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 260) {
          g.vx += (-dy / dist) * 0.2 + (dx / dist) * 0.12;
          g.vy += (dx / dist) * 0.2 + (dy / dist) * 0.12;
        }

        g.vx *= 0.965;
        g.vy *= 0.965;
        g.x += g.vx;
        g.y += g.vy;
        g.radius += 0.6;

        const lifeRatio = g.life / g.maxLife;
        if (lifeRatio >= 1) {
          gasParticles.splice(i, 1);
          continue;
        }

        const fade = Math.sin(lifeRatio * Math.PI) * g.alpha;
        ctx.globalAlpha = fade;
        ctx.drawImage(
          gasSprite,
          g.x - g.radius,
          g.y - g.radius,
          g.radius * 2,
          g.radius * 2
        );
      }
      ctx.globalAlpha = 1;

      // Expanding pressurized shockwave rings
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const ring = shockwaves[i];
        ring.radius += (ring.maxRadius - ring.radius) * 0.065 + 1.4;
        ring.alpha *= 0.945;
        if (ring.alpha < 0.02 || ring.radius >= ring.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(224, 242, 254, ${ring.alpha})`;
        ctx.lineWidth = 1.75;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(tick);
    };

    const startSimulation = () => {
      if (disposed) return;
      resize();
      spawnFire(width < 768 ? 28 : 48);
      observer.observe(canvas);
      startLoop();
    };

    const idleWin = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId = 0;
    if (idleWin.requestIdleCallback) {
      idleId = idleWin.requestIdleCallback(startSimulation, { timeout: 1200 });
    } else {
      initTimer = window.setTimeout(startSimulation, 600);
    }

    return () => {
      disposed = true;
      if (idleId && idleWin.cancelIdleCallback) {
        idleWin.cancelIdleCallback(idleId);
      }
      window.clearTimeout(initTimer);
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", invalidateRect);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
