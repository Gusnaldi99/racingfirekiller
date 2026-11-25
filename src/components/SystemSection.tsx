import React from "react";
import { ArrowUpRight, Cpu, Radio, Shield, Gauge, Thermometer } from "lucide-react";
import { SYSTEM_STEPS } from "@/data/rfkData";
import ScrollReveal from "@/components/ScrollReveal";

export default function SystemSection() {
  return (
    <section id="sistem" className="py-24 bg-rfk-black relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
              <span>03 / SISTEM</span>
              <span className="text-rfk-border" aria-hidden="true">/</span>
              <span className="text-rfk-silver">PROTEKSI AKTIF MOTORSPORT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              DIRANCANG UNTUK <br />
              <span className="text-rfk-red-light">BERTINDAK</span> CEPAT.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-rfk-silver-light max-w-lg font-sans leading-relaxed">
            Saat insiden terjadi di lintasan balap, respons cepat menentukan keselamatan. Sistem RFK dirancang untuk pemadaman seketika melalui tabung mandiri di kabin maupun paket sistem pelepas manual multi-nosel.
          </p>
        </div>

        {/* Dual Mode Card Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mode 1: Manual Portable Canister */}
          <div className="p-8 rounded-xl bg-rfk-surface/70 border border-rfk-border/80 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rfk-charcoal text-rfk-silver-light text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider mb-4 border border-rfk-border">
                <Shield className="w-3.5 h-3.5 text-rfk-red-light" aria-hidden="true" />
                <span>Opsi 1: Tabung Portabel Mandiri</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase text-rfk-white tracking-wide mb-3">
                Tabung Mandiri Kabin
              </h3>
              <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed mb-6">
                Penempatan tabung 1.0 KG atau 2.0 KG di dalam kabin dengan braket dudukan kokoh yang mudah dijangkau pengemudi. Dilengkapi pin pengaman agar tabung dapat dilepas dan digunakan dalam hitungan detik saat darurat.
              </p>
            </div>
            <div className="pt-4 border-t border-rfk-border/40 text-xs sm:text-sm text-rfk-silver-light font-mono flex items-center justify-between">
              <span>Penempatan: Lantai Kabin / Konsol</span>
              <span className="text-rfk-red-light font-bold">Respons Manual Instan</span>
            </div>
          </div>

          {/* Mode 2: Integrated Manual Release Suppression Kit */}
          <div className="p-8 rounded-xl bg-rfk-surface/70 border border-rfk-red/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rfk-red/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rfk-red/20 text-rfk-red-light text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider mb-4 border border-rfk-red/30">
                <Radio className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Opsi 2: Paket Sistem Pemadam Terintegrasi</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase text-rfk-white tracking-wide mb-3">
                Sistem Pemadam Pelepas Manual
              </h3>
              <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed mb-6">
                Sistem pemadam motorsport terintegrasi dengan aktivasi manual melalui kabel penarik darurat di kokpit. Menyalurkan gas Hartindo AF11E dari tabung 4 KG secara mekanis ke 8 titik nosel distribusi di ruang mesin, turbocharger, dan tangki bahan bakar tanpa bergantung pada kelistrikan mobil.
              </p>
            </div>
            <div className="pt-4 border-t border-rfk-border/40 text-xs sm:text-sm text-rfk-silver-light font-mono flex items-center justify-between">
              <span>Cakupan: Ruang Mesin + Tangki Bahan Bakar</span>
              <span className="text-rfk-red-light font-bold">100% Mekanis Tanpa Kelistrikan</span>
            </div>
          </div>
        </div>

        {/* 3 Step Sequence Cards */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-heading font-bold text-rfk-silver-light tracking-wider uppercase block mb-1">
              Alur Mekanisme Kerja
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-rfk-white">
              Tiga Tahap Proteksi Tanpa Jeda
            </h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Animated Clean-Agent Gas Flow Connector (Desktop) */}
            <svg
              aria-hidden="true"
              className="hidden md:block pointer-events-none absolute top-11 left-[14%] w-[72%] h-6 z-0"
              preserveAspectRatio="none"
              viewBox="0 0 600 24"
            >
              <line
                x1="0"
                y1="12"
                x2="600"
                y2="12"
                stroke="#333333"
                strokeWidth="2"
              />
              <line
                x1="0"
                y1="12"
                x2="600"
                y2="12"
                stroke="#7DD3FC"
                strokeOpacity="0.85"
                strokeWidth="3"
                className="animate-rfk-gas-flow"
              />
              <circle r="4" cy="12" fill="#BAE6FD">
                <animate
                  attributeName="cx"
                  values="0;600"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {SYSTEM_STEPS.map((step, idx) => (
              <ScrollReveal key={step.step} delayMs={idx * 110} className="relative z-10">
                <div
                  className="h-full relative p-6 sm:p-7 rounded-xl bg-rfk-surface/80 border border-rfk-border/60 hover:border-rfk-red/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-rfk-red-light">
                      {step.step}
                    </span>
                    <div className="p-2 rounded bg-rfk-charcoal/80 text-rfk-silver">
                      {idx === 0 && <Thermometer className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />}
                      {idx === 1 && <Gauge className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />}
                      {idx === 2 && <Cpu className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />}
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-lg sm:text-xl uppercase text-rfk-white mb-1">
                    {step.title}
                  </h4>

                  <div className="text-sm font-semibold text-rfk-silver-light font-heading tracking-wide mb-3">
                    {step.tagline}
                  </div>

                  <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Technical Consultation CTA Banner */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-rfk-charcoal/90 via-rfk-surface to-rfk-charcoal/90 border border-rfk-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-extrabold text-xl sm:text-2xl uppercase text-rfk-white tracking-wider mb-1">
              Butuh Konfigurasi Khusus untuk Mobil Anda?
            </h4>
            <p className="text-sm sm:text-base text-rfk-silver-light font-sans">
              Tim teknis RFK siap membantu menghitung volume ruang mesin dan menentukan posisi nosel yang paling tepat.
            </p>
          </div>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-rfk-red hover:bg-rfk-red-light text-rfk-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 shrink-0 shadow-md shadow-rfk-red/25 focus-visible:ring-2 focus-visible:ring-rfk-white"
          >
            <span>DISKUSIKAN INSTALASI</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
