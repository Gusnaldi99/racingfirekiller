import React from "react";
import { Zap, ShieldCheck, Timer, Flame, AlertTriangle } from "lucide-react";
import { FEATURE_PILLARS } from "@/data/rfkData";

export default function WhySection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-6 h-6 text-rfk-red" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-rfk-red" />;
      case "Timer":
        return <Timer className="w-6 h-6 text-rfk-red" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-rfk-red" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-rfk-red" />;
    }
  };

  return (
    <section id="keunggulan" className="py-24 bg-rfk-black relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-rfk-red tracking-widest uppercase mb-3">
              <span>01 / KEUNGGULAN</span>
              <span className="text-rfk-border">/</span>
              <span className="text-rfk-silver">BUILT FOR THE LIMIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              SAAT API MUNCUL, <br />
              <span className="text-rfk-red">SETIAP DETIK</span> BERARTI.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-rfk-silver max-w-lg font-sans leading-relaxed">
            Kondisi ekstrem pada mobil balap dan modifikasi membutuhkan pemadaman instan yang tidak merusak komponen bernilai tinggi. Hartindo AF11E hadir sebagai solusi tanpa kompromi.
          </p>
        </div>

        {/* Motorsport Problem vs Solution Comparison Callout */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-rfk-surface/90 border border-rfk-border/80 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold uppercase text-sm tracking-wider text-rfk-white mb-1">
                  Bahaya APAR Powder Konvensional
                </h3>
                <p className="text-xs text-rfk-silver leading-relaxed font-sans">
                  Serbuk powder meleleh saat terkena panas mesin, membentuk kerak korosif yang merusak turbocharger, intake, dan silinder mesin hingga rusak total (total engine failure).
                </p>
              </div>
            </div>

            <div className="hidden md:flex md:col-span-2 justify-center">
              <div className="h-14 w-[1px] bg-rfk-border" />
            </div>

            <div className="md:col-span-5 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-rfk-red/10 text-rfk-red shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold uppercase text-sm tracking-wider text-rfk-white mb-1">
                  Solusi Gas Bersih Hartindo AF11E
                </h3>
                <p className="text-xs text-rfk-silver leading-relaxed font-sans">
                  Menguap bersih 100% tanpa residu serbuk sama sekali. Aman disemprotkan langsung pada ruang mesin menyala, kabel kelistrikan, ECU, dan interior kabin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group p-7 rounded-xl bg-rfk-surface/60 hover:bg-rfk-surface border border-rfk-border/60 hover:border-rfk-red/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-2xl font-black text-rfk-border group-hover:text-rfk-red transition-colors">
                    {pillar.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-rfk-charcoal/80 border border-rfk-border/50 group-hover:border-rfk-red/30 transition-colors">
                    {getIcon(pillar.iconName)}
                  </div>
                </div>

                <h3 className="font-heading font-extrabold uppercase text-lg tracking-wide text-rfk-white mb-2">
                  {pillar.title}
                </h3>

                <div className="text-xs font-semibold text-rfk-silver-light mb-3 font-heading tracking-wider">
                  {pillar.summary}
                </div>

                <p className="text-xs text-rfk-silver font-sans leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rfk-border/40">
                <span className="text-[11px] font-heading uppercase tracking-widest text-rfk-red font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Standar RFK 2026 &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
