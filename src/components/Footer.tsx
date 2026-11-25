import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Keunggulan", href: "/#keunggulan" },
    { label: "Produk", href: "/#produk" },
    { label: "Sistem", href: "/#sistem" },
    { label: "Showcase", href: "/#showcase" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontak", href: "/#kontak" },
  ];

  return (
    <footer className="bg-rfk-black text-rfk-silver border-t border-rfk-border">
      {/* Top Banner / Slogan */}
      <div className="bg-gradient-to-r from-rfk-charcoal via-rfk-surface to-rfk-charcoal border-b border-rfk-border/60 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-heading font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-2 text-rfk-white font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-rfk-red" aria-hidden="true" />
            <span>SIAP SEDIA. BERKENDARA AMAN.</span>
          </div>
          <div className="text-rfk-silver-light">
            KESELAMATAN KEBAKARAN OTOMOTIF &bull; HARTINDO AF11E
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="relative w-44 h-10 mb-4 inline-block focus-visible:ring-2 focus-visible:ring-rfk-red rounded"
              aria-label="Kembali ke beranda Racing Fire Killer"
            >
              <Image
                src="/assets/logo/RFK [Red White No Tagline].png"
                alt="RFK Racing Fire Killer"
                fill
                className="object-contain"
                sizes="180px"
              />
            </Link>

            <div className="font-heading font-extrabold text-lg text-rfk-white uppercase tracking-wider mb-2">
              RACING FIRE KILLER
            </div>

            <p className="text-sm text-rfk-silver-light max-w-sm font-sans leading-relaxed mb-6">
              Sistem proteksi dan pemadam kebakaran berstandar motorsport untuk mobil balap dan modifikasi. Formula gas bersih Hartindo AF11E bersifat nonkonduktif dan tanpa residu.
            </p>

            <div className="text-xs sm:text-sm font-mono text-rfk-silver-light">
              Distributor: PT Solusi Keselamatan Berkendara
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <div className="font-heading font-bold text-sm uppercase tracking-wider text-rfk-white mb-4">
              Navigasi Halaman
            </div>
            <nav className="grid grid-cols-2 gap-2.5 font-heading text-sm uppercase tracking-wider font-semibold">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-rfk-silver hover:text-rfk-red transition-colors py-1 focus-visible:ring-2 focus-visible:ring-rfk-red rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 flex flex-col items-start">
            <div className="font-heading font-bold text-sm uppercase tracking-wider text-rfk-white mb-4">
              Layanan &amp; Konsultasi
            </div>
            <p className="text-sm text-rfk-silver-light font-sans leading-relaxed mb-4">
              Konsultasikan kebutuhan tabung dan instalasi sistem fire suppression kendaraan Anda bersama tim teknis RFK.
            </p>
            <Link
              href="/#kontak"
              className="inline-flex items-center gap-2 bg-rfk-charcoal hover:bg-rfk-charcoal-light text-rfk-white border border-rfk-border font-heading font-bold text-sm uppercase tracking-wider px-5 py-3 rounded transition-colors"
            >
              <span>KONSULTASI WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 text-rfk-red-light" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-rfk-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-rfk-silver-light text-center sm:text-left">
          <div>
            &copy; 2026 RACING FIRE KILLER. HAK CIPTA DILINDUNGI.
          </div>
          <div className="text-rfk-white font-heading tracking-wider uppercase font-semibold">
            DIRANCANG UNTUK KONDISI DARURAT.
          </div>
        </div>
      </div>
    </footer>
  );
}
