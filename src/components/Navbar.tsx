"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Keunggulan", href: "/#keunggulan" },
    { label: "Produk", href: "/#produk" },
    { label: "Sistem", href: "/#sistem" },
    { label: "Showcase", href: "/#showcase" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontak", href: "/#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-rfk-black/90 backdrop-blur-md border-b border-rfk-border/80 py-3 shadow-lg"
          : "bg-gradient-to-b from-rfk-black/95 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-rfk-red rounded p-1"
            aria-label="Racing Fire Killer beranda"
          >
            <div className="relative w-36 h-9 sm:w-44 sm:h-10 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/assets/logo/rfk-logo-white.png"
                alt="RFK Racing Fire Killer"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 150px, 180px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-semibold tracking-wider uppercase font-heading"
            aria-label="Navigasi Desktop"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-rfk-silver hover:text-rfk-white transition-colors duration-150 py-1 hover:border-b-2 hover:border-rfk-red focus-visible:ring-2 focus-visible:ring-rfk-red rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#kontak"
              className="inline-flex items-center gap-2 bg-rfk-red hover:bg-rfk-red-light text-rfk-white font-heading tracking-wider uppercase font-bold text-sm px-5 py-2.5 rounded transition-colors duration-200 shadow-md shadow-rfk-red/20 focus-visible:ring-2 focus-visible:ring-rfk-white"
            >
              <span>KONSULTASI</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button (min 44px tap target) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-rfk-silver hover:text-rfk-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rfk-red rounded"
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-rfk-red" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer & Backdrop */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-rfk-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-navigation"
            className="md:hidden fixed inset-x-0 top-full bg-rfk-black/95 backdrop-blur-xl border-b border-rfk-border px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200 z-50"
          >
            <div className="flex flex-col gap-2 font-heading tracking-wider uppercase font-semibold text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="min-h-[48px] flex items-center px-3 rounded text-rfk-silver-light hover:text-rfk-white hover:bg-rfk-charcoal/40 transition-colors border-b border-rfk-charcoal/30 text-base"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#kontak"
                onClick={() => setIsOpen(false)}
                className="mt-3 min-h-[48px] inline-flex items-center justify-center gap-2 bg-rfk-red hover:bg-rfk-red-dark text-rfk-white font-bold py-3.5 px-4 rounded text-center tracking-wider shadow-lg shadow-rfk-red/25 text-base"
              >
                <span>KONSULTASI DENGAN TIM RFK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
