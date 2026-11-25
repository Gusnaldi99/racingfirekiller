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
    detail: "Reaksi pemadaman cepat sebelum api merambat ke tangki atau kabin.",
  },
  {
    value: "5",
    unit: "TAHUN",
    label: "Garansi Tekanan",
    detail: "Jaminan keandalan tabung dan katup sesuai sertifikasi resmi pabrikan.",
  },
  {
    value: "A B C",
    unit: "KELAS API",
    label: "Perlindungan Penuh",
    detail: "Efektif memadamkan material padat, bahan bakar balap, dan gas.",
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
    title: "NONKONDUKTIF",
    summary: "Aman untuk sistem kelistrikan bertegangan tinggi.",
    detail:
      "Formula gas bersih Hartindo AF11E bersifat nonkonduktif sehingga tidak menimbulkan korsleting pada ECU, rangkaian kabel balap (wiring harness), alternator, maupun panel instrumen digital.",
    iconName: "Zap",
  },
  {
    number: "02",
    title: "TANPA RESIDU",
    summary: "Menguap bersih tanpa merusak komponen mesin.",
    detail:
      "Berbeda dengan APAR serbuk kimia konvensional yang bersifat korosif dan merusak bagian dalam mesin, Hartindo AF11E menguap tanpa meninggalkan residu serbuk. Mesin tetap terlindungi dan dapat diperiksa kembali tanpa kerak.",
    iconName: "ShieldCheck",
  },
  {
    number: "03",
    title: "PEMADAMAN CEPAT",
    summary: "Memadamkan api dalam waktu rata-rata 10 detik.",
    detail:
      "Bekerja seketika memutus reaksi berantai segitiga api serta menurunkan suhu panas ekstrem di ruang mesin hingga ke batas aman dalam hitungan detik.",
    iconName: "Timer",
  },
  {
    number: "04",
    title: "PROTEKSI TIGA KELAS API",
    summary: "Satu formula untuk kelas api A, B, dan C.",
    detail:
      "Melindungi dari kebakaran material padat di kabin (Kelas A), cairan bahan bakar seperti bensin, solar, avgas, dan metanol balap (Kelas B), serta gas bertekanan (Kelas C).",
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
    tagline: "Perlindungan kabin dan ruang sempit siap pasang",
    description:
      "Dirancang untuk mobil harian berperforma tinggi, mobil sport ringkas, dan peserta track day. Ukuran tabung yang ergonomis memudahkan penempatan di bawah jok penumpang, konsol tengah, atau partisi kabin pengemudi.",
    idealFor: "Mobil harian berperforma tinggi, Track Day, Hot Hatch, dan mobil sport 2 pintu.",
    image: "/assets/tabung/RFK-1-KG.webp",
    specs: {
      agent: "Hartindo AF11E (Gas Bersih)",
      fireRating: "8A 34B C",
      workingPressure: "14 Bar",
      testPressure: "27 Bar",
      operatingTemp: "-30°C hingga +60°C",
      material: "Tabung Baja Seamless Kekuatan Tinggi",
    },
  },
  {
    id: "rfk-2kg",
    name: "HARTINDO AF11E 2 KG",
    capacity: "2.0 KG",
    weightNumber: 2,
    badge: "PERLINDUNGAN SEIMBANG",
    tagline: "Kapasitas optimal untuk mobil modifikasi dan kompetisi",
    description:
      "Pilihan paling banyak digunakan oleh bengkel modifikasi, tim drift, dan peserta time attack. Memberikan durasi semprot lebih lama untuk ruang mesin berkapasitas besar serta turbocharger yang bekerja pada suhu tinggi.",
    idealFor: "Mobil modifikasi jalan raya, Pro Drift, Time Attack, dan balap turing.",
    image: "/assets/tabung/RFK-2-KG.webp",
    specs: {
      agent: "Hartindo AF11E (Gas Bersih)",
      fireRating: "13A 70B C",
      workingPressure: "14 Bar",
      testPressure: "27 Bar",
      operatingTemp: "-30°C hingga +60°C",
      material: "Tabung Baja Seamless Kekuatan Tinggi",
    },
  },
  {
    id: "rfk-4kg",
    name: "RFK 4 KG FIRE SUPPRESSION KIT",
    capacity: "4.0 KG",
    weightNumber: 4,
    badge: "SUPPRESSION KIT",
    tagline: "Paket lengkap sistem pemadam terintegrasi untuk ruang mesin dan kokpit",
    description:
      "Paket sistem pemadam berstandar regulasi kompetisi dengan aktivasi pelepas manual. Dilengkapi tabung 4.0 KG Hartindo AF11E bertekanan tinggi, katup mekanis dengan indikator tekanan, kabel penarik darurat di kokpit, pipa distribusi tembaga tahan tekanan tinggi, serta 8 titik nosel kuningan untuk pemadaman serentak pada ruang mesin, turbocharger, dan kompartemen tangki bahan bakar tanpa bergantung pada kelistrikan mobil.",
    idealFor: "Mobil balap reli profesional, Pro Drift, Time Attack, Drag Race Pro, dan mobil balap sirkuit dengan regulasi scrutineering resmi.",
    image: "/assets/tabung/Perlengkapan-pemadam-kebakaran-otomotif.webp",
    specs: {
      agent: "Hartindo AF11E (Gas Bersih)",
      fireRating: "21A 113B C (Multi-Nosel)",
      workingPressure: "14 Bar",
      testPressure: "27 Bar",
      operatingTemp: "-30°C hingga +60°C",
      material: "Tabung 4 KG Baja Seamless + Pipa Tembaga & 8 Nosel Kuningan",
    },
  },
];

