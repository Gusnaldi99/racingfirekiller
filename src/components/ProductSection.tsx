"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Gauge, Shield, Thermometer, Layers } from "lucide-react";
import { CANISTER_PRODUCTS } from "@/data/rfkData";

export default function ProductSection() {
  const [activeId, setActiveId] = useState("rfk-1kg");
  const activeProduct = CANISTER_PRODUCTS.find((p) => p.id === activeId) || CANISTER_PRODUCTS[0];

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = (index + 1) % CANISTER_PRODUCTS.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = (index - 1 + CANISTER_PRODUCTS.length) % CANISTER_PRODUCTS.length;
    } else {
      return;
    }
    e.preventDefault();
    const nextProd = CANISTER_PRODUCTS[nextIndex];
    setActiveId(nextProd.id);
    document.getElementById(`tab-${nextProd.id}`)?.focus();
  };

  return (
    <section id="produk" className="py-24 bg-rfk-obsidian relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
              <span>02 / PRODUK</span>
              <span className="text-rfk-border" aria-hidden="true">/</span>
              <span className="text-rfk-silver">HARTINDO AF11E</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              PERLINDUNGAN YANG <br />
              <span className="text-rfk-red-light">SESUAI</span> KEBUTUHAN.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-rfk-silver-light max-w-lg font-sans leading-relaxed">
            Hartindo AF11E tersedia dalam varian tabung mandiri 1 KG dan 2 KG hingga paket lengkap 4 KG Fire Suppression Kit motorsport, siap dipasang dengan braket kokoh atau sistem nosel multi-titik.
          </p>
        </div>

        {/* Canister Selector Tabs (Accessible ARIA Tablist) */}
        <div
          role="tablist"
          aria-label="Pilihan Kapasitas Tabung RFK"
          className="flex flex-wrap gap-3 mb-10 border-b border-rfk-border/60 pb-4"
        >
          {CANISTER_PRODUCTS.map((prod, index) => {
            const isSelected = prod.id === activeId;
            const codeLabel = typeof prod.weightNumber === "number" ? `RFK / 0${prod.weightNumber}` : `RFK / ${prod.weightNumber}`;
            return (
              <button
                key={prod.id}
                role="tab"
                id={`tab-${prod.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${prod.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveId(prod.id)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                className={`min-h-[46px] px-5 sm:px-6 py-3 rounded-lg font-heading font-bold tracking-wider text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 sm:gap-3 border focus:outline-none focus-visible:ring-2 focus-visible:ring-rfk-red ${
                  isSelected
                    ? "bg-rfk-red text-rfk-white border-rfk-red shadow-lg shadow-rfk-red/25"
                    : "bg-rfk-surface/80 text-rfk-silver border-rfk-border hover:text-rfk-white hover:border-rfk-silver"
                }`}
              >
                <span className="text-xs sm:text-sm font-mono opacity-80">{codeLabel}</span>
                <span className="text-base sm:text-lg uppercase">{prod.capacity}</span>
                <span
                  className={`text-xs uppercase font-semibold px-2 py-0.5 rounded ${
                    isSelected ? "bg-rfk-black/30 text-rfk-white" : "bg-rfk-charcoal text-rfk-silver-light"
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-12 rounded-2xl bg-rfk-surface/80 border border-rfk-border shadow-2xl backdrop-blur-sm"
        >
          {/* Canister Render Image */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-none aspect-square flex items-center justify-center p-2 sm:p-4">
              <div className="absolute inset-0 bg-radial-gradient from-rfk-red/10 via-rfk-charcoal/40 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[540px] flex items-center justify-center">
                <Image
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-contain drop-shadow-[0_25px_45px_rgba(211,2,1,0.28)] transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 650px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Product Specifications & Narrative */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded bg-rfk-red/20 text-rfk-red-light font-heading font-bold text-xs sm:text-sm uppercase tracking-wider border border-rfk-red/30">
                {activeProduct.badge}
              </span>
              <span className="text-xs sm:text-sm font-mono text-rfk-silver-light uppercase">
                {activeProduct.id === "rfk-4kg" ? "SISTEM PEMADAM MOTORSPORT LENGKAP" : `TABUNG ${activeProduct.capacity}`}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-heading text-rfk-white tracking-tight mb-2">
              {activeProduct.name}
            </h3>

            <p className="text-base sm:text-lg font-semibold text-rfk-silver-light font-heading tracking-wider mb-4">
              {activeProduct.tagline}
            </p>

            <p className="text-base text-rfk-silver-light font-sans leading-relaxed mb-6">
              {activeProduct.description}
            </p>

            {/* Ideal For Callout */}
            <div className="mb-8 p-4 sm:p-5 rounded-lg bg-rfk-black/60 border border-rfk-border/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-rfk-red-light shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-sm uppercase font-heading font-bold text-rfk-white block mb-0.5">
                  Cocok untuk Kendaraan:
                </span>
                <span className="text-sm sm:text-base text-rfk-silver-light font-sans">
                  {activeProduct.idealFor}
                </span>
              </div>
            </div>

            {/* Technical Specs Key Values Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50">
                <div className="flex items-center gap-1.5 text-rfk-silver-light text-xs uppercase font-heading font-semibold mb-1">
                  <Shield className="w-4 h-4 text-rfk-red-light" aria-hidden="true" />
                  <span>Kelas Pemadaman</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-rfk-white font-heading">
                  {activeProduct.specs.fireRating}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50">
                <div className="flex items-center gap-1.5 text-rfk-silver-light text-xs uppercase font-heading font-semibold mb-1">
                  <Gauge className="w-4 h-4 text-rfk-red-light" aria-hidden="true" />
                  <span>Tekanan Kerja</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-rfk-white font-heading">
                  {activeProduct.specs.workingPressure}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50">
                <div className="flex items-center gap-1.5 text-rfk-silver-light text-xs uppercase font-heading font-semibold mb-1">
                  <Thermometer className="w-4 h-4 text-rfk-red-light" aria-hidden="true" />
                  <span>Suhu Operasional</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-rfk-white font-heading">
                  {activeProduct.specs.operatingTemp}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-rfk-charcoal/60 border border-rfk-border/50 col-span-2 sm:col-span-3">
                <div className="flex items-center gap-1.5 text-rfk-silver-light text-xs uppercase font-heading font-semibold mb-1">
                  <Layers className="w-4 h-4 text-rfk-red-light" aria-hidden="true" />
                  <span>Material Tabung &amp; Tekanan Uji</span>
                </div>
                <div className="text-sm font-semibold text-rfk-white font-sans">
                  {activeProduct.specs.material} (Tekanan Uji: {activeProduct.specs.testPressure})
                </div>
              </div>
            </div>

            {/* Direct Consultation Link Button */}
            <div>
              <a
                href={`#kontak`}
                className="inline-flex items-center justify-center gap-2 bg-rfk-red hover:bg-rfk-red-light text-rfk-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded transition-all duration-200 shadow-md shadow-rfk-red/20 focus-visible:ring-2 focus-visible:ring-rfk-white"
              >
                <span>
                  {activeProduct.id === "rfk-4kg"
                    ? "KONSULTASI FIRE SUPPRESSION KIT 4 KG"
                    : `KONSULTASI TABUNG ${activeProduct.capacity}`}
                </span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-xs sm:text-sm text-rfk-silver/80 text-center mt-6 font-sans">
          * Seluruh unit RFK dijamin keaslian formula Hartindo AF11E dengan garansi tekanan resmi selama 5 tahun.
        </p>
      </div>
    </section>
  );
}

