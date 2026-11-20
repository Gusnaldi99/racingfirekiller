"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flag, ArrowRight, ShieldCheck, Flame, Gauge, Zap } from "lucide-react";
import { SHOWCASES } from "@/data/showcaseData";

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 bg-rfk-obsidian relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red tracking-wider uppercase mb-3">
              <Flag className="w-4 h-4 text-rfk-red" />
              <span>04 / SHOWCASE</span>
              <span className="text-rfk-border">/</span>
              <span className="text-rfk-silver">PROVEN ON TRACK &amp; BUILDS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              DIPERCAYA PADA KARYA <br />
              <span className="text-rfk-red">MOTORSPORT TERTINGGI.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-rfk-silver-light max-w-lg font-sans leading-relaxed">
            Dari panggung modifikasi bergengsi dunia SEMA Show Las Vegas hingga lintasan drifting ekstrem bersama tim Garasi Drift, tabung dan sistem pemadam Racing Fire Killer terbukti melindungi mobil balap bernilai tinggi tanpa kompromi.
          </p>
        </div>

        {/* 2 Featured Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SHOWCASES.map((item) => (
            <div
              key={item.slug}
              className="group relative rounded-2xl overflow-hidden bg-rfk-surface/90 border border-rfk-border/80 hover:border-rfk-red/70 transition-all duration-300 flex flex-col shadow-2xl hover:shadow-rfk-red/10"
            >
              {/* Image Container with Hover Zoom */}
              <Link
                href={`/showcase/${item.slug}/`}
                className="relative w-full aspect-[16/10] overflow-hidden bg-rfk-black block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rfk-red"
                aria-label={`Lihat detail instalasi RFK pada ${item.title}`}
              >
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-rfk-surface via-transparent to-black/50 opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rfk-black/80 backdrop-blur-md border border-rfk-border text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-rfk-white">
                    <span className="w-2 h-2 rounded-full bg-rfk-red animate-pulse" />
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="text-xs sm:text-sm font-mono text-rfk-red tracking-wider uppercase mb-1">
                    {item.categoryTag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-rfk-white tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </Link>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-base text-rfk-silver-light font-sans leading-relaxed mb-6">
                    {item.cardSummary}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rfk-charcoal/60 border border-rfk-border/60 text-xs sm:text-sm font-heading font-medium uppercase text-rfk-silver-light">
                      <ShieldCheck className="w-3.5 h-3.5 text-rfk-red" />
                      Hartindo AF11E Clean Agent
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rfk-charcoal/60 border border-rfk-border/60 text-xs sm:text-sm font-heading font-medium uppercase text-rfk-silver-light">
                      <Gauge className="w-3.5 h-3.5 text-rfk-red" />
                      Tekanan Presisi 14 Bar
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rfk-charcoal/60 border border-rfk-border/60 text-xs sm:text-sm font-heading font-medium uppercase text-rfk-silver-light">
                      <Zap className="w-3.5 h-3.5 text-rfk-red" />
                      Non-Konduktif Aman ECU
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rfk-charcoal/60 border border-rfk-border/60 text-xs sm:text-sm font-heading font-medium uppercase text-rfk-silver-light">
                      <Flame className="w-3.5 h-3.5 text-rfk-red" />
                      Padam Cepat &lt; 10 Detik
                    </span>
                  </div>
                </div>

                {/* Action Link to Detail Page */}
                <div className="pt-4 border-t border-rfk-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-sm font-mono text-rfk-silver-light">
                    5 Dokumentasi Foto Instalasi
                  </span>
                  <Link
                    href={`/showcase/${item.slug}/`}
                    className="inline-flex items-center justify-center gap-2 bg-rfk-red hover:bg-rfk-red-dark text-rfk-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded transition-all duration-200 group-hover:translate-x-1 shadow-md shadow-rfk-red/20 focus-visible:ring-2 focus-visible:ring-rfk-white min-h-[44px]"
                  >
                    <span>LIHAT DETAIL INSTALASI RFK</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
