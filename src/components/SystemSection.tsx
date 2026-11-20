import React from "react";
import { ArrowUpRight, Cpu, Radio, Shield, Gauge, Thermometer } from "lucide-react";
import { SYSTEM_STEPS } from "@/data/rfkData";

export default function SystemSection() {
  return (
    <section id="sistem" className="py-24 bg-rfk-black relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red tracking-wider uppercase mb-3">
              <span>03 / SISTEM</span>
              <span className="text-rfk-border">/</span>
              <span className="text-rfk-silver">PROTEKSI AKTIF MOTORSPORT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              DIRANCANG UNTUK <br />
              <span className="text-rfk-red">BERTINDAK</span> CEPAT.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-rfk-silver-light max-w-lg font-sans leading-relaxed">
            Saat insiden terjadi di lintasan balap, respon cepat adalah segalanya. Sistem RFK dirancang untuk aksi pemadaman instan melalui tabung mandiri kabin maupun integrasi sistem manual release suppression kit multi-nozzle.
          </p>
        </div>

        {/* Dual Mode Card Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mode 1: Manual Portable Canister */}
          <div className="p-8 rounded-xl bg-rfk-surface/70 border border-rfk-border/80 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rfk-charcoal text-rfk-silver-light text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider mb-4 border border-rfk-border">
                <Shield className="w-3.5 h-3.5 text-rfk-red" />
                <span>Opsi 1: Portable Standalone</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase text-rfk-white tracking-wide mb-3">
                Tabung Mandiri Kabin
              </h3>
              <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed mb-6">
                Penempatan tabung 1.0 KG atau 2.0 KG di dalam kabin dengan braket dudukan kokoh yang mudah dijangkau pengemudi. Dilengkapi safety pin yang memungkinkan penggunaan dan pelepasan tabung dalam hitungan detik saat situasi darurat.
              </p>
            </div>
            <div className="pt-4 border-t border-rfk-border/40 text-xs sm:text-sm text-rfk-silver-light font-mono flex items-center justify-between">
              <span>Penempatan: Lantai Kabin / Konsol</span>
              <span className="text-rfk-red font-bold">Respon Manual Instan</span>
            </div>
          </div>

          {/* Mode 2: Integrated Manual Release Suppression Kit */}
          <div className="p-8 rounded-xl bg-rfk-surface/70 border border-rfk-red/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rfk-red/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rfk-red/20 text-rfk-red text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider mb-4 border border-rfk-red/30">
                <Radio className="w-3.5 h-3.5" />
                <span>Opsi 2: Motorsport Suppression Kit</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase text-rfk-white tracking-wide mb-3">
                Manual Release Suppression System
              </h3>
              <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed mb-6">
                Sistem pemadam motorsport terintegrasi dengan aktivasi manual via kabel penarik darurat (cockpit pull cable). Menyalurkan gas Hartindo AF11E dari tabung 4 KG secara mekanis ke 8 titik nozzle distribusi di ruang mesin, turbocharger, dan tangki bahan bakar tanpa bergantung pada kelistrikan mobil.
              </p>
            </div>
            <div className="pt-4 border-t border-rfk-border/40 text-xs sm:text-sm text-rfk-silver-light font-mono flex items-center justify-between">
              <span>Coverage: Kompartemen Mesin + Fuel Cell</span>
              <span className="text-rfk-red font-bold">100% Mekanis Manual Release</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SYSTEM_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative p-6 sm:p-7 rounded-xl bg-rfk-surface/40 border border-rfk-border/60 hover:border-rfk-red/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-rfk-red">
                    {step.step}
                  </span>
                  <div className="p-2 rounded bg-rfk-charcoal/80 text-rfk-silver">
                    {idx === 0 && <Thermometer className="w-5 h-5 text-rfk-red" />}
                    {idx === 1 && <Gauge className="w-5 h-5 text-rfk-red" />}
                    {idx === 2 && <Cpu className="w-5 h-5 text-rfk-red" />}
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
              Tim engineering RFK siap membantu menghitung volume ruang mesin dan penempatan nozzle optimal.
            </p>
          </div>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-rfk-red hover:bg-rfk-red-light text-rfk-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 shrink-0 shadow-md shadow-rfk-red/25 focus-visible:ring-2 focus-visible:ring-rfk-white"
          >
            <span>DISKUSIKAN INSTALASI</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
