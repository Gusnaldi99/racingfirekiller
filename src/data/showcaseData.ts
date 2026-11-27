export interface ShowcaseGalleryPhoto {
  src: string;
  title: string;
  caption: string;
  tag: string;
}

export interface ShowcaseSpecItem {
  label: string;
  value: string;
}

export interface ShowcaseFeatureItem {
  number: string;
  title: string;
  description: string;
}

export interface ShowcaseItem {
  slug: string;
  title: string;
  subtitle: string;
  heroHeadline: string;
  badge: string;
  tagline: string;
  coverImage: string;
  overview: string;
  cardSummary: string;
  categoryTag: string;
  carSpecs: ShowcaseSpecItem[];
  rfkSystemSpecs: ShowcaseSpecItem[];
  features: ShowcaseFeatureItem[];
  whyRfk: {
    heading: string;
    paragraphs: string[];
    callout: string;
  };
  installationHighlights: {
    title: string;
    points: {
      location: string;
      description: string;
    }[];
  };
  gallery: ShowcaseGalleryPhoto[];
  testimonialOrQuote: {
    quote: string;
    author: string;
    role: string;
  };
  whatsappMessage: string;
}

export const SHOWCASES: ShowcaseItem[] = [
  {
    slug: "bmw-passato",
    title: "BMW Passato",
    subtitle: "Mobil Modifikasi Motorsport Pameran SEMA Show",
    heroHeadline: "STANDAR PROTEKSI INTERNASIONAL UNTUK MOBIL PAMERAN SEMA SHOW.",
    badge: "SEMA SHOW BUILD / SPEK INTERNASIONAL",
    tagline: "Proteksi Bersih untuk Mobil Balap dan Modifikasi Berkelas",
    coverImage: "/assets/passato/bmw-sema-1.jpg",
    overview:
      "BMW Passato adalah proyek modifikasi dan motorsport berstandar internasional yang tampil di pameran SEMA Show Las Vegas. Untuk memenuhi standar pemeriksaan teknis (scrutineering) internasional sekaligus menjaga kebersihan ruang mesin, BMW Passato menggunakan RFK 4.0 KG Fire Suppression Kit dengan sistem pelepas manual mekanis, gas bersih Hartindo AF11E, pipa distribusi tembaga, dan braket motorsport.",
    cardSummary:
      "Mobil modifikasi motorsport internasional yang tampil di ajang SEMA Show Las Vegas. Dilengkapi RFK 4.0 KG Fire Suppression Kit pelepas manual dengan distribusi multi-nosel dan formula gas bersih tanpa residu.",
    categoryTag: "MODIFIKASI MOTORSPORT INTERNASIONAL",
    carSpecs: [
      { label: "Platform Mobil", value: "Sasis BMW M Performance" },
      { label: "Panggung Internasional", value: "Pameran SEMA Show" },
      { label: "Peruntukan", value: "Lintasan Balap & Pameran Internasional" },
      { label: "Struktur Kokpit", value: "Roll Cage Penuh Standar FIA" },
      { label: "Sistem Bahan Bakar", value: "Sistem Bahan Bakar Balap Tekanan Tinggi" },
      { label: "Manajemen Mesin", value: "ECU Balap Mandiri & Kabel Mil-Spec" },
    ],
    rfkSystemSpecs: [
      { label: "Sistem Pemadam", value: "RFK 4.0 KG Fire Suppression Kit (Pelepas Manual)" },
      { label: "Media Pemadam", value: "Hartindo AF11E (Gas Cair Bersih)" },
      { label: "Kapasitas Tabung", value: "RFK 4.0 KG Spek Kompetisi Motorsport" },
      { label: "Aktivasi Sistem", value: "Manual Mekanis via Kabel Penarik Darurat (Tanpa Kelistrikan)" },
      { label: "Tekanan Kerja", value: "14 Bar (Uji Tekanan Hidrolik 27 Bar)" },
      { label: "Distribusi & Braket", value: "Pipa Tembaga, 8 Titik Nosel Kuningan & Braket Heavy-Duty" },
      { label: "Zona Proteksi", value: "Ruang Mesin (Turbo & Manifold), Tangki BBM & Kokpit" },
      { label: "Waktu Padam Rata-rata", value: "Kurang dari 10 Detik Pelepasan Efektif" },
      { label: "Karakteristik Residu", value: "100% Tanpa Residu, Nonkonduktif, Aman Komponen" },
    ],
    features: [
      {
        number: "01",
        title: "GAS BERSIH TANPA RESIDU",
        description:
          "Hartindo AF11E menguap bersih tanpa meninggalkan endapan serbuk kimia korosif. Komponen titanium, aluminium presisi, dan sensor mesin kustom tetap terlindungi tanpa kerusakan.",
      },
      {
        number: "02",
        title: "PELEPAS MANUAL 100% MEKANIS",
        description:
          "Aktivasi menggunakan kabel penarik darurat (safety pull-cable) di kokpit dan sisi luar bodi tanpa bergantung pada daya aki atau sistem kelistrikan mobil.",
      },
      {
        number: "03",
        title: "NONKONDUKTIF UNTUK KABEL MIL-SPEC",
        description:
          "Sifat dielektrik tinggi mencegah risiko korsleting pada PDM, layar instrumen balap digital, dan rangkaian kabel motorsport bertegangan tinggi.",
      },
      {
        number: "04",
        title: "DISTRIBUSI 8 NOSEL RUANG MESIN",
        description:
          "Delapan titik nosel kuningan melalui pipa tembaga diarahkan ke area turbocharger, manifold, dan saluran bahan bakar untuk memadamkan api secara serentak.",
      },
    ],
    whyRfk: {
      heading: "Mengapa BMW Passato Memilih Racing Fire Killer?",
      paragraphs: [
        "Membangun mobil untuk pameran dunia seperti SEMA Show menuntut ketelitian pada setiap komponen. Ketika biaya besar diinvestasikan untuk mesin balap kustom, sistem kabel berstandar militer, dan panel aerodinamika serat karbon, risiko kebakaran tidak bisa diabaikan.",
        "Penggunaan APAR serbuk kimia (dry chemical powder) konvensional berisiko besar bagi mobil berperforma tinggi. Sekali disemprotkan, serbuk asamnya akan meleleh ke sela silinder mesin panas, menyumbat filter udara, dan mengikis konektor kelistrikan hingga menyebabkan kerusakan mesin permanen.",
        "Racing Fire Killer menjadi solusi yang tepat untuk kebutuhan tersebut. Dengan formula gas cair bersih Hartindo AF11E, RFK memadamkan api rata-rata dalam 10 detik dengan memutus reaksi rantai pembakaran. Gas ini menguap seketika tanpa noda, tanpa korosi, dan tanpa risiko korsleting, sehingga BMW Passato tetap aman saat dipamerkan maupun diuji di lintasan.",
      ],
      callout:
        "Bagi para builder dan pemilik mobil berperforma tinggi, RFK bukan sekadar alat pemadam, melainkan perlindungan penting untuk menjaga aset otomotif bernilai tinggi.",
    },
    installationHighlights: {
      title: "Detail Konfigurasi Pemasangan RFK 4.0 KG pada BMW Passato",
      points: [
        {
          location: "Tabung 4.0 KG & Kabel Tarik Kokpit",
          description:
            "Tabung RFK 4.0 KG Fire Suppression Kit dipasang kokoh pada sasis kabin dengan kabel penarik darurat manual (pull-cable) yang mudah dijangkau pengemudi saat mengenakan sarung tangan balap.",
        },
        {
          location: "Braket Kokoh Motorsport",
          description:
            "Braket heavy-duty dirancang menahan getaran berfrekuensi tinggi saat mobil melaju kencang di sirkuit tanpa ada celah goyang.",
        },
        {
          location: "Pipa Tembaga & 8 Titik Nosel",
          description:
            "Jalur pipa tembaga bertekanan tinggi menyalurkan gas ke 8 titik nosel di area turbocharger, manifold, tangki bahan bakar, dan kokpit untuk pemadaman serentak.",
        },
        {
          location: "Panel Indikator Tekanan",
          description:
            "Indikator tekanan pada katup mekanis dipasang menghadap ke arah pandang mekanik dan pengemudi untuk pemeriksaan cepat sebelum mobil turun ke lintasan atau arena pameran.",
        },
      ],
    },
    gallery: [
      {
        src: "/assets/passato/bmw-sema-1.jpg",
        title: "Tampilan Penuh BMW Passato",
        caption:
          "Tampilan BMW Passato di ajang motorsport internasional dengan paket aerodinamika lebar dan sistem Fire Suppression Kit 4.0 KG pelepas manual.",
        tag: "01 / EKSTERIOR & AERO",
      },
      {
        src: "/assets/passato/bmw-sema-2.jpg",
        title: "Integrasi Tabung 4.0 KG & Kabel Tarik Kokpit",
        caption:
          "Penempatan tabung RFK 4.0 KG Fire Suppression Kit dan jalur kabel aktivasi manual di area kokpit tanpa mengganggu jarak pandang pengemudi.",
        tag: "02 / INTEGRASI KOKPIT",
      },
      {
        src: "/assets/passato/bmw-sema-3.jpg",
        title: "Detail Braket & Katup Mekanis 4.0 KG",
        caption:
          "Braket kokoh yang mengikat tabung 4.0 KG beserta katup mekanis berindikator tekanan agar tetap stabil menghadapi guncangan di sirkuit.",
        tag: "03 / DUDUKAN TABUNG 4 KG",
      },
      {
        src: "/assets/passato/bmw-sema-4.jpg",
        title: "Proteksi Area Ruang Mesin & Turbo",
        caption:
          "Kompartemen mesin bertenaga tinggi dengan perlindungan terarah untuk meredam risiko panas pada manifold dan sistem induksi udara.",
        tag: "04 / PROTEKSI RUANG MESIN",
      },
      {
        src: "/assets/passato/bmw-sema-5.jpg",
        title: "Setelan Lintasan Siap Balap",
        caption:
          "Teruji di lintasan sirkuit dan pameran kelas dunia, membuktikan aspek keselamatan dan kerapian instalasi dapat berjalan beriringan.",
        tag: "05 / SIAP LINTASAN",
      },
    ],
    testimonialOrQuote: {
      quote:
        "Pada level modifikasi motorsport tertinggi, estetika dan keselamatan harus berada di level yang sama. RFK memberikan perlindungan pemadaman terbersih tanpa merusak ruang mesin bernilai tinggi.",
      author: "Passato Motorsport Engineering",
      role: "Builder Otomotif Internasional",
    },
    whatsappMessage:
      "Halo Tim Racing Fire Killer, saya tertarik dengan sistem fire suppression motorsport seperti yang terpasang pada BMW Passato. Saya ingin konsultasi untuk mobil saya.",
  },
  {
    slug: "driftbull-garasi-drift",
    title: "Driftbull - Garasi Drift",
    subtitle: "Mobil Kompetisi Drift Profesional",
    heroHeadline: "PERLINDUNGAN PEMADAM AKTIF DI ARENA DRIFTING PALING EKSTREM.",
    badge: "GARASI DRIFT / MOBIL PRO DRIFT",
    tagline: "Dipercaya Tim Garasi Drift untuk Menghadapi Panas Ekstrem Lintasan Drift",
    coverImage: "/assets/driftbull/driftbull-1.jpg",
    overview:
      "Driftbull adalah mobil kompetisi drifting profesional milik Garasi Drift (Ziko Harnadi & Dipo Dwiki). Di arena drifting, mesin dipaksa bekerja pada putaran RPM tinggi secara terus-menerus dengan sudut kemiringan ekstrem dan suhu knalpot yang mencapai ratusan derajat Celsius. Garasi Drift memilih RFK 4.0 KG Fire Suppression Kit pelepas manual sebagai sistem pemadam kebakaran untuk melindungi pengemudi dan mesin Driftbull.",
    cardSummary:
      "Mobil drift kompetisi milik Garasi Drift yang menghadapi suhu mesin tinggi dan putaran RPM ekstrem. Mengandalkan RFK 4.0 KG Fire Suppression Kit pelepas manual untuk pemadaman cepat tanpa meninggalkan residu serbuk kimia korosif.",
    categoryTag: "KEJUARAAN PRO DRIFT",
    carSpecs: [
      { label: "Nama Mobil", value: "Driftbull oleh Garasi Drift" },
      { label: "Tim Balap", value: "Tim Motorsport Garasi Drift" },
      { label: "Disiplin Motorsport", value: "Professional Drifting / Tandem Battle" },
      { label: "Konfigurasi Mesin", value: "Mesin Kompetisi Turbocharger Tekanan Tinggi" },
      { label: "Sistem Kemudi & Sudut", value: "Pro Drift Angle Kit & Rem Tangan Hidrolik" },
      { label: "Kabin & Keselamatan", value: "Roll Cage Penuh Standar FIA & Sekat Firewall" },
    ],
    rfkSystemSpecs: [
      { label: "Sistem Pemadam", value: "RFK 4.0 KG Fire Suppression Kit (Pelepas Manual)" },
      { label: "Media Pemadam", value: "Hartindo AF11E (Gas Bersih)" },
      { label: "Kapasitas Tabung", value: "RFK 4.0 KG Spek Kompetisi Motorsport" },
      { label: "Aktivasi Sistem", value: "Manual Mekanis via Kabel Penarik Darurat (Tanpa Kelistrikan)" },
      { label: "Tekanan Kerja", value: "14 Bar Standar Kerja Presisi" },
      { label: "Distribusi & Braket", value: "Pipa Tembaga, 8 Titik Nosel Kuningan & Braket Heavy-Duty" },
      { label: "Cakupan Zona", value: "Ruang Mesin, Jalur Turbocharger, Tangki Bahan Bakar & Kokpit" },
      { label: "Waktu Respons", value: "Pemadaman Seketika Rata-rata 10 Detik" },
      { label: "Dampak Kelistrikan", value: "Nonkonduktif, Aman untuk ECU Balap & PDM" },
    ],
    features: [
      {
        number: "01",
        title: "TAHAN GUNCANGAN G-FORCE LATERAL",
        description:
          "Saat drifting pada kecepatan tinggi dengan transisi arah yang cepat, braket heavy-duty menjaga tabung 4.0 KG dan jalur pipa tembaga tetap terkunci aman tanpa bergeser.",
      },
      {
        number: "02",
        title: "REDAM PANAS TURBOCHARGER SEKETIKA",
        description:
          "Semprotan gas cair Hartindo AF11E melalui nosel terarah menyerap panas secara cepat di sekitar rumah turbo, manifold knalpot, dan tangki bahan bakar.",
      },
      {
        number: "03",
        title: "MESIN MUDAH DIPERIKSA KEMBALI",
        description:
          "Tanpa kerak serbuk kimia yang lengket dan menyumbat sela mesin, kru Garasi Drift dapat segera memeriksa kondisi mesin dan bersiap kembali ke lintasan.",
      },
      {
        number: "04",
        title: "AKTIVASI MANUAL MEKANIS DI KOKPIT",
        description:
          "Kabel penarik darurat manual dipasang dalam jangkauan tangan drifter saat sabuk pengaman 6-titik terkunci rapat, membuka katup 4.0 KG seketika tanpa bergantung pada kelistrikan mobil.",
      },
    ],
    whyRfk: {
      heading: "Mengapa Garasi Drift Mempercayakan Driftbull kepada RFK?",
      paragraphs: [
        "Drifting adalah cabang motorsport yang sangat membebani ketahanan mesin dan komponen. Mobil melaju menyamping dalam kecepatan tinggi, roda belakang berputar menghasilkan asap tebal, sementara aliran udara pendingin dari depan berkurang karena posisi mobil yang miring.",
        "Kondisi tersebut membuat suhu ruang mesin melonjak hingga lebih dari 850°C pada manifold knalpot dan rumah turbocharger. Dengan tekanan bahan bakar balap yang tinggi di sekitar mesin, kebocoran kecil sekalipun dapat memicu api seketika.",
        "Garasi Drift menghindari penggunaan APAR serbuk kimia biasa. Jika serbuk konvensional disemprotkan, partikelnya dapat merusak bagian dalam mesin turbo dan mengotori soket kabel ECU mandiri, yang berujung pada kerusakan mahal dan terhentinya kejuaraan.",
        "Dengan Racing Fire Killer, Driftbull mendapatkan perlindungan yang sesuai untuk mobil kompetisi: gas bersih Hartindo AF11E memadamkan api rata-rata dalam hitungan detik, menguap tanpa residu, dan bersifat nonkonduktif sehingga seluruh perangkat elektronika Driftbull tetap aman.",
      ],
      callout:
        "Di lintasan drift kompetisi, rasa percaya diri pengemudi lahir dari jaminan keamanan mobil. RFK membantu drifter menekan pedal gas hingga batas maksimal dengan lebih tenang.",
    },
    installationHighlights: {
      title: "Konfigurasi Pemasangan Proteksi RFK 4.0 KG pada Driftbull",
      points: [
        {
          location: "Tabung 4.0 KG pada Kabin / Roll Cage",
          description:
            "Tabung RFK 4.0 KG Fire Suppression Kit terpasang kokoh di dalam interior Driftbull lengkap dengan katup pelepas manual dan indikator tekanan yang mudah dipantau kru.",
        },
        {
          location: "Braket Heavy Duty",
          description:
            "Menggunakan material berkekuatan tinggi yang dirancang menahan entakan keras saat benturan ban, getaran limiter RPM tinggi, dan suspensi balap yang kaku.",
        },
        {
          location: "Jalur Pipa Tembaga & 8 Nosel",
          description:
            "Delapan titik nosel kuningan diarahkan langsung ke area rawan kebakaran seperti ruang mesin, turbocharger, exhaust manifold, dan kompartemen tangki bahan bakar balap.",
        },
        {
          location: "Kabel Penarik Darurat Manual (Pull-Cable)",
          description:
            "Tuas kabel penarik darurat berwarna merah mencolok dipasang di kokpit dan sisi luar bodi agar mudah ditarik oleh drifter maupun marshal meski mengenakan sarung tangan balap tebal.",
        },
      ],
    },
    gallery: [
      {
        src: "/assets/driftbull/driftbull-1.jpg",
        title: "Instalasi Tabung 4.0 KG Fire Suppression Kit",
        caption:
          "Integrasi tabung RFK 4.0 KG Fire Suppression Kit pelepas manual pada Driftbull untuk menjaga kesiapan proteksi kebakaran di setiap sesi tandem balap.",
        tag: "01 / TABUNG 4 KG KIT",
      },
      {
        src: "/assets/driftbull/driftbull-2.jpg",
        title: "Braket Presisi Tahan G-Force Drift",
        caption:
          "Detail braket dudukan kokoh yang mengikat tabung 4.0 KG dengan presisi tinggi, tahan terhadap entakan lateral dan getaran sasis yang keras.",
        tag: "02 / BRAKET HEAVY DUTY",
      },
      {
        src: "/assets/driftbull/driftbull-3.jpg",
        title: "Integrasi Kokpit & Kabel Pelepas Manual",
        caption:
          "Tampilan kabin kompetisi Garasi Drift dengan sistem RFK 4.0 KG dan akses kabel tarik darurat yang rapi berdampingan bersama jok balap dan setir kompetisi.",
        tag: "03 / KOKPIT BALAP",
      },
      {
        src: "/assets/driftbull/driftbull-4.jpg",
        title: "Tampilan Driftbull Garasi Drift",
        caption:
          "Mobil kompetisi Driftbull karya Garasi Drift, siap menaklukkan aspal dengan sudut kemiringan tajam dan kecepatan tinggi.",
        tag: "04 / TAMPILAN PENUH",
      },
      {
        src: "/assets/driftbull/driftbull-5.jpg",
        title: "Siap Beraksi di Lintasan Sirkuit",
        caption:
          "Driftbull menunjukkan bahwa mobil drift bertenaga besar perlu didukung sistem pemadam kebakaran motorsport yang andal.",
        tag: "05 / SIAP KOMPETISI",
      },
    ],
    testimonialOrQuote: {
      quote:
        "Di arena drift profesional, temperatur mesin dan turbo bekerja di titik didih ekstrem. Racing Fire Killer memberi kami ketenangan penuh untuk memacu mobil secara maksimal di setiap clipping point tanpa rasa takut.",
      author: "Garasi Drift Motorsport",
      role: "Tim Drift Profesional & Kreator Otomotif",
    },
    whatsappMessage:
      "Halo Tim Racing Fire Killer, saya melihat instalasi RFK di Driftbull Garasi Drift dan tertarik memasang sistem fire suppression motorsport untuk mobil saya. Mohon informasinya.",
  },
];

export function getShowcaseBySlug(slug: string): ShowcaseItem | undefined {
  return SHOWCASES.find((item) => item.slug === slug);
}

