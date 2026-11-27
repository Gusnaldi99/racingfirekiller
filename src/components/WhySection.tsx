import React from "react";
import dynamic from "next/dynamic";
import { Zap, ShieldCheck, Timer, Flame } from "lucide-react";
import { FEATURE_PILLARS } from "@/data/rfkData";
import ScrollReveal from "@/components/ScrollReveal";

const WhyComparisonGraphic = dynamic(
  () => import("@/components/WhyComparisonGraphic"),
  {
    ssr: false,
    loading: () => (
      <div className="mb-14 p-6 sm:p-8 rounded-xl bg-rfk-surface border border-rfk-border/80 min-h-[340px]" />
    ),
  }
);

export default function WhySection() {
  const flagshipPillars = FEATURE_PILLARS.slice(0, 2);
  const supportingPillars = FEATURE_PILLARS.slice(2, 4);

  const getIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />;
      case "Timer":
        return <Timer className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />;
    }
  };

  return (
    <section id="keunggulan" className="py-24 bg-rfk-black relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
                01 / KEUNGGULAN &bull; KETAHANAN MAKSIMAL
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
                SAAT API MUNCUL, <br />
                <span className="text-rfk-red-light">SETIAP DETIK</span> BERARTI.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-rfk-silver-light max-w-lg font-sans leading-relaxed">
              Kondisi ekstrem pada mobil balap dan modifikasi membutuhkan pemadaman instan yang tidak merusak komponen bernilai tinggi. Hartindo AF11E hadir sebagai solusi pemadaman yang bersih dan aman.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Residue vs Clean-Agent Suction Comparison Graphic */}
        <ScrollReveal>
          <WhyComparisonGraphic />
        </ScrollReveal>

        {/* Tier 1: Flagship Technical Advantages (Asymmetric 2-column emphasis, R-14) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {flagshipPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delayMs={index * 100}>
              <div className="relative overflow-hidden h-full group p-7 sm:p-8 rounded-xl bg-rfk-surface border border-rfk-border/70 hover:border-rfk-red/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rfk-red via-rfk-red-light to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-heading text-3xl font-black text-rfk-red-light">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-rfk-charcoal border border-rfk-border/60 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {getIcon(pillar.iconName)}
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold uppercase text-2xl sm:text-3xl tracking-wide text-rfk-white mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-sm sm:text-base font-semibold text-rfk-silver-light mb-3 font-heading tracking-wider">
                    {pillar.summary}
                  </div>

                  <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>

                {/* Purposeful micro-diagram illustrating why AF11E protects racing hardware */}
                <div className="mt-6 pt-4 border-t border-rfk-border/40 flex items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm font-heading uppercase tracking-wider text-rfk-silver font-semibold">
                    {index === 0
                      ? "Dielektrik Tinggi: Aman ECU & Wiring Harness"
                      : "Menguap 100%: Mesin Tetap Bersih"}
                  </span>
                  <svg
                    viewBox="0 0 88 22"
                    className="w-[88px] h-5 shrink-0"
                    aria-hidden="true"
                  >
                    {index === 0 ? (
                      <>
                        <path
                          d="M4 11 H26 L34 4 L44 18 L52 11 H84"
                          fill="none"
                          stroke="#404040"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M4 11 H26 L34 4 L44 18 L52 11 H84"
                          fill="none"
                          stroke="#7DD3FC"
                          strokeWidth="1.8"
                          className="animate-rfk-gas-flow"
                        />
                      </>
                    ) : (
                      <>
                        <path
                          d="M6 16 C28 16, 40 6, 82 6"
                          fill="none"
                          stroke="#BAE6FD"
                          strokeWidth="1.8"
                          className="animate-rfk-gas-suction"
                        />
                        <path
                          d="M6 12 C30 12, 46 3, 82 3"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeOpacity="0.6"
                          strokeWidth="1.2"
                          className="animate-rfk-gas-flow"
                        />
                      </>
                    )}
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tier 2: Supporting Performance Pillars (Compact Horizontal Row, R-14) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delayMs={(index + 2) * 90}>
              <div className="group h-full p-6 rounded-xl bg-rfk-surface/60 hover:bg-rfk-surface border border-rfk-border/60 hover:border-rfk-red/50 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="font-heading text-2xl font-black text-rfk-silver group-hover:text-rfk-red-light transition-colors">
                    {pillar.number}
                  </span>
                  <div className="p-2 rounded-lg bg-rfk-charcoal border border-rfk-border/50 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(pillar.iconName)}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold uppercase text-xl tracking-wide text-rfk-white mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-sm font-semibold text-rfk-silver-light mb-2 font-heading tracking-wider">
                    {pillar.summary}
                  </div>
                  <p className="text-sm text-rfk-silver-light font-sans leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
