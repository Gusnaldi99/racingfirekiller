import React from "react";

const TICKER_ITEMS = [
  "HARTINDO AF11E CLEAN AGENT",
  "PADAM RATA-RATA 10 DETIK",
  "TEKANAN KERJA 14 BAR",
  "UJI HIDROLIK 27 BAR",
  "NONKONDUKTIF AMAN ECU",
  "0% RESIDU TANPA KERAK",
  "EN3 / ISO 7165 / BUREAU VERITAS",
  "GARANSI RESMI 5 TAHUN",
];

/**
 * Continuous motorsport telemetry marquee displaying verified RFK standards.
 */
export default function TelemetryTicker() {
  return (
    <div
      className="group relative w-full bg-rfk-obsidian border-b border-rfk-border/60 overflow-hidden py-3 select-none"
      aria-label="Standar performa Racing Fire Killer"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-rfk-obsidian to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-rfk-obsidian to-transparent z-10" />

      <div className="animate-rfk-marquee flex items-center">
        {[0, 1].map((dupIndex) => (
          <div
            key={dupIndex}
            aria-hidden={dupIndex === 1}
            className="flex items-center shrink-0"
          >
            {TICKER_ITEMS.map((item) => (
              <div
                key={`${dupIndex}-${item}`}
                className="flex items-center gap-4 px-5 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-rfk-silver-light/90 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rfk-red-light shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
