import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Produk", href: "#produk" },
    { label: "Sistem", href: "#sistem" },
    { label: "Showcase", href: "#showcase" },
    { label: "Spesifikasi", href: "#spesifikasi" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <footer className="bg-rfk-black text-rfk-silver border-t border-rfk-border">
      {/* Top Banner / Slogan */}
      <div className="bg-gradient-to-r from-rfk-charcoal via-rfk-surface to-rfk-charcoal border-b border-rfk-border/60 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-heading tracking-widest uppercase">
          <div className="flex items-center gap-2 text-rfk-white font-bold">
            <span className="w-2 h-2 rounded-full bg-rfk-red" />
            <span>BE PREPARED. DRIVE PROTECTED.</span>
          </div>
          <div className="text-rfk-silver-light">
            AUTOMOTIVE FIRE SAFETY &bull; HARTINDO AF11E
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="#beranda"
              className="relative w-44 h-10 mb-4 inline-block focus-visible:ring-2 focus-visible:ring-rfk-red rounded"
              aria-label="Kembali ke beranda Racing Fire Killer"
            >
              <Image
                src="/assets/logo/rfk-logo-white.png"
                alt="RFK Racing Fire Killer"
                fill
                className="object-contain"
                sizes="180px"
              />
            </Link>

            <div className="font-heading font-extrabold text-base text-rfk-white uppercase tracking-wider mb-2">
              RACING FIRE KILLER
            </div>

            <p className="text-xs text-rfk-silver max-w-sm font-sans leading-relaxed mb-6">
              Sistem proteksi dan pemadam kebakaran berstandar motorsport untuk kendaraan yang hidup di batas performa. Formula gas bersih Hartindo AF11E, non-konduktif dan tanpa residu.
            </p>

            <div className="text-[11px] font-mono text-rfk-silver/70">
              Distributor Eksklusif: PT. Famindo Alfa Spektrum Teknologi (FAST)
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <div className="font-heading font-bold text-xs uppercase tracking-widest text-rfk-white mb-4">
              Navigasi Halaman
            </div>
            <nav className="grid grid-cols-2 gap-2.5 font-heading text-xs uppercase tracking-wider">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-rfk-silver hover:text-rfk-red transition-colors py-1 focus-visible:ring-2 focus-visible:ring-rfk-red rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 flex flex-col items-start">
            <div className="font-heading font-bold text-xs uppercase tracking-widest text-rfk-white mb-4">
              Layanan &amp; Konsultasi
            </div>
            <p className="text-xs text-rfk-silver font-sans leading-relaxed mb-4">
              Konsultasikan kebutuhan tabung dan instalasi sistem otomatis kendaraan Anda bersama tim teknis RFK.
            </p>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 bg-rfk-charcoal hover:bg-rfk-charcoal-light text-rfk-white border border-rfk-border font-heading font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-colors"
            >
              <span>HUBUNGI VIA WA</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rfk-red" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-rfk-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-rfk-silver/70 text-center sm:text-left">
          <div>
            &copy; 2026 RACING FIRE KILLER. HAK CIPTA DILINDUNGI.
          </div>
          <div className="text-rfk-silver-light font-heading tracking-widest uppercase font-semibold">
            ENGINEERED FOR THE UNEXPECTED.
          </div>
        </div>
      </div>
    </footer>
  );
}
