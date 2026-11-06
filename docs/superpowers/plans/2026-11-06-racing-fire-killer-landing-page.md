# Racing Fire Killer Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance, conversion-focused Next.js TypeScript landing page for `racingfirekiller.com` inspired by `lithiumfirekiller.com`, adhering strictly to the official 2026 RFK Brand Guidelines and Antislop rules.

**Architecture:** Next.js 14/15 App Router with TypeScript and Tailwind CSS configured with the official RFK color tokens and motorsport typography. Modular single-page section components with client-side interactive state (tabs, accordion, accessible mobile drawer) and WhatsApp API consultation payload formatting. Static export ready (`output: 'export'`).

**Tech Stack:** Next.js, React 19 / 18, TypeScript, Tailwind CSS, Lucide Icons (or tailored SVGs), Next Font (Barlow Condensed & Montserrat).

**Spec:** `docs/superpowers/specs/2026-11-06-racing-fire-killer-landing-page-design.md`

## Global Constraints

- R-02 (Antislop): Zero em dash (`—`) characters in any UI copy written by the agent. Use `,`, `.`, `:`, or `()`.
- R-03 (Antislop): Mobile responsiveness required; zero horizontal scroll; minimum tap target 44px; comfortable mobile navigation drawer.
- R-17 (Antislop): Zero fabricated statistics. All metrics must strictly match official data (10 detik pemadaman, garansi 5 tahun, 14 bar working pressure, 27 bar test pressure, -30°C to +60°C operating temp).
- R-18 (Antislop): Zero fake testimonials or fictional reviewer profiles.
- R-23 (Antislop): Use verified assets from `Assets/` (`logo-RFK`, `tabung`, `passato`).
- R-24 (Antislop): All navigation anchor links must point to sections that exist on the page.
- R-25 (Antislop): WCAG AA contrast ratio >= 4.5:1 for normal text and >= 3:1 for large text.
- R-26 (Antislop): All buttons and interactive controls must have working behaviors (zero dead `#` links).
- R-32 (Antislop): Keyboard accessibility with `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape`. Visible focus outlines (`focus-visible:ring-2 focus-visible:ring-red-600`).
- Brand Colors: Obsidian Black (`#020202`), Racing Red (`#D30201`), Dark Charcoal (`#3C3B3B`), Silver Grey (`#B1B1B0`), Pure White (`#FDFDFD`).
- Typography: Barlow Condensed (Headings), Montserrat (Body/Accents).

## Review Focus

1. Mobile viewport overflow: ensure no canister card or wide data table creates horizontal scroll on 320px–375px screens.
2. WhatsApp payload URL encoding: ensure Indonesian text with spaces, linebreaks, and special characters correctly encodes in `https://wa.me/` URLs.
3. Accessible navigation drawer: ensure drawer traps focus or closes gracefully with `Escape` and does not leave body scroll locked after navigation.
4. Cylinder tab selector keyboard navigation: ensure switching tabs with arrow keys or enter updates active panel and aria-selected state.
5. Missing asset fallback: ensure image elements have correct width, height, and alt tags to prevent layout shifts.

---

### Task 1: Next.js Project Scaffolding & Tailwind Token Setup

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs` (or `next.config.ts`)
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `src/app/globals.css`

**Interfaces:**
- Produces: Base Next.js app with Tailwind configured with colors `rfk-red` (`#D30201`), `rfk-black` (`#020202`), `rfk-charcoal` (`#3C3B3B`), `rfk-silver` (`#B1B1B0`), `rfk-white` (`#FDFDFD`), and font families `barlow` and `montserrat`.

