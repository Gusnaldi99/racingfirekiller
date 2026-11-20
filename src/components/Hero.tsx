import React from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, ShieldAlert } from "lucide-react";
import { METRICS } from "@/data/rfkData";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden border-b border-rfk-border/50"
    >
      {/* Background Graphic & Motorsport Ambiance */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rfk-black via-rfk-black/90 to-rfk-black/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        {/* Subtle red motorsport glow positioned at top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-rfk-red/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Motorsport Eyebrow */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded bg-rfk-charcoal/80 border border-rfk-border text-rfk-silver-light text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-rfk-red animate-pulse" />
              <span>AUTOMOTIVE FIRE SAFETY</span>
              <span className="text-rfk-border">/</span>
              <span className="text-rfk-silver-light">RFK 2026</span>
            </div>

            {/* Aggressive Motorsport Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-[0.95] mb-6">
              BUKAN SEKADAR <br />
              <span className="text-rfk-red">CEPAT.</span> SIAP <br />
              SAAT DIBUTUHKAN.
            </h1>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg lg:text-xl text-rfk-silver-light max-w-xl font-sans leading-relaxed mb-8">
              Sistem pemadam motorsport dan tabung clean agent untuk mobil balap dan modifikasi. Lindungi mesin, kelistrikan, dan keselamatan pengemudi saat setiap detik menentukan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 bg-rfk-red hover:bg-rfk-red-light text-rfk-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 shadow-lg shadow-rfk-red/25 focus-visible:ring-2 focus-visible:ring-rfk-white"
              >
                <span>JELAJAHI PRODUK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#sistem"
                className="inline-flex items-center justify-center gap-2 bg-rfk-charcoal/80 hover:bg-rfk-charcoal text-rfk-silver-light hover:text-rfk-white border border-rfk-border font-heading font-semibold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 focus-visible:ring-2 focus-visible:ring-rfk-red"
              >
                <span>CARA KERJA SISTEM</span>
                <ArrowDownRight className="w-4 h-4 text-rfk-red" />
              </a>
            </div>
          </div>

          {/* Hero Visual: Certified Canister Trio & Quick Feature Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-rfk-charcoal/40 to-rfk-surface/20 border border-rfk-border/60 p-6 flex items-center justify-center backdrop-blur-sm">
                <div className="relative w-full h-full">
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

              {/* Verified Clean Agent Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-rfk-black/90 border border-rfk-red/50 p-4 rounded-lg shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-rfk-red/20 text-rfk-red flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
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
      </div>

      {/* Verified Metrics Counter Bar */}
      <div className="relative z-10 w-full bg-rfk-surface/80 border-t border-b border-rfk-border/60 backdrop-blur-md">
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
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-rfk-red uppercase tracking-wider">
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

