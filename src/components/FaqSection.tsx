"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQS } from "@/data/rfkData";
import ScrollReveal from "@/components/ScrollReveal";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-rfk-obsidian relative border-b border-rfk-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span>05 / TANYA JAWAB</span>
              <span className="text-rfk-border" aria-hidden="true">/</span>
              <span className="text-rfk-silver">PERTANYAAN UMUM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight">
              PERTANYAAN SEPUTAR <br />
              <span className="text-rfk-red-light">PROTEKSI KEBAKARAN</span> MOBIL.
            </h2>
            <p className="text-base sm:text-lg text-rfk-silver-light max-w-xl mx-auto font-sans leading-relaxed mt-4">
              Jawaban teknis dari tim keselamatan kebakaran otomotif mengenai formula Hartindo AF11E dan penerapannya pada kendaraan balap.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delayMs={idx * 70}>
                <div
                  className={`rounded-xl border bg-rfk-surface/70 overflow-hidden transition-colors duration-300 ${
                    isOpen ? "border-rfk-red/50 bg-rfk-surface" : "border-rfk-border/70 hover:border-rfk-red/40"
                  }`}
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
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-rfk-red text-rfk-white" : "bg-rfk-charcoal text-rfk-silver"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    id={`accordion-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${faq.id}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed border-t border-rfk-border/40 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Support Callout */}
        <ScrollReveal delayMs={150}>
          <div className="mt-12 text-center p-6 rounded-xl bg-rfk-surface/40 border border-rfk-border/50">
            <p className="text-sm sm:text-base text-rfk-silver-light font-sans">
              Punya pertanyaan spesifik tentang ruang mesin atau konfigurasi mobil Anda?{" "}
              <a href="#kontak" className="text-rfk-red-light font-heading font-bold uppercase underline underline-offset-4 hover:text-rfk-white ml-1">
                Hubungi Tim Konsultasi RFK
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