- [ ] **Step 1: Write configuration files (`package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `src/app/globals.css`)**
- [ ] **Step 2: Install dependencies using `npm install`**
- [ ] **Step 3: Verify configuration by running `npx next --version`**

---

### Task 2: Asset Migration to Public Directory

**Files:**
- Create: `public/assets/logo/` (copy from `Assets/logo-RFK/`)
- Create: `public/assets/tabung/` (copy from `Assets/tabung/`)
- Create: `public/assets/passato/` (copy from `Assets/passato/`)

**Interfaces:**
- Produces: Public static assets accessible via `/assets/...`

- [ ] **Step 1: Copy logo, canister, and BMW SEMA photos into `public/assets/`**
- [ ] **Step 2: Verify asset presence and permissions via filesystem check**

---

### Task 3: Data Layer & TypeScript Types

**Files:**
- Create: `src/data/rfkData.ts`

**Interfaces:**
- Produces:
  - `CanisterProduct` interface: `id`, `name`, `size`, `tagline`, `description`, `application`, `specs`, `image`
  - `FeaturePillar` interface: `number`, `title`, `description`, `icon`
  - `FaqItem` interface: `question`, `answer`
  - `SpecRow` interface: `label`, `value`, `detail`
  - Exported constants: `CANISTER_PRODUCTS`, `FEATURE_PILLARS`, `SYSTEM_STEPS`, `FAQS`, `TECH_SPECS`, `METRICS`

- [ ] **Step 1: Implement `src/data/rfkData.ts` with authentic data from guideline and racingfirekiller.com**
- [ ] **Step 2: Verify type definitions compile without errors using `npx tsc --noEmit`**

---

### Task 4: Sticky Navigation Bar with Accessible Mobile Drawer

**Files:**
- Create: `src/components/Navbar.tsx`

**Interfaces:**
- Consumes: None
- Produces: `<Navbar />` React client component with sticky positioning, backdrop blur, logo link, desktop anchor list, CTA button, and accessible mobile drawer with keyboard `Escape` closing.

- [ ] **Step 1: Implement `src/components/Navbar.tsx`**
- [ ] **Step 2: Verify component rendering and responsive mobile drawer state**

---

### Task 5: Motorsport Hero Section with Verified Metrics

**Files:**
- Create: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `METRICS` from `src/data/rfkData.ts`
- Produces: `<Hero />` component with headline `"BUKAN SEKADAR CEPAT. SIAP SAAT DIBUTUHKAN."`, primary & secondary CTAs, background motorsport ambience, and 4 verified metrics cards.

- [ ] **Step 1: Implement `src/components/Hero.tsx`**
- [ ] **Step 2: Verify metrics display (10 Detik, 5 Tahun Garansi, Kelas A B C, 14 Bar)**

---

### Task 6: Urgency & 4 Core Pillars Section

**Files:**
- Create: `src/components/WhySection.tsx`

**Interfaces:**
- Consumes: `FEATURE_PILLARS` from `src/data/rfkData.ts`
- Produces: `<WhySection id="keunggulan" />` highlighting why conventional extinguishers ruin race engines and how Hartindo AF11E non-conductive, zero-residue clean agent protects ECUs, turbo manifolds, and cockpits.

- [ ] **Step 1: Implement `src/components/WhySection.tsx`**
- [ ] **Step 2: Verify cards layout, typography, and antislop compliance**

---

### Task 7: Interactive Canister Lineup (1 KG, 2 KG, 4 KG)

**Files:**
- Create: `src/components/ProductSection.tsx`

**Interfaces:**
- Consumes: `CANISTER_PRODUCTS` from `src/data/rfkData.ts`
- Produces: `<ProductSection id="produk" />` with interactive cylinder tab selector, authentic product renders, technical specifications, and direct consultation button per size.

- [ ] **Step 1: Implement `src/components/ProductSection.tsx` with `useState` tab switcher**
- [ ] **Step 2: Verify tab switching updates details and maintains accessible ARIA tabs attributes**

---

### Task 8: Active Automatic Suppression System Section

**Files:**
- Create: `src/components/SystemSection.tsx`

**Interfaces:**
- Consumes: `SYSTEM_STEPS` from `src/data/rfkData.ts`
- Produces: `<SystemSection id="sistem" />` detailing dual protection: Quick-release manual canister vs Automatic thermal suppression line with engine bay nozzles.

- [ ] **Step 1: Implement `src/components/SystemSection.tsx`**
- [ ] **Step 2: Verify diagrams, step sequence, and responsive layout**

---

### Task 9: Motorsport In-Vehicle Showcase & Installation Gallery

**Files:**
- Create: `src/components/ShowcaseSection.tsx`

**Interfaces:**
- Consumes: `Assets/passato/` images (BMW SEMA build & roll cage mount)
- Produces: `<ShowcaseSection id="showcase" />` displaying real build photography with modal preview or interactive zoom.

- [ ] **Step 1: Implement `src/components/ShowcaseSection.tsx`**
- [ ] **Step 2: Verify responsive image grid and aspect ratios**

---

### Task 10: Technical Specifications & Certifications Table

**Files:**
- Create: `src/components/SpecsSection.tsx`

**Interfaces:**
- Consumes: `TECH_SPECS` from `src/data/rfkData.ts`
- Produces: `<SpecsSection id="spesifikasi" />` featuring the complete packaging technical data sheet (CE, EN3, ISO 9001, Bureau Veritas, 14 Bar working pressure, 27 Bar test pressure, -30°C to +60°C).

- [ ] **Step 1: Implement `src/components/SpecsSection.tsx`**
- [ ] **Step 2: Verify table responsiveness on mobile viewports**

---

### Task 11: Targeted Automotive FAQ Accordion

**Files:**
- Create: `src/components/FaqSection.tsx`

**Interfaces:**
- Consumes: `FAQS` from `src/data/rfkData.ts`
- Produces: `<FaqSection id="faq" />` with accessible accordion items answering real motorsport and automotive questions.

- [ ] **Step 1: Implement `src/components/FaqSection.tsx` with keyboard-toggleable accordion**
- [ ] **Step 2: Verify open/close states and aria-expanded attributes**

---

### Task 12: WhatsApp Consultation & Lead Capture Form

**Files:**
- Create: `src/components/ContactSection.tsx`

**Interfaces:**
- Consumes: None
- Produces: `<ContactSection id="kontak" />` with input validation, vehicle type selector, canister size selector, and direct WhatsApp redirect payload formatting.

- [ ] **Step 1: Implement `src/components/ContactSection.tsx`**
- [ ] **Step 2: Verify form submission triggers WhatsApp URL with pre-filled message**

---

### Task 13: Footer & Main Assembly

**Files:**
- Create: `src/components/Footer.tsx`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`

**Interfaces:**
- Consumes: All section components
- Produces: Complete Next.js page assembling all sections into a unified landing page with SEO metadata and structured JSON-LD data.

- [ ] **Step 1: Implement `src/components/Footer.tsx`**
- [ ] **Step 2: Implement `src/app/layout.tsx` with Google Fonts (*Barlow Condensed* & *Montserrat*)**
- [ ] **Step 3: Implement `src/app/page.tsx` assembling all sections**

---

### Task 14: Build Verification, Static Export & Delivery Gate

**Files:**
- Audit all created files against Antislop rules (R-01 to R-38)

- [ ] **Step 1: Run `npm run build` to verify Next.js compiles with zero errors and generates static export**
- [ ] **Step 2: Grep search for any forbidden em dash (`—`) characters in UI text**
- [ ] **Step 3: Check mobile responsiveness, contrast ratios, and console errors**
- [ ] **Step 4: Verify all buttons, links, and forms function with real destinations**

