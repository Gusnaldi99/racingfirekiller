"use client";

import React, { useEffect, useRef } from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";

/**
 * Live dual-canvas comparison graphic:
 * Left: Conventional dry powder showering down and piling up as corrosive crust while embers linger.
 * Right: Hartindo AF11E thin clean-agent gas/vapor stream curling into a suction vortex,
 * pulling flames inward, extinguishing them cleanly, and evaporating with 0% residue.
 */
export default function WhyComparisonGraphic() {
  const powderCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const cleanCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const powderCanvas = powderCanvasRef.current;
    const cleanCanvas = cleanCanvasRef.current;
    if (!powderCanvas || !cleanCanvas) return;

    const pCtx = powderCanvas.getContext("2d");
    const cCtx = cleanCanvas.getContext("2d");
    if (!pCtx || !cCtx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = 360;
    const H = 128;

    [powderCanvas, cleanCanvas].forEach((canvas, idx) => {
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      const ctx = idx === 0 ? pCtx : cCtx;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });

    interface Grain {
      x: number;
      y: number;
      vy: number;
      vx: number;
      r: number;
      settled: boolean;
      alpha: number;
    }

    interface FlamePt {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
      heat: number;
      sucked: boolean;
    }

    interface MistPt {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
    }

    const grains: Grain[] = [];
    const powderFlames: FlamePt[] = [];
    const cleanFlames: FlamePt[] = [];
    const mistPts: MistPt[] = [];

    let frame = 0;
    let rafId = 0;
    let visible = true;

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(powderCanvas);
    observer.observe(cleanCanvas);

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (!visible || document.hidden) return;
      frame += 1;

      // ==========================================
      // LEFT CANVAS: APAR SERBUK KONVENSIONAL
      // ==========================================
      pCtx.clearRect(0, 0, W, H);

      // Hot metal engine surface
      pCtx.fillStyle = "#262626";
      pCtx.fillRect(24, 94, W - 48, 12);

      // Growing/lingering yellow-grey corrosive crust mound
      const crustPulse = 0.65 + Math.sin(frame * 0.05) * 0.1;
      pCtx.fillStyle = `rgba(234, 179, 8, ${crustPulse * 0.48})`;
      pCtx.beginPath();
      pCtx.moveTo(36, 94);
      pCtx.quadraticCurveTo(115, 76, 185, 90);
      pCtx.quadraticCurveTo(255, 78, 324, 94);
      pCtx.closePath();
      pCtx.fill();

      // Spawn falling dry powder particles
      if (frame % 3 === 0 && grains.length < 95) {
        grains.push({
          x: 45 + Math.random() * (W - 90),
          y: 4 + Math.random() * 12,
          vx: (Math.random() - 0.5) * 0.35,
          vy: 0.9 + Math.random() * 0.85,
          r: 1.6 + Math.random() * 2,
          settled: false,
          alpha: 0.85,
        });
      }

      // Stubborn fire embers flickering on crust
      if (frame % 4 === 0 && powderFlames.length < 40) {
        powderFlames.push({
          x: 162 + (Math.random() - 0.5) * 44,
          y: 90,
          vx: (Math.random() - 0.5) * 0.38,
          vy: -(0.55 + Math.random() * 0.8),
          r: 8 + Math.random() * 9,
          life: 0,
          maxLife: 48 + Math.random() * 24,
          heat: 1,
          sucked: false,
        });
      }

      // Draw powder flames
      pCtx.globalCompositeOperation = "lighter";
      for (let i = powderFlames.length - 1; i >= 0; i--) {
        const f = powderFlames[i];
        f.life += 1;
        f.x += f.vx + Math.sin(f.life * 0.25) * 0.25;
        f.y += f.vy;
        const lr = f.life / f.maxLife;
        if (lr >= 1) {
          powderFlames.splice(i, 1);
          continue;
        }
        const a = (1 - lr) * 0.72;
        const g = pCtx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
        g.addColorStop(0, `rgba(254, 240, 138, ${a})`);
        g.addColorStop(0.5, `rgba(249, 115, 22, ${a * 0.8})`);
        g.addColorStop(1, "rgba(211, 2, 1, 0)");
        pCtx.fillStyle = g;
        pCtx.beginPath();
        pCtx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        pCtx.fill();
      }
      pCtx.globalCompositeOperation = "source-over";

      // Update & draw powder grains
      for (let i = grains.length - 1; i >= 0; i--) {
        const g = grains[i];
        if (!g.settled) {
          g.x += g.vx;
          g.y += g.vy;
          if (g.y >= 88 + Math.random() * 4) {
            g.settled = true;
          }
        } else {
          g.alpha -= 0.015;
          if (g.alpha <= 0.02) {
            grains.splice(i, 1);
            continue;
          }
        }
        pCtx.fillStyle = `rgba(250, 204, 21, ${g.alpha})`;
        pCtx.beginPath();
        pCtx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
        pCtx.fill();
      }

      pCtx.fillStyle = "#B1B1B0";
      pCtx.font = "600 10.5px sans-serif";
      pCtx.textAlign = "center";
      pCtx.fillText("Serbuk mengendap & membentuk kerak panas", W / 2, 121);

      // ==========================================
      // RIGHT CANVAS: GAS BERSIH HARTINDO AF11E
      // ==========================================
      cCtx.clearRect(0, 0, W, H);

      const cycle = frame % 260;
      const burning = cycle < 145;
      const sucking = cycle >= 112 && cycle < 225;
      const vortexX = 258;
      const vortexY = 66;
      const nozzleX = 36;
      const nozzleY = 52;

      // Clean engine metal surface (remains spotless)
      cCtx.fillStyle = "#262626";
      cCtx.fillRect(24, 94, W - 48, 12);

      // Nozzle emitter
      cCtx.fillStyle = "#D30201";
      cCtx.fillRect(18, 45, 18, 13);

      // Spawn flames during ignition phase
      if (burning && frame % 3 === 0 && cleanFlames.length < 75) {
        cleanFlames.push({
          x: vortexX + (Math.random() - 0.5) * 56,
          y: 92,
          vx: (Math.random() - 0.5) * 0.55,
          vy: -(0.85 + Math.random() * 1.15),
          r: 10 + Math.random() * 12,
          life: 0,
          maxLife: 54 + Math.random() * 24,
          heat: 1,
          sucked: false,
        });
      }

      // Draw thin sweeping gas ribbons & suction vortex
      if (sucking) {
        const p = (cycle - 112) / 113;
        const env = Math.sin(p * Math.PI);

        // Spawn high-velocity thin mist wisps from nozzle
        if (frame % 3 === 0) {
          for (let k = 0; k < 3; k++) {
            if (mistPts.length < 85) {
              mistPts.push({
                x: nozzleX,
                y: nozzleY + (Math.random() - 0.5) * 6,
                vx: 2.8 + Math.random() * 1.6,
                vy: (Math.random() - 0.5) * 0.75,
                r: 6 + Math.random() * 10,
                life: 0,
                maxLife: 52 + Math.random() * 20,
              });
            }
          }
        }

        cCtx.save();
        cCtx.globalCompositeOperation = "screen";
        for (let s = 0; s < 4; s++) {
          const wave = Math.sin(frame * 0.09 + s * 1.5) * (10 + s * 5);
          const grad = cCtx.createLinearGradient(nozzleX, nozzleY, vortexX, vortexY);
          grad.addColorStop(0, "rgba(226, 232, 240, 0)");
          grad.addColorStop(0.45, `rgba(240, 249, 255, ${env * (0.45 - s * 0.08)})`);
          grad.addColorStop(0.85, `rgba(186, 230, 253, ${env * 0.5})`);
          grad.addColorStop(1, "rgba(226, 232, 240, 0)");

          cCtx.strokeStyle = grad;
          cCtx.lineWidth = Math.max(1, 2.8 - s * 0.5);
          cCtx.lineCap = "round";
          cCtx.beginPath();
          cCtx.moveTo(nozzleX, nozzleY + s * 2);
          cCtx.quadraticCurveTo(148, 30 + wave, vortexX, vortexY);
          cCtx.stroke();
        }

        // Rotating suction spiral over the fire
        for (let arm = 0; arm < 3; arm++) {
          const a0 = frame * 0.12 + (arm * Math.PI * 2) / 3;
          const rOuter = 30 * (1 - p * 0.35);
          cCtx.strokeStyle = `rgba(186, 230, 253, ${env * 0.65})`;
          cCtx.lineWidth = 1.4;
          cCtx.beginPath();
          cCtx.moveTo(vortexX + Math.cos(a0) * rOuter, vortexY + Math.sin(a0) * rOuter);
          cCtx.quadraticCurveTo(
            vortexX + Math.cos(a0 + 1.1) * (rOuter * 0.5),
            vortexY + Math.sin(a0 + 1.1) * (rOuter * 0.5),
            vortexX,
            vortexY
          );
          cCtx.stroke();
        }
        cCtx.restore();
      }

      // Update & draw clean-agent flames (sucked into vortex & cooled)
      cCtx.globalCompositeOperation = "lighter";
      for (let i = cleanFlames.length - 1; i >= 0; i--) {
        const f = cleanFlames[i];
        f.life += 1;

        if (sucking) {
          const dx = vortexX - f.x;
          const dy = vortexY - f.y;
          const dist = Math.hypot(dx, dy) || 1;
          f.sucked = true;
          f.vx += (dx / dist) * 0.6 - (dy / dist) * 0.22;
          f.vy += (dy / dist) * 0.6 + (dx / dist) * 0.22;
          f.vx *= 0.9;
          f.vy *= 0.9;
          f.heat = Math.max(0, f.heat - 0.038);
          f.r *= 0.962;
        } else {
          f.vx += Math.sin(f.life * 0.12) * 0.04;
        }

        f.x += f.vx;
        f.y += f.vy;

        const lr = f.life / f.maxLife;
        if (lr >= 1 || f.r < 1.2 || f.heat <= 0.03) {
          cleanFlames.splice(i, 1);
          continue;
        }

        const alpha = (1 - lr) * 0.85 * (0.3 + f.heat * 0.7);
        const grad = cCtx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
        if (f.heat > 0.45) {
          grad.addColorStop(0, `rgba(255, 226, 120, ${alpha})`);
          grad.addColorStop(0.5, `rgba(255, 72, 0, ${alpha * 0.9})`);
          grad.addColorStop(1, "rgba(211, 2, 1, 0)");
        } else {
          grad.addColorStop(0, `rgba(241, 245, 249, ${alpha * 0.8})`);
          grad.addColorStop(1, "rgba(186, 230, 253, 0)");
        }
        cCtx.fillStyle = grad;
        cCtx.beginPath();
        cCtx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        cCtx.fill();
      }

      // Draw evaporating clean-agent mist wisps
      cCtx.globalCompositeOperation = "screen";
      for (let i = mistPts.length - 1; i >= 0; i--) {
        const m = mistPts[i];
        m.life += 1;
        const dx = vortexX - m.x;
        const dy = vortexY - m.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 130) {
          m.vx += (-dy / dist) * 0.25 + (dx / dist) * 0.2;
          m.vy += (dx / dist) * 0.25 + (dy / dist) * 0.2;
        }
        m.vx *= 0.96;
        m.vy *= 0.96;
        m.x += m.vx;
        m.y += m.vy;
        m.r += 0.25;

        const lr = m.life / m.maxLife;
        if (lr >= 1) {
          mistPts.splice(i, 1);
          continue;
        }
        const a = Math.sin(lr * Math.PI) * 0.26;
        const g = cCtx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r);
        g.addColorStop(0, `rgba(248, 250, 252, ${a})`);
        g.addColorStop(0.6, `rgba(186, 230, 253, ${a * 0.55})`);
        g.addColorStop(1, "rgba(186, 230, 253, 0)");
        cCtx.fillStyle = g;
        cCtx.beginPath();
        cCtx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        cCtx.fill();
      }
      cCtx.globalCompositeOperation = "source-over";

      cCtx.fillStyle = "#E2E2E2";
      cCtx.font = "600 10.5px sans-serif";
      cCtx.textAlign = "center";
      cCtx.fillText("Gas tipis menyedot api & menguap 0% residu", W / 2, 121);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mb-14 p-6 sm:p-8 rounded-xl bg-rfk-surface border border-rfk-border/80">
      <div className="mb-6 pb-4 border-b border-rfk-border/50">
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-rfk-silver">
          Visualisasi Reaksi Media Pemadam di Ruang Mesin
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Left: Dry Powder Risk + Live Powder Canvas */}
        <div className="md:col-span-5 flex flex-col justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500 shrink-0">
              <AlertTriangle className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading font-bold uppercase text-base sm:text-lg tracking-wider text-rfk-white mb-1">
                Risiko APAR Serbuk Konvensional
              </h3>
              <p className="text-sm sm:text-base text-rfk-silver-light leading-relaxed font-sans">
                Serbuk kimia meleleh saat terkena panas mesin, lalu membentuk kerak korosif yang merusak turbocharger, intake, dan silinder hingga berisiko menyebabkan kerusakan mesin total.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-rfk-black/80 border border-rfk-border/60 p-2 overflow-hidden">
            <canvas
              ref={powderCanvasRef}
              className="w-full h-32 block"
              aria-label="Animasi serbuk APAR konvensional menumpuk sebagai kerak pada permukaan mesin"
            />
          </div>
        </div>

        {/* Center VS Separator */}
        <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center gap-2">
          <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-rfk-border" />
          <span className="px-2.5 py-1 rounded bg-rfk-charcoal border border-rfk-border text-xs font-heading font-bold uppercase tracking-widest text-rfk-silver-light">
            VS
          </span>
          <div className="h-16 w-[1px] bg-gradient-to-t from-transparent to-rfk-border" />
        </div>

        {/* Right: Hartindo AF11E Thin Gas Suction Live Canvas */}
        <div className="md:col-span-5 flex flex-col justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-rfk-red/10 text-rfk-red-light shrink-0">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading font-bold uppercase text-base sm:text-lg tracking-wider text-rfk-white mb-1">
                Solusi Gas Bersih Hartindo AF11E
              </h3>
              <p className="text-sm sm:text-base text-rfk-silver-light leading-relaxed font-sans">
                Hembusan gas tipis menyedot panas dan memadamkan api secara instan, lalu menguap bersih 100% tanpa meninggalkan residu serbuk pada mesin, ECU, dan kabin.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-rfk-black/80 border border-rfk-red/45 p-2 overflow-hidden">
            <canvas
              ref={cleanCanvasRef}
              className="w-full h-32 block"
              aria-label="Animasi hembusan gas tipis Hartindo AF11E menyedot api dan menguap bersih tanpa residu"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
