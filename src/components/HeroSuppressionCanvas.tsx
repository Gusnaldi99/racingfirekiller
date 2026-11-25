"use client";

import React, { useEffect, useRef } from "react";

interface FireParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
  heat: number; // 1 = full flame, 0 = cooled/extinguished
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

/**
 * High-polish HTML5 Canvas simulation:
 * - Elongated, flickering fire plumes & rising sparks
 * - Multi-strand thin clean-agent gas/vapor ribbons & mist wisps
 * - Dynamic vortex suction that spirals flames inward and extinguishes them
 * - Interactive pointer trail + click/tap pressurized clean-agent blast
 */
export default function HeroSuppressionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = 0;
    let isVisible = true;

    const fireParticles: FireParticle[] = [];
    const gasParticles: GasParticle[] = [];

    let cycleTimer = 55;
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
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      vortexX = width * 0.64;
      vortexY = height * 0.48;
    };

    const spawnFire = (count: number) => {
      const originX = width * 0.65;
      const originY = height * 0.86;
      const spreadX = Math.max(180, width * 0.34);

      for (let i = 0; i < count; i++) {
        if (fireParticles.length > 180) break;
        const isSpark = Math.random() < 0.3;
        fireParticles.push({
          x: originX + (Math.random() - 0.5) * spreadX,
          y: originY + Math.random() * 30,
          vx: (Math.random() - 0.5) * (isSpark ? 2.4 : 1.0),
          vy: -(isSpark ? 2.8 + Math.random() * 3.4 : 1.9 + Math.random() * 2.5),
          radius: isSpark ? 2 + Math.random() * 3 : 16 + Math.random() * 32,
          life: 0,
          maxLife: isSpark ? 48 + Math.random() * 42 : 58 + Math.random() * 50,
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
        if (gasParticles.length > 180) break;
        const speed = (5.5 + Math.random() * 5) * speedScale;
        const jitter = (Math.random() - 0.5) * 0.4;
        const cos = Math.cos(jitter);
        const sin = Math.sin(jitter);
        const vx = (dirX * cos - dirY * sin) * speed;
        const vy = (dirX * sin + dirY * cos) * speed;

        gasParticles.push({
          x: startX + (Math.random() - 0.5) * 24,
          y: startY + (Math.random() - 0.5) * 24,
          vx,
          vy,
          radius: 16 + Math.random() * 40,
          alpha: 0.14 + Math.random() * 0.2,
          life: 0,
          maxLife: 42 + Math.random() * 34,
        });
      }
    };

    resize();
    spawnFire(45);
    window.addEventListener("resize", resize);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      const now = performance.now();
      if (now - lastMouseBurst > 32) {
        lastMouseBurst = now;
        spawnGasStream(
          mouseX - 65,
          mouseY + 22,
          mouseX + 45,
          mouseY - 22,
          3
        );
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      blastX = e.clientX - rect.left;
      blastY = e.clientY - rect.top;
      blastTimer = 36;
      spawnGasStream(blastX - 110, blastY + 45, blastX, blastY, 18, 1.35);
    };

    const handlePointerLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.02 }
    );
    observer.observe(canvas);

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

      for (let s = 0; s < 3; s++) {
        const wave = Math.sin(time * 0.09 + s * 2.1) * (24 + s * 14);
        const ctrlX = (nozzleX + targetX) * 0.5 + wave * 0.4;
        const ctrlY = Math.min(nozzleY, targetY) - (45 + s * 28) + wave;

        const grad = ctx.createLinearGradient(nozzleX, nozzleY, targetX, targetY);
        grad.addColorStop(0, "rgba(186, 230, 253, 0)");
        grad.addColorStop(0.35, `rgba(224, 242, 254, ${envelope * (0.22 - s * 0.04)})`);
        grad.addColorStop(0.75, `rgba(125, 211, 252, ${envelope * (0.3 - s * 0.05)})`);
        grad.addColorStop(1, "rgba(186, 230, 253, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 4 - s * 0.9;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(nozzleX - s * 14, nozzleY + s * 10);
        ctx.quadraticCurveTo(ctrlX, ctrlY, targetX, targetY);
        ctx.stroke();
      }

      // Subtle rotating vortex suction ring
      const ringRadius = Math.max(18, 95 * (1 - progress * 0.65));
      ctx.strokeStyle = `rgba(186, 230, 253, ${envelope * 0.25})`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([18, 14]);
      ctx.lineDashOffset = -time * 4;
      ctx.beginPath();
      ctx.arc(targetX, targetY, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    };

    const tick = () => {
      animationId = requestAnimationFrame(tick);
      if (!isVisible || document.hidden) return;

      cycleTimer += 1;
      if (blastTimer > 0) blastTimer -= 1;

      const cyclePos = cycleTimer % 240;
      const isBurning = cyclePos < 118;
      const isSuppressing = cyclePos >= 105 && cyclePos < 195;

      ctx.clearRect(0, 0, width, height);

      // Dynamic ambient heat glow
      const heatIntensity = isSuppressing
        ? Math.max(0.04, 0.34 * (1 - (cyclePos - 105) / 70))
        : isBurning
        ? 0.25 + Math.sin(cycleTimer * 0.08) * 0.06
        : 0.04;

      const ambientFire = ctx.createRadialGradient(
        width * 0.65,
        height * 0.68,
        12,
        width * 0.65,
        height * 0.6,
        Math.max(300, width * 0.42)
      );
      ambientFire.addColorStop(0, `rgba(255, 85, 0, ${heatIntensity})`);
      ambientFire.addColorStop(0.45, `rgba(211, 2, 1, ${heatIntensity * 0.65})`);
      ambientFire.addColorStop(1, "rgba(2, 2, 2, 0)");
      ctx.fillStyle = ambientFire;
      ctx.fillRect(0, 0, width, height);

      if (isBurning && cycleTimer % 2 === 0) {
        spawnFire(cyclePos < 45 ? 4 : 5);
      }

      if (isSuppressing) {
        const progress = (cyclePos - 105) / 90;
        const nozzleX = width * (0.16 + progress * 0.32);
        const nozzleY = height * (0.76 - progress * 0.26);
        vortexX = width * (0.65 - Math.sin(progress * Math.PI) * 0.06);
        vortexY = height * (0.5 - progress * 0.12);

        if (cycleTimer % 2 === 0) {
          spawnGasStream(nozzleX, nozzleY, vortexX, vortexY, 6);
        }

        const mistAura = ctx.createRadialGradient(
          vortexX,
          vortexY,
          10,
          vortexX,
          vortexY,
          Math.max(240, width * 0.3)
        );
        const mistAlpha = Math.sin(progress * Math.PI) * 0.22;
        mistAura.addColorStop(0, `rgba(186, 230, 253, ${mistAlpha})`);
        mistAura.addColorStop(0.5, `rgba(226, 232, 240, ${mistAlpha * 0.5})`);
        mistAura.addColorStop(1, "rgba(2, 2, 2, 0)");
        ctx.fillStyle = mistAura;
        ctx.fillRect(0, 0, width, height);

        drawGasRibbons(nozzleX, nozzleY, vortexX, vortexY, progress, cycleTimer);
      }

      // Update & draw elongated fire particles
      ctx.globalCompositeOperation = "lighter";
      for (let i = fireParticles.length - 1; i >= 0; i--) {
        const p = fireParticles[i];
        p.life += 1;

        if (isSuppressing) {
          const dx = vortexX - p.x;
          const dy = vortexY - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < width * 0.55) {
            p.sucked = true;
            const pull = 0.8 + (1 - dist / (width * 0.55)) * 1.55;
            p.vx += (dx / dist) * pull - (dy / dist) * 0.38;
            p.vy += (dy / dist) * pull + (dx / dist) * 0.38;
            p.vx *= 0.9;
            p.vy *= 0.9;
            p.heat = Math.max(0, p.heat - 0.05);
            p.radius *= 0.955;
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
          p.vx += Math.sin(p.life * 0.14 + p.seed) * 0.07;
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
          // Elongate flame vertically with subtle flicker
          ctx.scale(0.82, 1.42 + Math.sin(p.life * 0.25 + p.seed) * 0.15);
        }

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
        if (p.heat > 0.5) {
          grad.addColorStop(0, `rgba(255, 226, 120, ${alpha})`);
          grad.addColorStop(0.42, `rgba(255, 72, 0, ${alpha * 0.9})`);
          grad.addColorStop(1, "rgba(211, 2, 1, 0)");
        } else {
          grad.addColorStop(0, `rgba(226, 232, 240, ${alpha * 0.75})`);
          grad.addColorStop(0.5, `rgba(148, 163, 184, ${alpha * 0.38})`);
          grad.addColorStop(1, "rgba(15, 23, 42, 0)");
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Update & draw thin clean-agent gas/smoke puffs
      ctx.globalCompositeOperation = "screen";
      for (let i = gasParticles.length - 1; i >= 0; i--) {
        const g = gasParticles[i];
        g.life += 1;

        const dx = vortexX - g.x;
        const dy = vortexY - g.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 260) {
          g.vx += (-dy / dist) * 0.18 + (dx / dist) * 0.1;
          g.vy += (dx / dist) * 0.18 + (dy / dist) * 0.1;
        }

        g.vx *= 0.97;
        g.vy *= 0.97;
        g.x += g.vx;
        g.y += g.vy;
        g.radius += 0.75;

        const lifeRatio = g.life / g.maxLife;
        if (lifeRatio >= 1) {
          gasParticles.splice(i, 1);
          continue;
        }

        const fade = Math.sin(lifeRatio * Math.PI) * g.alpha;
        const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.radius);
        grad.addColorStop(0, `rgba(240, 249, 255, ${fade})`);
        grad.addColorStop(0.5, `rgba(125, 211, 252, ${fade * 0.65})`);
        grad.addColorStop(1, "rgba(125, 211, 252, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    animationId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerleave", handlePointerLeave);
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
