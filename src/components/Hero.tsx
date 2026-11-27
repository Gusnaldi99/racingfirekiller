"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { METRICS } from "@/data/rfkData";
import HeroSuppressionCanvas, {
  SuppressionPhase,
} from "@/components/HeroSuppressionCanvas";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Hero() {
  const [phase, setPhase] = useState<SuppressionPhase>("fire");

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-0 overflow-hidden border-b border-rfk-border/50"
    >
      {/* Live Clean-Agent Gas Suction & Fire Suppression Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rfk-black/92 via-rfk-black/38 to-transparent z-0" />
        <HeroSuppressionCanvas onPhaseChange={setPhase} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p
              className="animate-rfk-hero-enter text-xs sm:text-sm font-heading font-bold tracking-wider uppercase text-rfk-silver mb-4"
              style={{ animationDelay: "60ms" }}
            >
              KESELAMATAN KEBAKARAN OTOMOTIF &bull; RFK 2026
            </p>

            <h1
              className="animate-rfk-hero-enter text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-[0.95] mb-6"
              style={{ animationDelay: "180ms" }}
            >
              BUKAN SEKADAR <br />
              <span className="text-rfk-red-light">CEPAT.</span> SIAP <br />
              SAAT DIBUTUHKAN.
            </h1>

            <p
              className="animate-rfk-hero-enter text-base sm:text-lg lg:text-xl text-rfk-silver-light max-w-xl font-sans leading-relaxed mb-8"
              style={{ animationDelay: "300ms" }}
            >
              Sistem pemadam api dan tabung gas bersih untuk mobil balap serta modifikasi. Hembusan gas Hartindo AF11E menyedot panas dan memadamkan api tanpa meninggalkan residu pada mesin maupun kelistrikan.
            </p>

            {/* Primary & Secondary CTAs */}
            <div
              className="animate-rfk-hero-enter flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              style={{ animationDelay: "420ms" }}
            >
              <a
                href="#produk"
                className="rfk-cta-sheen inline-flex items-center justify-center bg-rfk-red hover:bg-rfk-red-light text-rfk-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-rfk-red/25 focus-visible:ring-2 focus-visible:ring-rfk-white min-h-[48px]"
              >
                <span>PILIH VARIAN TABUNG</span>
              </a>

              <a
                href="#sistem"
                className="group inline-flex items-center justify-center gap-2 bg-rfk-charcoal/85 hover:bg-rfk-charcoal text-rfk-silver-light hover:text-rfk-white border border-rfk-border hover:border-rfk-red/60 font-heading font-semibold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-rfk-red min-h-[48px]"
              >
                <span>CARA KERJA SISTEM</span>
                <ArrowDownRight
                  className="w-4 h-4 text-rfk-red-light transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Hero Visual: Certified Canister Trio + Live Gas-Suction Ring */}
          <div
            className="animate-rfk-hero-enter lg:col-span-5 relative flex justify-center lg:justify-end"
            style={{ animationDelay: "220ms" }}
          >
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square flex items-center justify-center animate-rfk-float">
              {/* Single deliberate focus glow behind the primary product visual */}
              <div
                aria-hidden="true"
                className={`absolute inset-4 rounded-full blur-2xl pointer-events-none transition-colors duration-500 ${
                  phase === "sucking"
                    ? "bg-gradient-to-tr from-sky-400/25 via-transparent to-rfk-red/15"
                    : "bg-gradient-to-tr from-rfk-red/25 via-transparent to-orange-500/15"
                }`}
              />

              {/* Animated SVG thin clean-agent gas suction arcs sweeping around the canister */}
              <svg
                aria-hidden="true"
                viewBox="0 0 360 360"
                className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none z-20"
              >
                <defs>
                  <linearGradient id="heroGasArc" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0" />
                    <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 46 235 C 95 295, 240 310, 314 205"
                  fill="none"
                  stroke="url(#heroGasArc)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  className="animate-rfk-gas-suction"
                />
                <path
                  d="M 38 195 C 95 258, 250 265, 326 148"
                  fill="none"
                  stroke="url(#heroGasArc)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="animate-rfk-gas-suction"
                  style={{ animationDelay: "420ms" }}
                />
                <circle
                  cx="180"
                  cy="180"
                  r="164"
                  fill="none"
                  stroke="#BAE6FD"
                  strokeOpacity={phase === "sucking" ? "0.28" : "0.1"}
                  strokeWidth="1"
                  strokeDasharray="12 18"
                  className="animate-rfk-spin-slow"
                  style={{ transformOrigin: "180px 180px" }}
                />
              </svg>

              <div className="group relative w-full h-full rounded-2xl bg-gradient-to-tr from-rfk-charcoal/30 to-rfk-surface/20 border border-rfk-border/70 p-6 flex items-center justify-center">
                <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image
                    src="/assets/tabung/Perlengkapan-pemadam-kebakaran-otomotif.webp"
                    alt="Koleksi Tabung Racing Fire Killer Hartindo AF11E"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
              </div>

              {/* Material / Agent Label Card */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 z-30 bg-rfk-black/95 border border-rfk-red/60 px-4 py-3.5 rounded-lg shadow-xl">
                <div className="text-xs uppercase tracking-wider text-rfk-silver-light font-heading">
                  Media Pemadam
                </div>
                <div className="text-sm sm:text-base font-bold text-rfk-white font-heading">
                  Hartindo AF11E Clean Agent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Metrics Counter Bar */}
      <div className="relative z-10 w-full bg-rfk-surface/90 border-t border-rfk-border/60 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-rfk-red-light/80 to-transparent animate-rfk-scanline"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className={`flex flex-col p-3 sm:p-4 rounded-lg bg-rfk-charcoal/30 sm:bg-transparent sm:border-l sm:border-rfk-border/60 ${
                  index === 0 ? "sm:border-l-0 sm:pl-0" : "sm:pl-6"
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-1.5 font-heading">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-rfk-white tracking-tight">
                    <AnimatedCounter value={metric.value} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-rfk-red-light uppercase tracking-wider">
                    {metric.unit}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-bold text-rfk-white uppercase tracking-wider mt-1 font-heading">
                  {metric.label}
                </div>
                <p className="text-xs sm:text-sm text-rfk-silver font-sans mt-0.5 hidden lg:block">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
