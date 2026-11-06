"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Gauge, Shield, Thermometer, Layers } from "lucide-react";
import { CANISTER_PRODUCTS } from "@/data/rfkData";

export default function ProductSection() {
  const [activeId, setActiveId] = useState("rfk-1kg");
  const activeProduct = CANISTER_PRODUCTS.find((p) => p.id === activeId) || CANISTER_PRODUCTS[0];

  return (
    <section id="produk" className="py-24 bg-rfk-obsidian relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-rfk-red tracking-widest uppercase mb-3">
              <span>02 / PRODUK</span>
              <span className="text-rfk-border">/</span>
              <span className="text-rfk-silver">HARTINDO AF11E</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              PERLINDUNGAN YANG <br />
              <span className="text-rfk-red">SESUAI</span> KEBUTUHAN.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-rfk-silver max-w-lg font-sans leading-relaxed">
            Hartindo AF11E tersedia dalam tiga varian kapasitas tabung resmi, siap dipasang dengan braket rilis cepat atau diintegrasikan sebagai automatic suppression system.
          </p>
        </div>

        {/* Canister Selector Tabs (Accessible ARIA Tablist) */}
        <div
          role="tablist"
          aria-label="Pilihan Kapasitas Tabung RFK"
          className="flex flex-wrap gap-3 mb-10 border-b border-rfk-border/60 pb-4"
        >
          {CANISTER_PRODUCTS.map((prod) => {
            const isSelected = prod.id === activeId;
            return (
              <button
                key={prod.id}
                role="tab"
                id={`tab-${prod.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${prod.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveId(prod.id)}
                className={`min-h-[44px] px-6 py-3 rounded-lg font-heading font-bold tracking-wider text-sm transition-all duration-200 flex items-center gap-3 border ${
                  isSelected
                    ? "bg-rfk-red text-rfk-white border-rfk-red shadow-lg shadow-rfk-red/25"
                    : "bg-rfk-surface/80 text-rfk-silver border-rfk-border hover:text-rfk-white hover:border-rfk-silver"
                }`}
              >
                <span className="text-xs font-mono opacity-80">RFK / 0{prod.weightNumber}</span>
                <span className="text-base uppercase">{prod.capacity}</span>
                <span
                  className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded ${
                    isSelected ? "bg-rfk-black/30 text-rfk-white" : "bg-rfk-charcoal text-rfk-silver"
                  }`}
                >
                  {prod.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Product Detail Panel */}
        <div
          id={`panel-${activeProduct.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeProduct.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-2xl bg-rfk-surface/80 border border-rfk-border shadow-2xl backdrop-blur-sm"
        >
          {/* Canister Render Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-[3/4] sm:aspect-square flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-radial-gradient from-rfk-charcoal/40 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-contain drop-shadow-[0_20px_35px_rgba(211,2,1,0.2)]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>

          {/* Product Specifications & Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded bg-rfk-red/20 text-rfk-red font-heading font-bold text-xs uppercase tracking-wider border border-rfk-red/30">
                {activeProduct.badge}
              </span>
              <span className="text-xs font-mono text-rfk-silver uppercase">
                {activeProduct.capacity} CYLINDER
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase font-heading text-rfk-white tracking-tight mb-2">
              {activeProduct.name}
            </h3>

            <p className="text-sm font-semibold text-rfk-silver-light font-heading tracking-wider mb-4">
              {activeProduct.tagline}
            </p>

            <p className="text-sm text-rfk-silver font-sans leading-relaxed mb-6">
              {activeProduct.description}
            </p>

            {/* Ideal For Callout */}
            <div className="mb-8 p-4 rounded-lg bg-rfk-black/60 border border-rfk-border/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rfk-red shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase font-heading font-bold text-rfk-white block">
                  Aplikasi Ideal Kendaraan:
                </span>
                <span className="text-xs text-rfk-silver font-sans">
                  {activeProduct.idealFor}
                </span>
              </div>
            </div>

            {/* Technical Specs Key Values Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50">
                <div className="flex items-center gap-1.5 text-rfk-silver text-[10px] uppercase font-heading mb-1">
                  <Shield className="w-3.5 h-3.5 text-rfk-red" />
                  <span>Rating Api</span>
                </div>
                <div className="text-sm font-bold text-rfk-white font-heading">
                  {activeProduct.specs.fireRating}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50">
                <div className="flex items-center gap-1.5 text-rfk-silver text-[10px] uppercase font-heading mb-1">
                  <Gauge className="w-3.5 h-3.5 text-rfk-red" />
                  <span>Tekanan Kerja</span>
                </div>
                <div className="text-sm font-bold text-rfk-white font-heading">
                  {activeProduct.specs.workingPressure}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50">
                <div className="flex items-center gap-1.5 text-rfk-silver text-[10px] uppercase font-heading mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-rfk-red" />
                  <span>Suhu Operasional</span>
                </div>
                <div className="text-sm font-bold text-rfk-white font-heading">
                  {activeProduct.specs.operatingTemp}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50 col-span-2 sm:col-span-3">
                <div className="flex items-center gap-1.5 text-rfk-silver text-[10px] uppercase font-heading mb-1">
                  <Layers className="w-3.5 h-3.5 text-rfk-red" />
                  <span>Material Tabung & Sertifikasi</span>
                </div>
                <div className="text-xs font-semibold text-rfk-white font-sans">
                  {activeProduct.specs.material} (Test Pressure: {activeProduct.specs.testPressure})
                </div>
              </div>
            </div>

            {/* Direct Consultation Link Button */}
            <div>
              <a
                href={`#kontak`}
                className="inline-flex items-center justify-center gap-2 bg-rfk-red hover:bg-rfk-red-light text-rfk-white font-heading font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded transition-all duration-200 shadow-md shadow-rfk-red/20 focus-visible:ring-2 focus-visible:ring-rfk-white"
              >
                <span>KONSULTASI UKURAN {activeProduct.capacity}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-[11px] text-rfk-silver/60 text-center mt-6 font-sans">
          * Seluruh unit RFK dilengkapi sertifikat EN3, CE Marking, ISO 9001, dan garansi tekanan resmi selama 5 tahun.
        </p>
      </div>
    </section>
  );
}
