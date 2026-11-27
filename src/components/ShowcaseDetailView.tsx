"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  MessageSquare,
  Wrench,
  Gauge,
  Flame,
  Zap,
  ChevronRight,
} from "lucide-react";
import { ShowcaseItem } from "@/data/showcaseData";

interface ShowcaseDetailViewProps {
  item: ShowcaseItem;
  otherShowcase: ShowcaseItem;
}

export default function ShowcaseDetailView({ item, otherShowcase }: ShowcaseDetailViewProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activePhoto = item.gallery[activePhotoIndex] || item.gallery[0];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev + 1) % item.gallery.length);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev - 1 + item.gallery.length) % item.gallery.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, item.gallery.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const waUrl = `https://wa.me/6281290003278?text=${encodeURIComponent(item.whatsappMessage)}`;

  return (
    <div className="bg-rfk-black text-rfk-white min-h-screen pt-24 pb-20">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="border-b border-rfk-border/60 bg-rfk-surface/40 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-mono text-rfk-silver-light">
            <Link
              href="/"
              className="hover:text-rfk-white transition-colors focus-visible:ring-1 focus-visible:ring-rfk-red rounded px-1"
            >
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4 text-rfk-border" />
            <Link
              href="/#showcase"
              className="hover:text-rfk-white transition-colors focus-visible:ring-1 focus-visible:ring-rfk-red rounded px-1"
            >
              Showcase
            </Link>
            <ChevronRight className="w-4 h-4 text-rfk-border" />
            <span className="text-rfk-red-light font-medium truncate max-w-[180px] sm:max-w-none">
              {item.title}
            </span>
          </div>

          <Link
            href="/#showcase"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider text-rfk-silver-light hover:text-rfk-white transition-colors py-1.5 px-3 rounded bg-rfk-charcoal/50 hover:bg-rfk-charcoal border border-rfk-border focus-visible:ring-2 focus-visible:ring-rfk-red"
          >
            <ArrowLeft className="w-4 h-4 text-rfk-red" />
            <span>Kembali ke Showcase</span>
          </Link>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-12 sm:py-16 border-b border-rfk-border/50 relative overflow-hidden bg-gradient-to-b from-rfk-charcoal/30 to-rfk-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-rfk-surface border border-rfk-border text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-rfk-red-light mb-4">
              <span className="w-2 h-2 rounded-full bg-rfk-red" aria-hidden="true" />
              <span>{item.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight mb-4">
              {item.title}
            </h1>

            <p className="text-base sm:text-xl text-rfk-silver-light font-sans leading-relaxed mb-8">
              {item.overview}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center gap-2.5 bg-rfk-red hover:bg-rfk-red-dark text-rfk-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded transition-colors shadow-lg shadow-rfk-red/25 focus-visible:ring-2 focus-visible:ring-rfk-white"
              >
                <MessageSquare className="w-4 h-4" />
                <span>KONSULTASI INSTALASI SEPERTI INI</span>
              </a>

              <a
                href="#galeri"
                className="min-h-[46px] inline-flex items-center gap-2 bg-rfk-surface hover:bg-rfk-charcoal text-rfk-white border border-rfk-border font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-rfk-red"
              >
                <span>LIHAT 5 FOTO INSTALASI</span>
                <ArrowRight className="w-4 h-4 text-rfk-red" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section id="galeri" className="py-16 border-b border-rfk-border/50 bg-rfk-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-2">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>DOKUMENTASI FOTO INSTALASI RFK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-rfk-white">
              GALERI &amp; INTEGRASI SISTEM
            </h2>
          </div>

          {/* Featured Large Active Photo */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-rfk-black border border-rfk-border/90 shadow-2xl group mb-6">
            <Image
              src={activePhoto.src}
              alt={activePhoto.title}
              fill
              priority
              className="object-cover transition-transform duration-500"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            {/* Dark gradient overlay for caption readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-rfk-black via-transparent to-black/30 opacity-80" />

            {/* Tag Badge Top Left */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1.5 rounded bg-rfk-black/80 backdrop-blur-md border border-rfk-border text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-rfk-silver-light">
                {activePhoto.tag}
              </span>
            </div>

            {/* Zoom / Lightbox Trigger Top Right */}
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-rfk-black/80 hover:bg-rfk-red text-rfk-white border border-rfk-border transition-colors focus-visible:ring-2 focus-visible:ring-rfk-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Perbesar foto"
            >
              <Maximize2 className="w-5 h-5" />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 z-10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rfk-red" />
                <h3 className="text-xl sm:text-3xl font-extrabold uppercase font-heading text-rfk-white tracking-wide">
                  {activePhoto.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-rfk-silver-light max-w-2xl font-sans leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>

          {/* 5 Thumbnails Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {item.gallery.map((photo, idx) => {
              const isActive = idx === activePhotoIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rfk-red ${
                    isActive
                      ? "border-rfk-red ring-2 ring-rfk-red/40 scale-[1.02]"
                      : "border-rfk-border/70 hover:border-rfk-red/50 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Pilih foto ${idx + 1}: ${photo.title}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 220px"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-rfk-black/85 backdrop-blur-sm border border-rfk-border/70 text-xs font-mono font-bold text-rfk-white shadow">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-1.5 left-2 right-2 text-xs font-heading font-semibold uppercase text-rfk-white truncate drop-shadow">
                    {photo.tag}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep Dive Story: Why This Build Demanded RFK */}
      <section className="py-20 border-b border-rfk-border/50 bg-rfk-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story Text Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
                <Flame className="w-4 h-4" aria-hidden="true" />
                <span>KEUNGGULAN PROTEKSI BALAP</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-rfk-white leading-tight mb-6">
                {item.whyRfk.heading}
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-rfk-silver-light font-sans leading-relaxed">
                {item.whyRfk.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Callout Box */}
              <div className="mt-8 p-6 rounded-xl bg-rfk-surface/80 border-l-4 border-rfk-red border-y border-r border-rfk-border">
                <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-rfk-red-light mb-1">
                  PRINSIP KESELAMATAN MOTORSPORT
                </div>
                <p className="text-sm sm:text-base text-rfk-white font-sans leading-relaxed">
                  {item.whyRfk.callout}
                </p>
              </div>

              {/* Testimonial / Quote */}
              <div className="mt-8 p-6 rounded-xl bg-rfk-charcoal/30 border border-rfk-border/70 flex flex-col justify-between">
                <p className="text-base sm:text-lg italic text-rfk-silver-light font-sans mb-4 leading-relaxed">
                  &ldquo;{item.testimonialOrQuote.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rfk-red/20 border border-rfk-red flex items-center justify-center text-xs font-bold text-rfk-red shrink-0">
                    RFK
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm uppercase text-rfk-white">
                      {item.testimonialOrQuote.author}
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-rfk-silver-light">
                      {item.testimonialOrQuote.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Feature Cards Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs sm:text-sm font-heading font-bold text-rfk-silver-light tracking-wider uppercase mb-2">
                4 KEUNGGULAN PROTEKSI PADA UNIT INI
              </div>
              {item.features.map((feat) => (
                <div
                  key={feat.number}
                  className="p-5 sm:p-6 rounded-xl bg-rfk-surface/90 border border-rfk-border/80 hover:border-rfk-red/60 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs sm:text-sm font-bold text-rfk-red-light px-2.5 py-0.5 rounded bg-rfk-red/10 border border-rfk-red/30">
                      {feat.number}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg uppercase text-rfk-white tracking-wider">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Points & Specs Section */}
      <section className="py-20 border-b border-rfk-border/50 bg-rfk-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Installation Configuration Points */}
          <div className="mb-16">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-2">
              <Wrench className="w-4 h-4" aria-hidden="true" />
              <span>KONFIGURASI PEMASANGAN TEKNIS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-rfk-white mb-8">
              {item.installationHighlights.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.installationHighlights.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-rfk-surface/70 border border-rfk-border flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-rfk-red/10 text-rfk-red shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg uppercase text-rfk-white mb-1 tracking-wider">
                      {pt.location}
                    </h3>
                    <p className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Specs Comparison Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Vehicle Specs */}
            <div className="p-6 sm:p-8 rounded-2xl bg-rfk-surface/80 border border-rfk-border">
              <div className="flex items-center gap-2 mb-4">
                <Gauge className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />
                <h3 className="font-heading font-bold text-lg uppercase text-rfk-white tracking-wider">
                  SPESIFIKASI KENDARAAN &amp; SASIS
                </h3>
              </div>
              <div className="divide-y divide-rfk-border/50 text-sm sm:text-base">
                {item.carSpecs.map((row, idx) => (
                  <div key={idx} className="py-3 flex justify-between gap-4">
                    <span className="text-rfk-silver-light font-sans">{row.label}</span>
                    <span className="text-rfk-white font-medium text-right font-mono">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: RFK Fire Suppression Specs */}
            <div className="p-6 sm:p-8 rounded-2xl bg-rfk-surface/80 border border-rfk-red/40 relative shadow-xl">
              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-0.5 rounded bg-rfk-red text-xs font-heading font-bold uppercase text-rfk-white">
                  SPEK RFK
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-rfk-red-light" aria-hidden="true" />
                <h3 className="font-heading font-bold text-lg uppercase text-rfk-white tracking-wider">
                  SPESIFIKASI SISTEM PEMADAM TERPASANG
                </h3>
              </div>
              <div className="divide-y divide-rfk-border/50 text-sm sm:text-base">
                {item.rfkSystemSpecs.map((row, idx) => (
                  <div key={idx} className="py-3 flex justify-between gap-4">
                    <span className="text-rfk-silver-light font-sans">{row.label}</span>
                    <span className="text-rfk-white font-medium text-right font-mono">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switcher Card: View Other Showcase */}
      <section className="py-16 border-b border-rfk-border/50 bg-rfk-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs sm:text-sm font-heading font-bold text-rfk-silver-light tracking-wider uppercase mb-4">
            LIHAT SHOWCASE LAINNYA
          </div>

          <div className="rounded-2xl overflow-hidden bg-rfk-surface/90 border border-rfk-border hover:border-rfk-red transition-all p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-40 h-28 rounded-lg overflow-hidden shrink-0 border border-rfk-border">
                <Image
                  src={otherShowcase.coverImage}
                  alt={otherShowcase.title}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono text-rfk-red-light uppercase mb-1">
                  {otherShowcase.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase font-heading text-rfk-white mb-1">
                  {otherShowcase.title}
                </h3>
                <p className="text-sm sm:text-base text-rfk-silver-light max-w-xl font-sans line-clamp-2">
                  {otherShowcase.cardSummary}
                </p>
              </div>
            </div>

            <Link
              href={`/showcase/${otherShowcase.slug}/`}
              className="min-h-[46px] inline-flex items-center gap-2 bg-rfk-charcoal hover:bg-rfk-red text-rfk-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-rfk-white"
            >
              <span>LIHAT SHOWCASE INI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Banner & CTA */}
      <section className="py-20 bg-gradient-to-r from-rfk-charcoal via-rfk-surface to-rfk-charcoal text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>KONSULTASI &amp; PEMESANAN SISTEM RFK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading text-rfk-white mb-4 leading-tight">
            INGIN PASANG SISTEM RFK PADA MOBIL ANDA?
          </h2>
          <p className="text-base sm:text-lg text-rfk-silver-light max-w-2xl mx-auto font-sans mb-8 leading-relaxed">
            Konsultasikan tipe tabung, jalur nozzle, dan konfigurasi instalasi yang sesuai dengan platform mobil balap, track day, maupun proyek modifikasi Anda langsung bersama tim teknis resmi RFK.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-rfk-red hover:bg-rfk-red-dark text-rfk-white font-heading font-bold text-base uppercase tracking-wider px-8 py-3.5 rounded transition-all shadow-xl shadow-rfk-red/30 focus-visible:ring-2 focus-visible:ring-rfk-white"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>KONSULTASI VIA WHATSAPP</span>
            </a>

            <Link
              href="/#kontak"
              className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rfk-surface hover:bg-rfk-charcoal text-rfk-white border border-rfk-border font-heading font-bold text-base uppercase tracking-wider px-7 py-3.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-rfk-red"
            >
              <span>ISI FORMULIR KONSULTASI</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tampilan penuh foto instalasi"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-rfk-red-light font-bold">
                {activePhotoIndex + 1} / {item.gallery.length}
              </span>
              <span className="text-sm font-heading uppercase text-rfk-silver-light">
                {activePhoto.title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-rfk-surface hover:bg-rfk-red text-rfk-white border border-rfk-border transition-colors focus-visible:ring-2 focus-visible:ring-rfk-white"
              aria-label="Tutup tampilan penuh"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Image */}
          <div
            className="relative flex-1 w-full max-w-5xl mx-auto my-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-contain"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
            </div>
          </div>

          {/* Lightbox Footer & Navigation Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 z-10 max-w-5xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-rfk-silver-light font-sans text-center sm:text-left max-w-xl">
              {activePhoto.caption}
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActivePhotoIndex(
                    (prev) => (prev - 1 + item.gallery.length) % item.gallery.length
                  )
                }
                className="min-h-[44px] px-4 rounded bg-rfk-surface hover:bg-rfk-charcoal text-rfk-white border border-rfk-border text-sm font-heading uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:ring-rfk-red"
              >
                Foto Sebelumnya
              </button>
              <button
                type="button"
                onClick={() =>
                  setActivePhotoIndex((prev) => (prev + 1) % item.gallery.length)
                }
                className="min-h-[44px] px-4 rounded bg-rfk-red hover:bg-rfk-red-dark text-rfk-white text-sm font-heading uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:ring-rfk-white"
              >
                Foto Berikutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

