"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQS } from "@/data/rfkData";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-rfk-obsidian relative border-b border-rfk-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red tracking-wider uppercase mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>05 / FAQ</span>
            <span className="text-rfk-border">/</span>
            <span className="text-rfk-silver">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
            PERTANYAAN SEPUTAR <br />
            <span className="text-rfk-red">PROTEKSI KEBAKARAN</span> MOBIL.
          </h2>
          <p className="text-base sm:text-lg text-rfk-silver-light max-w-xl mx-auto font-sans leading-relaxed mt-4">
            Jawaban teknis langsung dari spesialis fire safety otomotif mengenai formula Hartindo AF11E dan aplikasi motorsport.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-rfk-border/70 bg-rfk-surface/70 overflow-hidden transition-colors hover:border-rfk-red/40"
              >
                <button
                  type="button"
                  id={`accordion-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  className="w-full min-h-[56px] p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg sm:text-xl text-rfk-white hover:text-rfk-red-light transition-colors focus-visible:ring-2 focus-visible:ring-rfk-red focus:outline-none"
                >
                  <span className="tracking-wide">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-rfk-charcoal flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-rfk-red text-rfk-white" : "text-rfk-silver"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`accordion-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${faq.id}`}
                    className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed border-t border-rfk-border/40 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-xl bg-rfk-surface/40 border border-rfk-border/50">
          <p className="text-sm sm:text-base text-rfk-silver-light font-sans">
            Punya pertanyaan spesifik tentang ruang mesin atau konfigurasi mobil Anda?{" "}
            <a href="#kontak" className="text-rfk-red font-heading font-bold uppercase underline underline-offset-4 hover:text-rfk-red-light ml-1">
              Hubungi Tim Konsultasi RFK &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

