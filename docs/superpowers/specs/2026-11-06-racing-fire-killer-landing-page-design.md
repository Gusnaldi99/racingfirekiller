# Design Document: Racing Fire Killer Landing Page

**Date:** 2026-11-06  
**Status:** In Review  
**Project:** Racing Fire Killer (racingfirekiller.com) Official Landing Page  
**Selected Approach:** Next.js App Router + TypeScript + Tailwind CSS (Static Export Ready)

---

## 1. Intent and The Why

### Background & Context
Racing Fire Killer (RFK) is an Indonesian high-performance automotive fire safety brand delivering advanced fire suppression systems for motorsport competitors, track day enthusiasts, tuning workshops, and performance car owners. The product uses Hartindo AF11E clean agent extinguishing technology, certified with zero electrical conductivity, zero residue, and rapid 10-second extinguishing times across fire classes A, B, and C.

### Problem Statement
The current landing page needs to elevate its aesthetic, authority, and conversion capability to rival the high-tech, precision look of `lithiumfirekiller.com` while maintaining the aggressive motorsport DNA specified in the official [Racing Fire Killer_Guideline.md](file:///c:/Users/Gusnaldi%20Luthfi/Documents/CODE/racingfirekiller/Racing%20Fire%20Killer_Guideline.md).

### The Objective
Deliver a fast, accessible, responsive, and conversion-focused landing page for `racingfirekiller.com` that conveys engineering credibility, showcases real product specs (1 KG, 2 KG, 4 KG) and motorsport builds (BMW SEMA build), and provides a friction-free consultation funnel directly into WhatsApp.

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
- **High-Performance Dark Aesthetic:** Obsidian black theme (`#020202`), racing red accents (`#D30201`), carbon/geometric touches, and sharp typography (*Barlow Condensed* & *Montserrat*).
- **Verified Technical Data:** Accurate representation of Hartindo AF11E formula, working pressure (14 bar), test pressure (27 bar), temperature range (-30 deg C to +60 deg C), fire rating (8A 34B C), and 5-year warranty.
- **Interactive Product Selector:** Interactive tab/switch for 1 KG, 2 KG, and 4 KG canisters showing authentic product renders, technical specs, weight, dimensions, and optimal vehicle application.
- **Motorsport In-Vehicle Showcase:** Gallery showcasing roll cage mounting, billet bracket quick-release, and the SEMA BMW build using genuine images from `Assets/passato/`.
- **System Suppression Explanation:** Clear visualization of the active automatic suppression system (thermal sensor tube, nozzle routing to engine bay and cabin).
- **Interactive WhatsApp Lead Form:** Real form with vehicle type, cylinder size selection, name, contact, and direct WhatsApp redirect payload formatting.
- **Strict Antislop Compliance (DURING Mode):** Zero em dashes (`—`) in UI copy, zero fake testimonials, zero fabricated numbers, WCAG AA contrast (min 4.5:1), 44px touch targets, visible focus outlines, and zero broken links.

### Non-Goals
- Full e-commerce cart/payment gateway (the conversion model is technical consultation and custom vehicle configuration via WhatsApp and direct sales).
- Dynamic multi-page blog or CMS (this is an ultra-focused high-converting single-page application with modular sections).
- User authentication/login portal.

### Anti-Goals
- AI Slop patterns: generic blue-purple gradients, generic "AI powered" badges, floating bento grids without purpose, fake corporate logos ("Trusted by"), and generic AI stock illustrations.
- Dead buttons or links that lead to `#` without an existing target.

---

## 3. Constraints & Compliance

1. **Antislop Rules (Hard Gates):**
   - R-02: No em dash (`—`) characters in any UI text written by the agent. Use `,`, `.`, `:`, or `()` instead.
   - R-03: Mobile responsiveness: zero horizontal scroll, tap target minimum 44px, clean mobile drawer.
   - R-17: All numbers and specifications must be sourced from official documentation.
   - R-18: No fake testimonials or fictional reviewer avatars.
   - R-23: Use only verified assets from `Assets/` or explicit placeholders.
   - R-24: All navigation links must resolve to real on-page section targets.
   - R-25: Contrast ratio >= 4.5:1 for normal text and >= 3:1 for large headings against `#020202` / `#0a0a0a`.
   - R-26: All buttons, selectors, tabs, and form submissions must be fully functional.
   - R-32: Keyboard operable with `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape` for mobile drawer. Visible focus outlines (`focus-visible:ring-2 focus-visible:ring-red-600`).

2. **Official Brand System (from Guideline 2026):**
   - Primary: Obsidian Black (`#020202`)
   - Accent: Racing Red (`#D30201`)
   - Dark Charcoal: `#3C3B3B`
   - Silver Grey: `#B1B1B0`
   - Pure White: `#FDFDFD`
   - Slogan: `"BE PREPARED. DRIVE PROTECTED."`
   - Taglines: `"AUTOMOTIVE FIRE SAFETY"`, `"SAFETY IS PERFORMANCE"`, `"BUILD FOR SPEED, BUILD FOR SAFETY"`

---

## 4. Architectural Approaches & Selection

- **Option A (Selected):** Next.js App Router + TypeScript + Tailwind CSS with static export (`output: 'export'`).
  - *Why selected:* Best blend of developer ergonomics, strict type safety, modular component structure, and deployment flexibility (runs on Hostinger, Vercel, cPanel, Cloudflare Pages, etc.).
- **Option B (Alternative):** Next.js + CSS Modules.
  - *Trade-off:* Slower iteration and larger boilerplate for responsive breakpoints.

---

## 5. Information Architecture & Section Breakdown

1. **Sticky Header / Navigation:**
   - Brand Logo (`Assets/logo-RFK/RFK Logo White.png` or `RFK [Red White].png`).
   - Desktop Links: `#keunggulan`, `#produk`, `#sistem`, `#showcase`, `#spesifikasi`, `#faq`.
   - Mobile Hamburger Toggle: Accessible drawer with backdrop blur and escape key handler.
   - CTA Button: `"KONSULTASI WA"` (direct anchor or modal).

2. **Hero Section:**
   - Badge: `"AUTOMOTIVE FIRE SAFETY"` (red accent line).
   - Headline: `"BUKAN SEKADAR CEPAT. SIAP SAAT DIBUTUHKAN."`
   - Subhead: `"Sistem pemadam otomatis dan tabung performa tinggi untuk mobil balap dan modifikasi. Lindungi mesin, kelistrikan, dan setiap detik yang berarti bersama RFK."`
   - Actions: Primary button `"Jelajahi Produk"`, secondary outline button `"Cara Kerja Sistem"`.
   - Verified Proof Bar:
     - **10 DETIK** (Rata-rata Pemadaman)
     - **5 TAHUN** (Jaminan Garansi)
     - **KELAS A, B & C** (Proteksi Komprehensif)
     - **14 BAR** (Tekanan Kerja Standar)

3. **Danger & Urgency Section ("Saat Api Muncul, Setiap Detik Berarti"):**
   - Explains why standard powder extinguishers fail motorsport: corrosive powder ruins engines, electrical shorts require non-conductive gas, high-temperature turbo manifolds (up to 800 deg C) require instant cooling and flame inhibition.
   - 4 Core Pillars:
     1. Non-Konduktif (Aman untuk ECU, kabel, dan instrumentasi digital balap)
     2. Tanpa Residu (Clean agent yang menguap bersih tanpa merusak intake/turbo/mesin)
     3. Respons Cepat (Memadamkan api rata-rata dalam 10 detik)
     4. Triple Class A, B & C (Material padat, bahan bakar minyak/bensin/etanol, dan gas)

4. **Product Lineup Section ("Perlindungan yang Sesuai Kebutuhan"):**
   - Interactive Cylinder Switcher: **1 KG**, **2 KG**, **4 KG**.
   - Features each cylinder with authentic render from `Assets/tabung/`:
     - **1 KG:** Ringkas & Efisien (Kabin, track day, city sport, roll-cage mount).
     - **2 KG:** Perlindungan Seimbang (Mobil modifikasi jalan raya & kompetisi drift).
     - **4 KG:** Kapasitas Maksimal (Sistem otomatis penuh, reli, balap turing, drag race).
   - Dynamic specs cards displaying Agent, Kapasitas, Rating, Material Tabung, dan Dimensi.

5. **Active Suppression System Section ("Proteksi Aktif Dirancang Bertindak Cepat"):**
   - Explains dual operation mode: Manual Canister (Quick-release billet bracket) & Automatic Thermal Suppression System (heat-sensing detection tube + distribution nozzles).
   - Interactive step breakdown:
     - 01. Deteksi Termal Otomatis (Sensor panas mendeteksi lonjakan suhu di ruang mesin)
     - 02. Pelepasan Otomatis Seketika (Katup aktif melepaskan clean agent tanpa intervensi pengemudi)
     - 03. Nozzle Coverage Menyeluruh (Distribusi gas merata ke titik rawan api)

6. **Motorsport Showcase & Installation Gallery ("Teruji di Standar Motorsport"):**
   - Photo showcase featuring real motorsport build: SEMA BMW build (`Assets/passato/bmw-sema-1.jpg` through `5.jpg`).
   - Roll cage quick release billet bracket demonstration.
   - Paddock and workshop ready.

7. **Technical Specifications & Certifications Table:**
   - Full technical data sheet:
     - Agent: Hartindo AF11E
     - Working Pressure: 14 Bar
     - Test Pressure: 27 Bar
     - Temperature Range: -30 deg C to +60 deg C
     - Cylinder Material: Seamless Steel Cylinder
     - Standards: CE Marking, EN3 Certified, ISO 9001, Bureau Veritas
     - Barcode: 8 50026 73854 2

8. **Targeted Automotive FAQ:**
   - 4 authentic motorsport questions with expandable accordion:
     - *Apakah Hartindo AF11E aman untuk kelistrikan mobil dan ECU?*
     - *Apakah pemadam ini meninggalkan residu bubuk yang merusak mesin?*
     - *Bagaimana cara pemasangan pada roll cage mobil balap?*
     - *Berapa lama masa berlaku dan garansi tabung RFK?*

9. **Consultation & Lead Capture Form ("Mulai Konsultasi Kendaraan Anda"):**
   - Inputs: Nama Lengkap, WhatsApp / Email, Jenis Kendaraan (Mobil Balap / Modifikasi / Harian), Pilihan Ukuran Tabung (1 KG / 2 KG / 4 KG / Konsultasi), Catatan Kebutuhan.
   - Functional Submit: Formats message and launches WhatsApp chat with RFK customer support (`https://wa.me/6281290003278` or configured support line), with visible success feedback.

10. **Footer:**
    - RFK Monogram & Logo.
    - Brand Statement: `"Perlindungan kebakaran untuk kendaraan yang hidup di batas performa."`
    - Quick navigation links, certification labels, copyright 2026.

---

## 6. Project Structure

```
racingfirekiller/
├── public/
│   └── assets/
│       ├── logo/       # Official RFK logos
│       ├── tabung/     # 1KG, 2KG, 4KG webp images
│       └── passato/    # BMW SEMA build photos
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WhySection.tsx
│   │   ├── ProductSection.tsx
│   │   ├── SystemSection.tsx
│   │   ├── ShowcaseSection.tsx
│   │   ├── SpecsSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── rfkData.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 7. What is Left to the Builder

- Exact component styling details following Tailwind utility classes and RFK color tokens.
- Asset copying from `Assets/` into `public/assets/` during project setup.
- Interactive tab and accordion state handling using standard React hooks (`useState`).

