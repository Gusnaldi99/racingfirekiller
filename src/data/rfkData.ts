export interface CanisterProduct {
  id: string;
  name: string;
  capacity: string;
  weightNumber: number | string;
  badge: string;
  tagline: string;
  description: string;
  idealFor: string;
  image: string;
  specs: {
    agent: string;
    fireRating: string;
    workingPressure: string;
    testPressure: string;
    operatingTemp: string;
    material: string;
  };
}

export interface FeaturePillar {
  number: string;
  title: string;
  summary: string;
  detail: string;
  iconName: "Zap" | "ShieldCheck" | "Timer" | "Flame";
}

export interface SystemStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
}

export interface TechSpecRow {
  parameter: string;
  value: string;
  standard: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MetricItem {
  value: string;
  unit: string;
  label: string;
  detail: string;
}

export const METRICS: MetricItem[] = [
  {
    value: "10",
    unit: "DETIK",
    label: "Rata-rata Pemadaman",
    detail: "Reaksi pemadaman super cepat sebelum api merambat ke tangki atau kabin.",
  },
  {
    value: "5",
    unit: "TAHUN",
    label: "Garansi Tekanan",
    detail: "Jaminan keandalan tabung dan katup bersertifikasi resmi pabrikan.",
  },
  {
    value: "A B C",
    unit: "KELAS API",
    label: "Perlindungan Penuh",
    detail: "Efektif memadamkan material padat, bahan bakar minyak balap, dan gas.",
  },
  {
    value: "14",
    unit: "BAR",
    label: "Tekanan Kerja",
    detail: "Diverifikasi dengan uji tekanan hidrolik hingga 27 Bar tanpa kebocoran.",
  },
];

export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    number: "01",
    title: "NON-KONDUKTIF",
    summary: "Aman untuk sistem kelistrikan bertegangan tinggi.",
    detail:
      "Formula gas bersih Hartindo AF11E memiliki sifat non-konduktif sehingga tidak menimbulkan korsleting pada ECU, wiring harness balap, alternator, maupun instrumentasi digital kendaraan.",
    iconName: "Zap",
  },
  {
    number: "02",
    title: "TANPA RESIDU",
    summary: "Bersih total, menguap tanpa merusak komponen mesin.",
    detail:
      "Berbeda dengan APAR serbuk powder konvensional yang korosif dan merusak internal mesin, Hartindo AF11E menguap tanpa meninggalkan residu serbuk sama sekali. Mesin tetap terlindungi dan siap dinyalakan kembali setelah pemeriksaan.",
    iconName: "ShieldCheck",
  },
  {
    number: "03",
    title: "RESPONS KILAT",
    summary: "Padamkan api ekstrem dalam rata-rata 10 detik.",
    detail:
      "Bekerja seketika memutuskan reaksi berantai segitiga api. Efektif menurunkan panas ekstrem ruang mesin hingga suhu aman dalam hitungan detik pertama.",
    iconName: "Timer",
  },
  {
    number: "04",
    title: "TRIPLE PROTECTION",
    summary: "Satu formulasi untuk kelas api A, B, dan C.",
    detail:
      "Perlindungan menyeluruh untuk kebakaran material padat kabin (Kelas A), cairan bahan bakar bensin, solar, avgas, metanol balap (Kelas B), serta gas bertekanan (Kelas C).",
    iconName: "Flame",
  },
];

