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
      "BMW Passato adalah proyek modifikasi dan motorsport berstandar internasional yang tampil di pameran SEMA Show Las Vegas. Untuk memenuhi standar pemeriksaan teknis (scrutineering) internasional sekaligus menjaga kebersihan ruang mesin, BMW Passato menggunakan sistem pemadam Racing Fire Killer (RFK) dengan gas bersih Hartindo AF11E dan braket motorsport.",
    cardSummary:
      "Mobil modifikasi motorsport internasional yang tampil di ajang SEMA Show Las Vegas. Dilengkapi sistem proteksi RFK dengan braket motorsport kokoh dan formula gas bersih tanpa residu untuk menjaga komponen mesin berperforma tinggi.",
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
      { label: "Sistem Pemadam", value: "RFK Active Suppression System & Tabung Manual Kokpit" },
      { label: "Media Pemadam", value: "Hartindo AF11E (Gas Cair Bersih)" },
      { label: "Kapasitas Tabung", value: "RFK 2.0 KG Spek Motorsport" },
      { label: "Tekanan Kerja", value: "14 Bar (Uji Tekanan Hidrolik 27 Bar)" },
      { label: "Tipe Braket", value: "Braket Dudukan Motorsport Heavy-Duty" },
      { label: "Zona Proteksi", value: "Ruang Mesin (Turbo & Manifold), Kokpit Pengemudi" },
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
        title: "BRAKET DUDUKAN MOTORSPORT",
        description:
          "Braket motorsport mengunci tabung dengan kokoh di kabin kendaraan. Pin pengaman pelepas cepat memungkinkan pengemudi mengambil tabung dalam hitungan detik saat darurat.",
      },
      {
        number: "03",
        title: "NONKONDUKTIF UNTUK KABEL MIL-SPEC",
        description:
          "Sifat dielektrik tinggi mencegah risiko korsleting pada PDM, layar instrumen balap digital, dan rangkaian kabel motorsport bertegangan tinggi.",
      },
      {
        number: "04",
        title: "DISTRIBUSI NOSEL RUANG MESIN",
        description:
          "Nosel baja tahan karat diarahkan ke titik panas turbocharger dan fuel rail untuk meredam api sebelum merambat ke kabin.",
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
      title: "Detail Konfigurasi Pemasangan RFK pada BMW Passato",
      points: [
        {
          location: "Kabin & Palang Roll Cage",
          description:
            "Tabung RFK 2.0 KG dipasang pada palang roll cage di sisi pengemudi agar mudah diraih dengan sarung tangan balap dan dilengkapi pin pengaman merah yang kontras.",
        },
        {
          location: "Braket Kokoh Motorsport",
          description:
            "Braket dirancang menahan getaran berfrekuensi tinggi saat mobil melaju kencang di sirkuit tanpa ada celah goyang.",
        },
        {
          location: "Kompartemen Mesin (Engine Bay)",
          description:
            "Jalur pemadaman diarahkan ke area turbocharger bersuhu tinggi dan sambungan saluran bahan bakar bertekanan tinggi untuk respons pemadaman langsung.",
        },
        {
          location: "Panel Indikator Tekanan",
          description:
            "Indikator tekanan dipasang menghadap ke arah pandang mekanik dan pengemudi untuk pemeriksaan cepat sebelum mobil turun ke lintasan atau arena pameran.",
        },
      ],
    },
    gallery: [
      {
        src: "/assets/passato/bmw-sema-1.jpg",
        title: "Tampilan Penuh BMW Passato",
        caption:
          "Tampilan BMW Passato di ajang motorsport internasional dengan paket aerodinamika lebar dan standar keselamatan balap.",
        tag: "01 / EKSTERIOR & AERO",
      },
      {
        src: "/assets/passato/bmw-sema-2.jpg",
        title: "Integrasi Tabung pada Kokpit & Roll Cage",
        caption:
          "Penempatan tabung RFK pada pipa roll cage kabin yang memberikan akses cepat bagi pengemudi tanpa mengganggu jarak pandang.",
        tag: "02 / INTEGRASI KOKPIT",
      },
      {
        src: "/assets/passato/bmw-sema-3.jpg",
        title: "Detail Braket Dudukan Tabung",
        caption:
          "Braket kokoh yang mengikat tabung RFK agar tetap stabil menghadapi guncangan di sirkuit.",
        tag: "03 / DUDUKAN TABUNG",
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
      "Driftbull adalah mobil kompetisi drifting profesional milik Garasi Drift (Ziko Harnadi & Dipo Dwiki). Di arena drifting, mesin dipaksa bekerja pada putaran RPM tinggi secara terus-menerus dengan sudut kemiringan ekstrem dan suhu knalpot yang mencapai ratusan derajat Celsius. Garasi Drift memilih Racing Fire Killer (RFK) sebagai sistem pemadam kebakaran aktif untuk melindungi pengemudi dan mesin Driftbull.",
    cardSummary:
      "Mobil drift kompetisi milik Garasi Drift yang menghadapi suhu mesin tinggi dan putaran RPM ekstrem. Mengandalkan sistem RFK untuk pemadaman cepat tanpa meninggalkan residu serbuk kimia korosif.",
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
      { label: "Sistem Pemadam", value: "RFK Active Fire Suppression System" },
      { label: "Media Pemadam", value: "Hartindo AF11E (Gas Bersih)" },
      { label: "Kapasitas Tabung", value: "RFK 2.0 KG Spek Kompetisi Motorsport" },
      { label: "Tekanan Kerja", value: "14 Bar Standar Kerja Presisi" },
      { label: "Tipe Braket", value: "Braket Dudukan Motorsport Heavy-Duty" },
      { label: "Cakupan Zona", value: "Ruang Mesin, Jalur Turbocharger, Kompartemen Kokpit" },
      { label: "Waktu Respons", value: "Pemadaman Seketika Rata-rata 10 Detik" },
      { label: "Dampak Kelistrikan", value: "Nonkonduktif, Aman untuk ECU Balap & PDM" },
    ],
    features: [
      {
        number: "01",
        title: "TAHAN GUNCANGAN G-FORCE LATERAL",
        description:
          "Saat drifting pada kecepatan tinggi dengan transisi arah yang cepat, braket kokoh RFK menjaga tabung tetap terkunci aman tanpa bergeser.",
      },
      {
        number: "02",
        title: "REDAM PANAS TURBOCHARGER SEKETIKA",
        description:
          "Semprotan gas cair Hartindo AF11E menyerap panas secara cepat di sekitar rumah turbo dan manifold knalpot untuk memutus segitiga api.",
      },
      {
        number: "03",
        title: "MESIN MUDAH DIPERIKSA KEMBALI",
        description:
          "Tanpa kerak serbuk kimia yang lengket dan menyumbat sela mesin, kru Garasi Drift dapat segera memeriksa kondisi mesin dan bersiap kembali ke lintasan.",
      },
      {
        number: "04",
        title: "AKSES MUDAH DARI POSISI PENGEMUDI",
        description:
          "Dipasang dalam jangkauan tangan pengemudi saat duduk di jok balap dengan sabuk pengaman 6-titik terkunci rapat, memastikan respons cepat saat darurat.",
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
      title: "Konfigurasi Pemasangan Proteksi RFK pada Driftbull",
      points: [
        {
          location: "Roll Cage Kabin Samping Pengemudi",
          description:
            "Tabung RFK 2.0 KG terpasang kokoh pada roll cage interior Driftbull dan dapat diraih oleh drifter maupun navigator dalam waktu kurang dari 2 detik.",
        },
        {
          location: "Braket Heavy Duty",
          description:
            "Menggunakan material berkekuatan tinggi yang dirancang menahan entakan keras saat benturan ban, getaran limiter RPM tinggi, dan suspensi balap yang kaku.",
        },
        {
          location: "Jalur Pipa Nosel Ruang Mesin",
          description:
            "Sistem nosel diarahkan langsung ke area rawan kebakaran seperti turbocharger, exhaust manifold, dan saluran distribusi bahan bakar balap.",
        },
        {
          location: "Pin Pengaman Lepas Cepat Ergonomis",
          description:
            "Pin pengaman dilengkapi tali penarik berwarna mencolok agar mudah dilepas meski pengemudi mengenakan sarung tangan balap tebal.",
        },
      ],
    },
    gallery: [
      {
        src: "/assets/driftbull/driftbull-1.jpg",
        title: "Pemasangan Tabung RFK pada Roll Cage",
        caption:
          "Integrasi tabung pemadam RFK pada roll cage Driftbull untuk menjaga kesiapan proteksi kebakaran di setiap sesi tandem balap.",
        tag: "01 / DUDUKAN ROLL CAGE",
      },
      {
        src: "/assets/driftbull/driftbull-2.jpg",
        title: "Braket Presisi Tahan G-Force Drift",
        caption:
          "Detail braket dudukan kokoh yang mengikat tabung dengan presisi tinggi, tahan terhadap entakan lateral dan getaran sasis yang keras.",
        tag: "02 / BRAKET HEAVY DUTY",
      },
      {
        src: "/assets/driftbull/driftbull-3.jpg",
        title: "Integrasi Kokpit Balap",
        caption:
          "Tampilan kabin kompetisi Garasi Drift dengan tabung RFK terpasang rapi berdampingan bersama jok balap dan setir kompetisi.",
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

