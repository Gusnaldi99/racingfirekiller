"use client";

import React, { useEffect, useRef } from "react";

interface SuppressionDiagramProps {
  activeStep: number; // 0 = pull cable, 1 = valve open 14 bar, 2 = 8-nozzle gas suction
}

const NOZZLE_POINTS = [
  { x: 315, y: 86, tx: 376, ty: 122 },
  { x: 365, y: 80, tx: 376, ty: 122 },
  { x: 425, y: 86, tx: 376, ty: 122 },
  { x: 318, y: 158, tx: 376, ty: 122 },
  { x: 382, y: 162, tx: 376, ty: 122 },
  { x: 440, y: 156, tx: 376, ty: 122 },
  { x: 482, y: 102, tx: 521, ty: 124 },
  { x: 482, y: 146, tx: 521, ty: 124 },
];

/**
 * Custom live-canvas + SVG motorsport schematic demonstrating how the 4 KG manual kit
 * pulls the safety cable, opens the 14 Bar valve, and discharges thin clean-agent
 * gas streams through 8 brass nozzles to suck and extinguish engine & fuel-cell flames.
 */
export default function SuppressionDiagram({
  activeStep,
}: SuppressionDiagramProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stepRef = useRef(activeStep);

  useEffect(() => {
    stepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 580;
    const H = 240;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    interface Flame {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
      heat: number;
      targetX: number;
      targetY: number;
    }

    interface Jet {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
      tx: number;
      ty: number;
    }

    const flames: Flame[] = [];
    const jets: Jet[] = [];
    let frame = 0;
    let rafId = 0;
    let visible = true;

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const spawnFlames = () => {
      if (flames.length > 90) return;
      // Engine Bay flames
      flames.push({
        x: 376 + (Math.random() - 0.5) * 56,
        y: 136,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -(0.7 + Math.random() * 0.9),
        r: 7 + Math.random() * 9,
        life: 0,
        maxLife: 50 + Math.random() * 24,
        heat: 1,
        targetX: 376,
        targetY: 120,
      });
      // Fuel tank flames
      if (Math.random() < 0.7) {
        flames.push({
          x: 521 + (Math.random() - 0.5) * 34,
          y: 138,
          vx: (Math.random() - 0.5) * 0.32,
          vy: -(0.6 + Math.random() * 0.75),
          r: 6 + Math.random() * 7,
          life: 0,
          maxLife: 46 + Math.random() * 22,
          heat: 1,
          targetX: 521,
          targetY: 122,
        });
      }
    };

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (!visible || document.hidden) return;
      frame += 1;

      const step = stepRef.current;
      ctx.clearRect(0, 0, W, H);

      // 1. Live flickering flames in Engine Bay & Fuel Tank (always active, sucked in Stage 2/3)
      if (frame % 3 === 0) {
        spawnFlames();
      }

      // Stage 01: Traveling tension pulse along mechanical pull-cable (x: 72 -> 176, y: 116)
      if (step === 0) {
        const t = (frame % 75) / 75;
        const px = 72 + t * 104;
        const grad = ctx.createRadialGradient(px, 116, 0, px, 116, 12);
        grad.addColorStop(0, "rgba(255, 80, 80, 0.95)");
        grad.addColorStop(1, "rgba(211, 2, 1, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, 116, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Stage 02: Pressurized gas pulses racing through copper manifold pipes
      if (step >= 1) {
        const pipePaths = [
          { x0: 199, y0: 64, x1: 502, y1: 64 },
          { x0: 315, y0: 64, x1: 315, y1: 86 },
          { x0: 365, y0: 64, x1: 365, y1: 80 },
          { x0: 425, y0: 64, x1: 425, y1: 86 },
          { x0: 502, y0: 64, x1: 502, y1: 146 },
        ];
        const t = (frame % 62) / 62;
        pipePaths.forEach((seg, idx) => {
          const lt = (t + idx * 0.14) % 1;
          const gx = seg.x0 + (seg.x1 - seg.x0) * lt;
          const gy = seg.y0 + (seg.y1 - seg.y0) * lt;
          const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, 9);
          g.addColorStop(0, "rgba(186, 230, 253, 0.95)");
          g.addColorStop(1, "rgba(186, 230, 253, 0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(gx, gy, 9, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Stage 03: All 8 nozzles spray thin gas/smoke jets that curl & suck flames!
      if (step === 2) {
        if (frame % 3 === 0) {
          NOZZLE_POINTS.forEach((n) => {
            if (jets.length < 130) {
              const dx = n.tx - n.x;
              const dy = n.ty - n.y;
              const dist = Math.hypot(dx, dy) || 1;
              jets.push({
                x: n.x,
                y: n.y,
                vx: (dx / dist) * (1.6 + Math.random() * 0.9),
                vy: (dy / dist) * (1.6 + Math.random() * 0.9),
                r: 4 + Math.random() * 6,
                life: 0,
                maxLife: 38 + Math.random() * 14,
                tx: n.tx,
                ty: n.ty,
              });
            }
          });
        }

        // Rotating suction vortex streamlines in Engine Bay & Fuel Tank
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        [
          { cx: 376, cy: 122, rad: 34 },
          { cx: 521, cy: 124, rad: 25 },
        ].forEach((v) => {
          for (let arm = 0; arm < 3; arm++) {
            const a = frame * 0.12 + (arm * Math.PI * 2) / 3;
            ctx.strokeStyle = "rgba(186, 230, 253, 0.65)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(v.cx + Math.cos(a) * v.rad, v.cy + Math.sin(a) * v.rad);
            ctx.quadraticCurveTo(
              v.cx + Math.cos(a + 1.1) * (v.rad * 0.5),
              v.cy + Math.sin(a + 1.1) * (v.rad * 0.5),
              v.cx,
              v.cy
            );
            ctx.stroke();
          }
        });
        cCtxRestore(ctx);
      }

      // Update & draw flames
      ctx.globalCompositeOperation = "lighter";
      for (let i = flames.length - 1; i >= 0; i--) {
        const f = flames[i];
        f.life += 1;

        if (step === 2) {
          const dx = f.targetX - f.x;
          const dy = f.targetY - f.y;
          const dist = Math.hypot(dx, dy) || 1;
          f.vx += (dx / dist) * 0.55 - (dy / dist) * 0.22;
          f.vy += (dy / dist) * 0.55 + (dx / dist) * 0.22;
          f.vx *= 0.9;
          f.vy *= 0.9;
          f.heat = Math.max(0, f.heat - 0.048);
          f.r *= 0.958;
        } else {
          f.vx += Math.sin(f.life * 0.13) * 0.035;
        }

        f.x += f.vx;
        f.y += f.vy;

        const lr = f.life / f.maxLife;
        if (lr >= 1 || f.r < 1 || f.heat <= 0.03) {
          flames.splice(i, 1);
          continue;
        }

        const alpha = (1 - lr) * 0.9 * (0.35 + f.heat * 0.65);
        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
        if (f.heat > 0.45) {
          grad.addColorStop(0, `rgba(255, 232, 130, ${alpha})`);
          grad.addColorStop(0.5, `rgba(255, 72, 0, ${alpha * 0.9})`);
          grad.addColorStop(1, "rgba(211, 2, 1, 0)");
        } else {
          grad.addColorStop(0, `rgba(241, 245, 249, ${alpha * 0.85})`);
          grad.addColorStop(1, "rgba(186, 230, 253, 0)");
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw thin clean-agent gas jets from the 8 nozzles
      ctx.globalCompositeOperation = "screen";
      for (let i = jets.length - 1; i >= 0; i--) {
        const j = jets[i];
        j.life += 1;
        const dx = j.tx - j.x;
        const dy = j.ty - j.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 40) {
          j.vx += (-dy / dist) * 0.28 + (dx / dist) * 0.2;
          j.vy += (dx / dist) * 0.28 + (dy / dist) * 0.2;
        }
        j.x += j.vx;
        j.y += j.vy;
        j.r += 0.22;

        const lr = j.life / j.maxLife;
        if (lr >= 1) {
          jets.splice(i, 1);
          continue;
        }
        const alpha = Math.sin(lr * Math.PI) * 0.36;
        const g = ctx.createRadialGradient(j.x, j.y, 0, j.x, j.y, j.r);
        g.addColorStop(0, `rgba(248, 250, 252, ${alpha})`);
        g.addColorStop(0.55, `rgba(186, 230, 253, ${alpha * 0.65})`);
        g.addColorStop(1, "rgba(186, 230, 253, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    function cCtxRestore(context: CanvasRenderingContext2D) {
      context.restore();
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const cablePulled = activeStep >= 0;
  const valvePressurized = activeStep >= 1;
  const nozzlesActive = activeStep >= 2;

  return (
    <div className="rounded-2xl bg-rfk-surface border border-rfk-border/80 p-5 sm:p-6">
      <div className="mb-4 pb-3 border-b border-rfk-border/50">
        <div className="text-xs font-heading font-bold uppercase tracking-wider text-rfk-silver">
          Skema Kerja 8 Nosel &bull; 100% Mekanis
        </div>
        <div className="text-sm font-heading font-bold text-rfk-white uppercase">
          {activeStep === 0 && "Tahap 01: Kabel Darurat Ditarik dari Kokpit"}
          {activeStep === 1 && "Tahap 02: Katup 14 Bar Terbuka & Mengalir ke Pipa Tembaga"}
          {activeStep === 2 && "Tahap 03: 8 Nosel Menyedot & Memadamkan Api Tanpa Residu"}
        </div>
      </div>

      <div className="relative rounded-xl bg-rfk-black/80 border border-rfk-border/50 p-3 sm:p-4 overflow-hidden">
        <div className="relative w-full aspect-[580/240]">
          {/* Base Vector Schematic */}
          <svg
            viewBox="0 0 580 240"
            className="w-full h-full block"
            role="img"
            aria-label="Diagram animasi sistem pemadam 4 KG RFK dengan kabel tarik, katup 14 Bar, dan 8 nosel menyedot api di ruang mesin"
          >
            {/* Zone Containers: Cockpit | Tabung 4 KG | Engine Bay | Fuel Tank */}
            <rect x="16" y="24" width="110" height="180" rx="8" fill="#121212" stroke="#2A2A2A" />
            <text x="71" y="44" textAnchor="middle" fill="#B1B1B0" fontSize="10" fontWeight="700">
              KOKPIT
            </text>

            <rect
              x="140"
              y="24"
              width="118"
              height="180"
              rx="8"
              fill="#121212"
              stroke={valvePressurized ? "#D30201" : "#2A2A2A"}
            />
            <text x="199" y="44" textAnchor="middle" fill="#B1B1B0" fontSize="10" fontWeight="700">
              TABUNG 4 KG
            </text>

            <rect
              x="274"
              y="24"
              width="192"
              height="180"
              rx="8"
              fill="#121212"
              stroke={nozzlesActive ? "#7DD3FC" : "#2A2A2A"}
              strokeOpacity={nozzlesActive ? "0.7" : "1"}
            />
            <text x="370" y="44" textAnchor="middle" fill="#B1B1B0" fontSize="10" fontWeight="700">
              RUANG MESIN &amp; TURBO
            </text>

            <rect
              x="478"
              y="24"
              width="86"
              height="180"
              rx="8"
              fill="#121212"
              stroke={nozzlesActive ? "#7DD3FC" : "#2A2A2A"}
              strokeOpacity={nozzlesActive ? "0.7" : "1"}
            />
            <text x="521" y="44" textAnchor="middle" fill="#B1B1B0" fontSize="10" fontWeight="700">
              TANGKI BBM
            </text>

            {/* 1. Cockpit Emergency Pull Handle + Cable */}
            <rect
              x="38"
              y="104"
              width="34"
              height="24"
              rx="4"
              fill="#D30201"
              className={`transition-transform duration-500 ${
                cablePulled ? "-translate-x-2" : ""
              }`}
            />
            <text x="55" y="120" textAnchor="middle" fill="#FDFDFD" fontSize="9" fontWeight="700">
              TARIK
            </text>
            <path
              d="M72 116 L176 116"
              fill="none"
              stroke={cablePulled ? "#FF2B2A" : "#404040"}
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />

            {/* 2. 4 KG Cylinder + 14 Bar Mechanical Valve */}
            <rect
              x="176"
              y="88"
              width="46"
              height="84"
              rx="10"
              fill="#1C1C1C"
              stroke="#D30201"
              strokeWidth="1.5"
            />
            <rect
              x="187"
              y="74"
              width="24"
              height="14"
              rx="3"
              fill={valvePressurized ? "#FF2B2A" : "#333333"}
            />
            <circle
              cx="199"
              cy="128"
              r="14"
              fill="#0A0A0A"
              stroke={valvePressurized ? "#34D399" : "#404040"}
              strokeWidth="1.5"
            />
            <text x="199" y="131" textAnchor="middle" fill="#FDFDFD" fontSize="8" fontWeight="700">
              14 BAR
            </text>

            {/* Copper Distribution Manifold Pipe */}
            <path
              d="M199 74 V64 H502 V102 M315 64 V86 M365 64 V80 M425 64 V86 M318 64 V158 M382 64 V162 M440 64 V156 M482 102 H502 V146 H482"
              fill="none"
              stroke={valvePressurized ? "#F59E0B" : "#404040"}
              strokeWidth="2"
              strokeOpacity={valvePressurized ? "0.9" : "0.6"}
            />

            {/* Engine Core & Fuel Cell Targets */}
            <rect x="334" y="102" width="84" height="40" rx="6" fill="#1C1C1C" stroke="#333333" />
            <rect x="492" y="102" width="58" height="44" rx="6" fill="#1C1C1C" stroke="#333333" />

            {/* 8 Brass Nozzles */}
            {NOZZLE_POINTS.map((n) => (
              <circle
                key={`${n.x}-${n.y}`}
                cx={n.x}
                cy={n.y}
                r="3.5"
                fill={nozzlesActive ? "#BAE6FD" : "#F59E0B"}
              />
            ))}

            {/* Legend Strip */}
            <text x="290" y="226" textAnchor="middle" fill="#B1B1B0" fontSize="10">
              Kabel Mekanis (Merah) &bull; Pipa Tembaga (Kuning) &bull; Hembusan Gas AF11E Penyedot Api (Biru Muda)
            </text>
          </svg>

          {/* Live 60fps Particle & Gas Suction Overlay Canvas */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