export const SYSTEM_STEPS: SystemStep[] = [
  {
    step: "01",
    title: "TARIK KABEL DARURAT MANUAL",
    tagline: "Kabel penarik darurat di kokpit dan sisi luar bodi",
    description:
      "Pengemudi atau marshal dapat mengaktifkan sistem seketika dengan menarik kabel penarik darurat mekanis (safety pull-cable) yang terpasang di kabin kemudi maupun di sisi luar bodi kendaraan.",
  },
  {
    step: "02",
    title: "PEMBUKAAN KATUP MEKANIS",
    tagline: "Katup bertekanan kerja 14 Bar bereaksi seketika",
    description:
      "Tarikan kabel membuka katup utama tabung 4 KG secara mekanis murni tanpa membutuhkan daya aki atau kelistrikan mobil, mengalirkan gas Hartindo AF11E langsung ke jalur pipa distribusi tembaga.",
  },
  {
    step: "03",
    title: "DISTRIBUSI SERENTAK 8 NOSEL",
    tagline: "Cakupan merata ke ruang mesin dan tangki bahan bakar",
    description:
      "Delapan titik nosel kuningan menyemprotkan kabut gas bersih ke titik kritis bersuhu tinggi (turbocharger, manifold, dan tangki bensin) untuk memutus rantai api dalam waktu rata-rata 10 detik tanpa residu.",
  },
];

export const TECH_SPECS: TechSpecRow[] = [
  { parameter: "Media Pemadam", value: "Hartindo AF11E (Gas Cair Bersih / Clean Agent)", standard: "Bebas CFC & Halon" },
  { parameter: "Kapasitas Tersedia", value: "1.0 KG / 2.0 KG / 4.0 KG (Suppression Kit)", standard: "Spesifikasi Motorsport" },
  { parameter: "Klasifikasi Api", value: "Kelas A (Padat), Kelas B (Cairan), Kelas C (Gas)", standard: "EN3 / ISO 7165" },
  { parameter: "Tekanan Kerja", value: "14 Bar pada 20°C", standard: "Indikator Tekanan Presisi" },
  { parameter: "Tekanan Pengujian", value: "27 Bar", standard: "Uji Integritas Hidrolik" },
  { parameter: "Rentang Suhu Operasional", value: "-30°C hingga +60°C", standard: "Tahan Iklim Tropis & Ekstrem" },
  { parameter: "Material Tabung", value: "Baja Seamless Kekuatan Tinggi", standard: "Lapisan Hitam Tahan Korosi" },
  { parameter: "Katup & Tuas", value: "Kuningan dan Aluminium Anodized Merah", standard: "Pin Pengaman Lepas Cepat" },
  { parameter: "Sertifikasi Standar", value: "CE Marking, EN3 Certified, ISO 9001, Bureau Veritas", standard: "Lulus Uji Lab Internasional" },
  { parameter: "Masa Garansi & Ketahanan", value: "5 Tahun Jaminan Kebocoran Tekanan", standard: "Dukungan Purnajual Resmi" },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Mengapa APAR serbuk kimia biasa tidak disarankan untuk ruang mesin mobil balap?",
    answer:
      "APAR serbuk kimia konvensional mengandung garam kimia yang bersifat asam dan abrasif. Saat disemprotkan ke mesin panas, serbuk meleleh menjadi kerak lengket yang masuk ke celah silinder, sensor, dan bearing turbo, sehingga berisiko menyebabkan kerusakan mesin total. Selain itu, residunya bersifat korosif terhadap soket kabel kelistrikan. Hartindo AF11E adalah gas bersih yang memadamkan api seketika dan menguap 100% tanpa residu.",
  },
  {
    id: "faq-2",
    question: "Apakah formula Hartindo AF11E aman untuk kabel kelistrikan dan ECU mobil?",
    answer:
      "Aman. Hartindo AF11E memiliki kekuatan dielektrik tinggi dan bersifat nonkonduktif. Gas ini tidak menghantarkan arus listrik sehingga tidak memicu korsleting pada ECU mandiri, Power Distribution Module (PDM), koil pengapian, maupun baterai litium kendaraan balap.",
  },
  {
    id: "faq-3",
    question: "Bagaimana cara pemasangan tabung RFK di dalam kendaraan?",
    answer:
      "Setiap unit tabung RFK dilengkapi braket dudukan kokoh yang dapat dipasang secara fleksibel pada interior kendaraan, seperti lantai kabin atau konsol yang mudah dijangkau pengemudi. Tabung dilengkapi pin pengaman yang mudah ditarik untuk respons cepat saat darurat.",
  },
  {
    id: "faq-4",
    question: "Bagaimana cara kerja Fire Suppression Kit pada kendaraan balap?",
    answer:
      "Fire Suppression Kit RFK 4 KG menggunakan sistem pelepas manual berstandar motorsport. Sistem diaktifkan secara mekanis melalui kabel penarik darurat dari dalam kokpit atau sisi luar kendaraan. Saat kabel ditarik, katup tabung terbuka seketika dan mengalirkan gas Hartindo AF11E melalui pipa distribusi tembaga ke 8 titik nosel di ruang mesin, turbo, dan tangki bahan bakar secara serentak tanpa bergantung pada kelistrikan mobil.",
  },
  {
    id: "faq-5",
    question: "Berapa lama masa kedaluwarsa tabung dan bagaimana perawatannya?",
    answer:
      "Tabung RFK dilengkapi indikator tekanan (pressure gauge) untuk memantau posisi jarum di zona hijau setiap saat. Formula Hartindo AF11E tidak mengendap atau menggumpal seperti serbuk kimia. Kami memberikan garansi resmi 5 tahun beserta layanan inspeksi tekanan purnajual.",
  },
];