export const CANISTER_PRODUCTS: CanisterProduct[] = [
  {
    id: "rfk-1kg",
    name: "HARTINDO AF11E 1 KG",
    capacity: "1.0 KG",
    weightNumber: 1,
    badge: "RINGKAS & EFISIEN",
    tagline: "Perlindungan kabin dan ruang kompak siap pasang",
    description:
      "Diformulasikan khusus untuk kendaraan harian performa, mobil sport kompak, dan track day. Ukuran tabung yang ergonomis memudahkan penempatan di bawah jok penumpang, konsol tengah, atau partisi kabin pengemudi.",
    idealFor: "Mobil harian performa tinggi, Track Day, Hot Hatch, dan mobil sport 2 pintu.",
    image: "/assets/tabung/RFK-1-KG.webp",
    specs: {
      agent: "Hartindo AF11E Clean Agent",
      fireRating: "8A 34B C",
      workingPressure: "14 Bar",
      testPressure: "27 Bar",
      operatingTemp: "-30°C hingga +60°C",
      material: "Seamless High-Strength Steel Cylinder",
    },
  },
  {
    id: "rfk-2kg",
    name: "HARTINDO AF11E 2 KG",
    capacity: "2.0 KG",
    weightNumber: 2,
    badge: "PERLINDUNGAN SEIMBANG",
    tagline: "Kapasitas optimal untuk modifikasi dan kompetisi",
    description:
      "Pilihan paling populer di kalangan bengkel modifikasi, drift, dan time attack. Memberikan debit pemadaman lebih lama untuk ruang mesin berkapasitas besar serta turbocharger yang beroperasi pada suhu sangat tinggi.",
    idealFor: "Mobil modifikasi jalan raya, Pro Drift, Time Attack, dan mobil turing.",
    image: "/assets/tabung/RFK-2-KG.webp",
    specs: {
      agent: "Hartindo AF11E Clean Agent",
      fireRating: "13A 70B C",
      workingPressure: "14 Bar",
      testPressure: "27 Bar",
      operatingTemp: "-30°C hingga +60°C",
      material: "Seamless High-Strength Steel Cylinder",
    },
  },
  {
    id: "rfk-4kg",
    name: "RFK 4 KG FIRE SUPPRESSION KIT",
    capacity: "4.0 KG",
    weightNumber: 4,
    badge: "SUPPRESSION KIT",
    tagline: "Satu set lengkap motorsport suppression system terintegrasi ruang mesin & kokpit",
    description:
      "Satu paket lengkap motorsport suppression system berstandar regulasi kompetisi dengan aktivasi manual release. Dilengkapi tabung 4.0 KG Hartindo AF11E bertekanan tinggi, katup mekanis presisi dengan indikator gauge, kabel penarik darurat cockpit, selang pipa tembaga distribusi anti-pecah, serta 8 titik nozzle kuningan presisi untuk pemadaman simultan ruang mesin, turbocharger, dan kompartemen tangki bahan bakar tanpa ketergantungan kelistrikan mobil.",
    idealFor: "Mobil balap reli profesional, Pro Drift, Time Attack, Drag Race Pro, dan mobil balap sirkuit dengan regulasi scrutineering resmi.",
    image: "/assets/tabung/Perlengkapan-pemadam-kebakaran-otomotif.webp",
    specs: {
      agent: "Hartindo AF11E Clean Agent",
      fireRating: "21A 113B C (Multi-Nozzle)",
      workingPressure: "14 Bar",
      testPressure: "27 Bar",
      operatingTemp: "-30°C hingga +60°C",
      material: "Tabung 4 KG Baja Mulus + Pipa Tembaga & 8 Nozzle Kuningan",
    },
  },
];

export const SYSTEM_STEPS: SystemStep[] = [
  {
    step: "01",
    title: "AKSES TARIK MANUAL CEPAT",
    tagline: "Kabel penarik darurat kokpit & luar",
    description:
      "Pengemudi atau marshal dapat mengaktifkan sistem seketika dengan menarik safety pull-cable darurat mekanis yang terpasang strategis di kabin kemudi maupun di sisi luar bodi kendaraan.",
  },
  {
    step: "02",
    title: "PELEPASAN KATUP MEKANIS PRESISI",
    tagline: "Katup bertekanan tinggi 14 Bar respons instan",
    description:
      "Tarikan kabel membuka katup utama tabung 4 KG secara mekanis murni tanpa membutuhkan daya aki atau kelistrikan mobil, mengalirkan gas Hartindo AF11E langsung ke jalur pipa distribusi tembaga.",
  },
  {
    step: "03",
    title: "DISTRIBUSI SIMULTAN 8 NOZZLE",
    tagline: "Cakupan multi-arah ruang mesin & tangki",
    description:
      "Nozzle presisi motorsport menyemprotkan kabut gas bersih ke titik kritis suhu tinggi (turbocharger, manifold, dan tangki bensin) untuk memutus rantai api dalam rata-rata 10 detik tanpa residu.",
  },
];

