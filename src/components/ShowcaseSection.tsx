import React from "react";
import Image from "next/image";
import { Flag, ShieldCheck } from "lucide-react";

export default function ShowcaseSection() {
  const photos = [
    {
      src: "/assets/passato/bmw-sema-1.jpg",
      title: "SEMA Show Motorsport Build",
      caption: "Instalasi proteksi kebakaran RFK pada mobil balap performa tinggi berstandar kompetisi internasional.",
      span: "lg:col-span-8 lg:row-span-2",
      aspect: "aspect-[16/10] sm:aspect-[16/9]",
    },
    {
      src: "/assets/passato/bmw-sema-2.jpg",
      title: "Cockpit & Roll Cage Integration",
      caption: "Posisi penempatan tabung strategis yang dapat dijangkau pengemudi dalam hitungan detik.",
      span: "lg:col-span-4",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/assets/passato/bmw-sema-3.jpg",
      title: "Billet Bracket Mounting",
      caption: "Klem aluminium CNC yang mencengkeram kokoh pipa roll cage tahan guncangan ekstrim.",
      span: "lg:col-span-4",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/assets/passato/bmw-sema-4.jpg",
      title: "Engine Bay Suppression Coverage",
      caption: "Jalur perlindungan ruang mesin siap meredam lonjakan panas turbocharger.",
      span: "lg:col-span-6",
      aspect: "aspect-[16/9]",
    },
    {
      src: "/assets/passato/bmw-sema-5.jpg",
      title: "Track-Ready Stance",
      caption: "Teruji pada kondisi operasional kecepatan tinggi dan getaran lintasan balap sirkuit.",
      span: "lg:col-span-6",
      aspect: "aspect-[16/9]",
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-rfk-obsidian relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-rfk-red tracking-widest uppercase mb-3">
              <Flag className="w-3.5 h-3.5 text-rfk-red" />
              <span>04 / SHOWCASE</span>
              <span className="text-rfk-border">/</span>
              <span className="text-rfk-silver">TESTED ON THE TRACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              TERUJI DI STANDAR <br />
              <span className="text-rfk-red">MOTORSPORT</span> DUNIA.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-rfk-silver max-w-lg font-sans leading-relaxed">
            Dari ajang pameran modifikasi dunia SEMA Show hingga lintasan sirkuit balap, tabung Racing Fire Killer dipercaya oleh para builder dan pembalap untuk perlindungan tanpa kompromi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {photos.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden bg-rfk-charcoal/40 border border-rfk-border/70 hover:border-rfk-red/60 transition-all duration-300 ${item.span}`}
            >
              <div className={`relative w-full ${item.aspect}`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rfk-black via-rfk-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rfk-red" />
                    <h3 className="text-sm sm:text-base font-extrabold uppercase font-heading text-rfk-white tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-rfk-silver/90 font-sans line-clamp-2 max-w-xl">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust verification note */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 p-4 rounded-lg bg-rfk-surface/60 border border-rfk-border/40 text-xs text-rfk-silver font-sans text-center">
          <div className="flex items-center gap-2 text-rfk-white font-heading uppercase font-semibold">
            <ShieldCheck className="w-4 h-4 text-rfk-red" />
            <span>Pemasangan Kompatibel: Roll Cage 1.5 - 1.75 Inci</span>
          </div>
          <span className="hidden sm:inline text-rfk-border">|</span>
          <div>Braket Aluminium Billet CNC Anti Getaran Tinggi</div>
          <span className="hidden sm:inline text-rfk-border">|</span>
          <div className="text-rfk-silver-light">Garansi Resmi 5 Tahun</div>
        </div>
      </div>
    </section>
  );
}

