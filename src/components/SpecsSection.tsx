import React from "react";
import { Award, CheckCircle, FileText } from "lucide-react";
import { TECH_SPECS } from "@/data/rfkData";

export default function SpecsSection() {
  const certifications = [
    { title: "CE Marking", desc: "Kesesuaian standar keselamatan Uni Eropa" },
    { title: "EN3 Certified", desc: "Standar ketat eropa untuk tabung pemadam api" },
    { title: "ISO 9001", desc: "Manajemen mutu manufaktur berstandar global" },
    { title: "Bureau Veritas", desc: "Verifikasi independen integritas material tabung" },
  ];

  return (
    <section id="spesifikasi" className="py-24 bg-rfk-black relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-rfk-red tracking-widest uppercase mb-3">
              <FileText className="w-3.5 h-3.5 text-rfk-red" />
              <span>05 / SPESIFIKASI</span>
              <span className="text-rfk-border">/</span>
              <span className="text-rfk-silver">TECHNICAL DATA SHEET</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              DATA TEKNIS &amp; <br />
              <span className="text-rfk-red">SERTIFIKASI</span> RESMI.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-rfk-silver max-w-lg font-sans leading-relaxed">
            Spesifikasi resmi yang tertera pada setiap kemasan dan tabung Racing Fire Killer, teruji di bawah kondisi pengujian laboratorium bersertifikasi internasional.
          </p>
        </div>

        {/* Certification Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-4 sm:p-5 rounded-xl bg-rfk-surface/70 border border-rfk-border/70 flex flex-col items-start"
            >
              <div className="p-2 rounded bg-rfk-red/10 text-rfk-red mb-3">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-base text-rfk-white uppercase tracking-wider mb-1">
                {cert.title}
              </div>
              <div className="text-xs text-rfk-silver font-sans leading-relaxed">
                {cert.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Data Table */}
        <div className="rounded-2xl border border-rfk-border/80 bg-rfk-surface/90 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-rfk-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold uppercase text-lg text-rfk-white tracking-wider">
                Spesifikasi Teknis Canister RFK
              </h3>
              <p className="text-xs text-rfk-silver font-sans mt-0.5">
                Kesesuaian parameter produk Hartindo AF11E 2026
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-rfk-black/80 border border-rfk-border text-xs font-mono text-rfk-silver">
              <span>Barcode Resmi:</span>
              <span className="text-rfk-white font-bold">8 50026 73854 2</span>
            </div>
          </div>

          <div className="divide-y divide-rfk-border/50">
            {TECH_SPECS.map((row, index) => (
              <div
                key={row.parameter}
                className={`grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 p-4 sm:p-5 text-xs transition-colors hover:bg-rfk-charcoal/40 ${
                  index % 2 === 0 ? "bg-transparent" : "bg-rfk-charcoal/10"
                }`}
              >
                <div className="md:col-span-4 font-heading font-bold uppercase text-rfk-silver-light tracking-wide flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-rfk-red shrink-0" />
                  <span>{row.parameter}</span>
                </div>
                <div className="md:col-span-5 font-sans font-semibold text-rfk-white">
                  {row.value}
                </div>
                <div className="md:col-span-3 font-mono text-rfk-silver text-[11px] md:text-right">
                  {row.standard}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6 bg-rfk-black/80 border-t border-rfk-border/60 text-xs text-rfk-silver font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              Instruksi Darurat: 1. Tarik Safety Pin &bull; 2. Arahkan ke Sumber Api &bull; 3. Tekan Tuas Katup &bull; 4. Sapukan Merata
            </div>
            <div className="text-rfk-red font-heading font-bold uppercase tracking-wider text-[11px]">
              ENGINEERED FOR THE UNEXPECTED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

