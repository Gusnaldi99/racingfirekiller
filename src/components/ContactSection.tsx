"use client";

import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    vehicle: "",
    size: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textLines = [
      "Halo Tim Racing Fire Killer, saya ingin berkonsultasi mengenai proteksi kebakaran kendaraan:",
      `*Nama:* ${formData.name}`,
      `*Kontak:* ${formData.contact}`,
      `*Kendaraan:* ${formData.vehicle || "Belum dicantumkan"}`,
      `*Ukuran yang diminati:* ${formData.size || "Perlu rekomendasi tim"}`,
      `*Catatan kebutuhan:* ${formData.notes || "Mohon informasi rekomendasi terbaik"}`,
    ];

    const encoded = encodeURIComponent(textLines.join("\n"));
    const waUrl = `https://wa.me/6281290003278?text=${encoded}`;

    setLastWaUrl(waUrl);
    setSubmitted(true);
    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="kontak" className="py-24 bg-rfk-black relative border-b border-rfk-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Brand Statement & Trust */}
          <ScrollReveal variant="left" className="lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-rfk-red-light tracking-wider uppercase mb-3">
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>06 / KONTAK</span>
                <span className="text-rfk-border" aria-hidden="true">/</span>
                <span className="text-rfk-silver">KONSULTASI TEKNIS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-heading tracking-tight text-rfk-white leading-tight mb-6">
                BUTUH REKOMENDASI <br />
                <span className="text-rfk-red-light">SISTEM PEMADAM</span>?
              </h2>

              <p className="text-base sm:text-lg text-rfk-silver-light font-sans leading-relaxed mb-8">
                Belum yakin ukuran tabung atau konfigurasi pemasangan mana yang paling sesuai untuk mobil Anda? Sampaikan spesifikasi kendaraan Anda agar tim RFK dapat membantu konsultasi teknis dan pemesanan.
              </p>

              {/* 5 Year Warranty Badge Box */}
              <div className="p-6 rounded-xl bg-rfk-surface border border-rfk-border/70 flex items-start gap-4 mb-8">
                <div className="p-3 rounded-lg bg-rfk-red/10 text-rfk-red-light shrink-0">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-rfk-white uppercase tracking-wider mb-1">
                    5 TAHUN GARANSI RESMI
                  </div>
                  <div className="text-sm sm:text-base text-rfk-silver-light font-sans leading-relaxed">
                    Jaminan jangka panjang terhadap tekanan tabung, keaslian formula Hartindo AF11E, serta ketersediaan suku cadang braket.
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3.5 text-sm sm:text-base text-rfk-silver-light font-sans">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-rfk-white font-bold font-heading uppercase">Distribusi Resmi:</span>
                  <span>PT Solusi Keselamatan Berkendara</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-rfk-white font-bold font-heading uppercase">Respons:</span>
                  <span>Maksimal 1 x 24 Jam Kerja melalui WhatsApp</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-rfk-white font-bold font-heading uppercase">Situs Resmi:</span>
                  <span className="text-rfk-red-light font-mono font-semibold">racingfirekiller.com</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Lead Capture Form */}
          <ScrollReveal variant="right" delayMs={100} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-rfk-surface border border-rfk-border shadow-xl">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wider text-rfk-white mb-2">
                FORMULIR KONSULTASI RFK
              </h3>
              <p className="text-sm sm:text-base text-rfk-silver-light font-sans mb-8">
                Isi formulir di bawah ini untuk meneruskan detail kendaraan Anda ke tim konsultasi WhatsApp resmi kami.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span>Permintaan Anda telah disiapkan.</span>
                  </div>
                  {lastWaUrl && (
                    <a
                      href={lastWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-heading font-bold uppercase tracking-wider text-rfk-white hover:text-green-300 underline underline-offset-2 shrink-0"
                    >
                      <span>Buka WhatsApp Sekarang &rarr;</span>
                    </a>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-sm font-heading font-bold uppercase tracking-wider text-rfk-white mb-1.5"
                    >
                      Nama Lengkap <span className="text-rfk-red-light">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      maxLength={120}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-rfk-black/80 border border-rfk-border text-base text-rfk-white placeholder-rfk-silver/75 focus:border-rfk-red focus:outline-none focus:ring-1 focus:ring-rfk-red transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-contact"
                      className="block text-sm font-heading font-bold uppercase tracking-wider text-rfk-white mb-1.5"
                    >
                      Nomor WhatsApp / Email <span className="text-rfk-red-light">*</span>
                    </label>
                    <input
                      id="form-contact"
                      type="text"
                      required
                      maxLength={120}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="08xxxxxxxxxx atau email"
                      className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-rfk-black/80 border border-rfk-border text-base text-rfk-white placeholder-rfk-silver/75 focus:border-rfk-red focus:outline-none focus:ring-1 focus:ring-rfk-red transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="form-vehicle"
                      className="block text-sm font-heading font-bold uppercase tracking-wider text-rfk-white mb-1.5"
                    >
                      Jenis Kendaraan
                    </label>
                    <input
                      id="form-vehicle"
                      type="text"
                      maxLength={150}
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      placeholder="Contoh: Mobil Balap / Modifikasi / BMW E36"
                      className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-rfk-black/80 border border-rfk-border text-base text-rfk-white placeholder-rfk-silver/75 focus:border-rfk-red focus:outline-none focus:ring-1 focus:ring-rfk-red transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-size"
                      className="block text-sm font-heading font-bold uppercase tracking-wider text-rfk-white mb-1.5"
                    >
                      Ukuran yang Diminati
                    </label>
                    <select
                      id="form-size"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-lg bg-rfk-black/80 border border-rfk-border text-base text-rfk-white focus:border-rfk-red focus:outline-none focus:ring-1 focus:ring-rfk-red transition-colors"
                    >
                      <option value="">Belum tahu (Perlu rekomendasi)</option>
                      <option value="1 KG (Ringkas & Efisien)">1 KG (Ringkas &amp; Efisien)</option>
                      <option value="2 KG (Perlindungan Seimbang)">2 KG (Perlindungan Seimbang)</option>
                      <option value="4 KG (Fire Suppression Kit Motorsport)">
                        4 KG (Fire Suppression Kit Motorsport)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-notes"
                    className="block text-sm font-heading font-bold uppercase tracking-wider text-rfk-white mb-1.5"
                  >
                    Detail Kebutuhan
                  </label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    maxLength={2000}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ceritakan spesifikasi mobil, ruang mesin, atau ajang balap yang Anda ikuti..."
                    className="w-full px-4 py-3 rounded-lg bg-rfk-black/80 border border-rfk-border text-base text-rfk-white placeholder-rfk-silver/75 focus:border-rfk-red focus:outline-none focus:ring-1 focus:ring-rfk-red transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full min-h-[52px] bg-rfk-red hover:bg-rfk-red-dark text-rfk-white font-heading font-bold tracking-wider uppercase text-base py-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-rfk-white"
                >
                  <span>KIRIM PERMINTAAN KONSULTASI VIA WHATSAPP</span>
                  <Send className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