export const TECH_SPECS: TechSpecRow[] = [
  { parameter: "Media Pemadam", value: "Hartindo AF11E (Gas Cair Bersih / Clean Agent)", standard: "Bebas CFC & Halon" },
  { parameter: "Kapasitas Tersedia", value: "1.0 KG / 2.0 KG / 4.0 KG (Suppression Kit)", standard: "Spesifikasi Motorsport" },
  { parameter: "Klasifikasi Api", value: "Kelas A (Padat), Kelas B (Cairan), Kelas C (Gas)", standard: "EN3 / ISO 7165" },
  { parameter: "Tekanan Kerja (Working Pressure)", value: "14 Bar pada 20°C", standard: "Gauge Indikator Presisi" },
  { parameter: "Tekanan Pengujian (Test Pressure)", value: "27 Bar", standard: "Hydraulic Integrity Test" },
  { parameter: "Rentang Suhu Operasional", value: "-30°C hingga +60°C", standard: "Tahan Iklim Tropis & Ekstrem" },
  { parameter: "Material Tabung", value: "Baja Mulus Tarikan Tinggi (Seamless Steel)", standard: "Finishing Coating Hitam Tahan Korosi" },
  { parameter: "Katup & Handle", value: "Kuningan / Aluminium Anodized Warna Merah Balap", standard: "Safety Pin Quick-Release" },
  { parameter: "Sertifikasi Standar", value: "CE Marking, EN3 Certified, ISO 9001, Bureau Veritas", standard: "Lulus Uji Lab Internasional" },
  { parameter: "Masa Garansi & Ketahanan", value: "5 Tahun Jaminan Kebocoran Tekanan", standard: "Dukungan Purna Jual Resmi" },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Mengapa APAR bubuk powder biasa dilarang untuk ruang mesin mobil balap?",
    answer:
      "APAR serbuk powder konvensional mengandung garam kimia bersifat asam dan abrasif. Saat disemprotkan ke mesin panas, serbuk meleleh menjadi kerak lengket yang masuk ke celah silinder, sensor, dan bearing turbo, mengakibatkan kerusakan mesin total (total engine failure). Selain itu residunya bersifat korosif terhadap soket kabel kelistrikan. Hartindo AF11E adalah gas bersih (clean agent) yang memadamkan api seketika dan menguap 100% tanpa residu.",
  },
  {
    id: "faq-2",
    question: "Apakah formula Hartindo AF11E aman untuk kabel kelistrikan dan ECU mobil?",
    answer:
      "Sangat aman. Hartindo AF11E memiliki kekuatan dielektrik tinggi dan bersifat non-konduktif. Gas ini tidak menghantarkan arus listrik sehingga tidak akan memicu korsleting pada ECU mandiri, Power Distribution Module (PDM), koil pengapian, maupun baterai lithium kendaraan balap.",
  },
  {
    id: "faq-3",
    question: "Bagaimana cara pemasangan tabung RFK di dalam kendaraan?",
    answer:
      "Setiap unit tabung RFK dilengkapi braket dudukan kokoh yang dapat dipasang fleksibel pada interior kendaraan, seperti lantai kabin atau konsol yang mudah dijangkau pengemudi. Tabung dilengkapi pin pengaman yang mudah ditarik untuk respon cepat saat darurat.",
  },
  {
    id: "faq-4",
    question: "Bagaimana sistem kerja Fire Suppression Kit pada kendaraan balap?",
    answer:
      "Fire Suppression Kit RFK 4 KG menggunakan sistem manual release berstandar motorsport. Sistem diaktifkan secara mekanis menggunakan kabel penarik darurat (cockpit pull-cable) dari dalam kabin atau sisi luar kendaraan. Saat ditarik, katup tabung terbuka seketika dan mengalirkan gas Hartindo AF11E melalui pipa distribusi tembaga ke 8 titik nozzle multi-arah di ruang mesin, turbo, dan tangki bahan bakar secara simultan tanpa bergantung pada sistem kelistrikan mobil.",
  },
  {
    id: "faq-5",
    question: "Berapa lama masa kedaluwarsa tabung dan bagaimana perawatannya?",
    answer:
      "Tabung RFK dilengkapi pressure gauge presisi tinggi untuk memantau tekanan jarum hijau setiap saat. Formula Hartindo AF11E tidak mengendap atau menggumpal seperti bubuk powder. Kami memberikan garansi resmi 5 tahun dengan layanan inspeksi tekanan purna jual.",
  },
];

