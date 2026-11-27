"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Radio, Shield } from "lucide-react";
import { SYSTEM_STEPS } from "@/data/rfkData";
import ScrollReveal from "@/components/ScrollReveal";

const SuppressionDiagram = dynamic(
  () => import("@/components/SuppressionDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl bg-rfk-surface border border-rfk-border/80 p-5 sm:p-6 aspect-[580/320]" />
    ),
  }
);

export default function SystemSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SYSTEM_STEPS.length);
    }, 3400);
    return () => clearInterval(interval);
  }, [autoCycle]);

  return (
    <section id="sistem" className="py-24 bg-rfk-black relative border-b border-rfk-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
                03 / SISTEM &bull; PROTEKSI AKTIF MOTORSPORT
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
        </ScrollReveal>

        {/* Dual Mode Card Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mode 1: Manual Portable Canister */}
          <ScrollReveal>
            <div className="h-full p-8 rounded-xl bg-rfk-surface/70 border border-rfk-border/80 flex flex-col justify-between">
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
          </ScrollReveal>

          {/* Mode 2: Integrated Manual Release Suppression Kit */}
          <ScrollReveal delayMs={90}>
            <div className="h-full p-8 rounded-xl bg-rfk-surface border border-rfk-red/45 flex flex-col justify-between">
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
          </ScrollReveal>
        </div>

        {/* Interactive 3-Stage Mechanism + Engine Bay Suction Graphic (Breaks 3-card template, R-05) */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-heading font-bold text-rfk-silver-light tracking-wider uppercase block mb-1">
                Alur Mekanisme Kerja
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-rfk-white">
                Tiga Tahap Proteksi Tanpa Jeda
              </h3>
            </div>

            {SYSTEM_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => {
                    setAutoCycle(false);
                    setActiveStep(idx);
                  }}
                  aria-pressed={isActive}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-rfk-red ${
                    isActive
                      ? "bg-rfk-surface border-rfk-red/70"
                      : "bg-rfk-surface/40 border-rfk-border/50 hover:border-rfk-border"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className={`font-mono text-xl font-black ${
                        isActive ? "text-rfk-red-light" : "text-rfk-silver"
                      }`}
                    >
                      {step.step}
                    </span>
                    <h4 className="font-heading font-bold text-base sm:text-lg uppercase text-rfk-white">
                      {step.title}
                    </h4>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-rfk-silver-light font-heading tracking-wide mb-1">
                    {step.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-rfk-silver font-sans leading-relaxed">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <SuppressionDiagram activeStep={activeStep} />
          </div>
        </div>

        {/* Technical Consultation CTA Banner */}
        <ScrollReveal>
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
              className="rfk-cta-sheen inline-flex items-center justify-center bg-rfk-red hover:bg-rfk-red-dark text-rfk-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-[transform,background-color] duration-200 hover:-translate-y-0.5 shrink-0 focus-visible:ring-2 focus-visible:ring-rfk-white min-h-[48px]"
            >
              <span>DISKUSIKAN INSTALASI</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
