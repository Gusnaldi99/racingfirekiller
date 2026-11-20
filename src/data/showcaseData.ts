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
    subtitle: "SEMA Show International Motorsport Build",
    heroHeadline: "STANDAR PROTEKSI KELAS DUNIA UNTUK MAHAKARYA SEMA SHOW.",
    badge: "SEMA SHOW BUILD / INTERNATIONAL SPEC",
    tagline: "Proteksi Bersih Tanpa Kompromi untuk Mobil Balap dan Modifikasi Bergengsi",
    coverImage: "/assets/passato/bmw-sema-1.jpg",
    overview:
      "BMW Passato merupakan mahakarya modifikasi dan motorsport berstandar internasional yang tampil di ajang bergengsi SEMA Show Las Vegas. Menghadapi standar scrutineering internasional dan tuntutan estetika tanpa cela, BMW Passato mempercayakan perlindungan kebakaran kepada Racing Fire Killer (RFK) dengan sistem gas bersih Hartindo AF11E dan braket motorsport presisi.",
    cardSummary:
      "Mobil modifikasi motorsport internasional yang tampil di ajang SEMA Show Las Vegas. Dilengkapi sistem proteksi RFK dengan braket motorsport kokoh dan formula gas bersih non-residu untuk menjaga integritas mesin performa tinggi.",
    categoryTag: "INTERNATIONAL MOTORSPORT BUILD",
    carSpecs: [
      { label: "Platform Mobil", value: "BMW M Performance Chassis" },
      { label: "Panggung Internasional", value: "SEMA Show Exhibition" },
      { label: "Peruntukan", value: "Track & International Motorsport Showcase" },
      { label: "Struktur Kokpit", value: "Full FIA Spec Roll Cage" },
      { label: "Sistem Bahan Bakar", value: "High-Pressure Motorsport Fuel System" },
      { label: "Manajemen Mesin", value: "Standalone Motorsport ECU & Mil-Spec Harness" },
    ],
    rfkSystemSpecs: [
      { label: "Sistem Pemadam", value: "RFK Active Suppression System & Manual Cockpit Canister" },
      { label: "Media Pemadam", value: "Hartindo AF11E (Clean Agent Liquid Gas)" },
      { label: "Kapasitas Tabung", value: "RFK 2.0 KG Motorsport Spec" },
      { label: "Tekanan Kerja", value: "14 Bar (Uji Tekanan Hidrolik 27 Bar)" },
      { label: "Tipe Braket", value: "Heavy-Duty Motorsport Mounting Bracket" },
      { label: "Zona Proteksi", value: "Engine Bay (Turbo & Manifold), Kokpit Pengemudi" },
      { label: "Waktu Padam Rata-rata", value: "< 10 Detik Pelepasan Efektif" },
      { label: "Karakteristik Residu", value: "100% Non-Residu, Non-Konduktif, Tidak Merusak Komponen" },
    ],
    features: [
      {
        number: "01",
        title: "ZERO RESIDUE CLEAN AGENT",
        description:
          "Hartindo AF11E menguap secara bersih tanpa meninggalkan endapan serbuk kimia korosif. Komponen titanium, aluminium presisi, dan sensor mesin kustom tetap steril dan terlindungi utuh.",
      },
      {
        number: "02",
        title: "HEAVY-DUTY MOTORSPORT MOUNTING",
        description:
          "Braket motorsport mengunci tabung kokoh di kabin kendaraan. Mekanisme pin pengaman memungkinkan akses darurat instan dalam hitungan detik saat situasi darurat.",
      },
      {
        number: "03",
        title: "NON-KONDUKTIF UNTUK WIRING MIL-SPEC",
        description:
          "Sifat dielektrik tinggi mencegah risiko korsleting pada PDM, instrumen display balap digital, dan harness kabel motorsport bertegangan tinggi.",
      },
      {
        number: "04",
        title: "DISTRIBUSI NOZZLE ENGINE BAY",
        description:
          "Nozzle stainless steel motorsport dirutekan mengarah ke titik kritis panas turbocharger dan fuel rail untuk meredam kebakaran sebelum merambat ke kabin.",
      },
    ],
    whyRfk: {
      heading: "Mengapa BMW Passato Memilih Racing Fire Killer?",
      paragraphs: [
        "Membangun mobil untuk panggung dunia seperti SEMA Show menuntut kesempurnaan di setiap detail komponen. Ketika ratusan juta hingga miliaran rupiah diinvestasikan untuk mesin balap kustom, sistem kabel berstandar militer, dan komponen aerodinamis serat karbon, risiko kebakaran bukan sesuatu yang bisa diabaikan.",
        "Penggunaan APAR bubuk kimia (dry chemical powder) konvensional adalah mimpi buruk bagi mobil performa tinggi. Sekali disemprotkan, debu asam powder akan meleleh ke sela silinder mesin panas, menyumbat filter udara, dan mengikis konektor kelistrikan hingga menyebabkan kerusakan permanen (total engine loss).",
        "Racing Fire Killer hadir sebagai jawaban mutlak. Ditenagai formulasi gas cair bersih Hartindo AF11E, RFK mematikan api dalam hitungan 10 detik dengan cara memotong reaksi rantai pembakaran secara termal dan kimiawi. Gas ini menguap seketika tanpa noda, tanpa korosi, dan tanpa risiko korsleting, menjaga mahakarya BMW Passato tetap berada di puncak performa dan keamanan.",
      ],
      callout:
        "Bagi para builder dan pemilik mobil performa tinggi, RFK bukan sekadar alat pemadam, melainkan investasi proteksi terbaik untuk melindungi karya otomotif bernilai tinggi.",
    },
    installationHighlights: {
      title: "Detail Konfigurasi Pemasangan RFK pada BMW Passato",
      points: [
        {
          location: "Kabin & Roll Cage Bar",
          description:
            "Tabung RFK 2.0 KG ditempatkan di posisi ergonomis pada palang roll cage samping pengemudi. Mudah diraih dengan sarung tangan balap tebal dan dilengkapi pin pengaman berwarna merah kontras.",
        },
        {
          location: "Braket Kokoh Motorsport",
          description:
            "Dudukan braket presisi tinggi dirancang khusus menahan getaran frekuensi tinggi saat mobil melaju kencang di sirkuit tanpa ada celah goyang atau getar.",
        },
        {
          location: "Kompartemen Mesin (Engine Bay)",
          description:
            "Jalur pemadaman diarahkan ke area turbocharger bersuhu tinggi dan sambungan saluran bahan bakar bertekanan tinggi untuk respon redam langsung.",
        },
        {
          location: "Panel Manometer Presisi",
          description:
            "Indikator tekanan terpasang menghadap ke arah pandang mekanik dan pengemudi untuk inspeksi cepat sebelum mobil turun ke lintasan atau panggung pameran.",
        },
      ],
    },
    gallery: [
      {
        src: "/assets/passato/bmw-sema-1.jpg",
        title: "Tampilan Penuh BMW Passato",
        caption:
          "Postur agresif BMW Passato di ajang motorsport internasional dengan integrasi aerodinamika lebar dan standar keselamatan profesional.",
        tag: "01 / EXTERIOR & AERO",
      },
      {
        src: "/assets/passato/bmw-sema-2.jpg",
        title: "Integrasi Tabung pada Kokpit & Roll Cage",
        caption:
          "Penempatan tabung RFK pada pipa roll cage kabin yang presisi, memberikan akses instan bagi pengemudi tanpa mengganggu visibilitas lintasan.",
        tag: "02 / COCKPIT INTEGRATION",
      },
      {
        src: "/assets/passato/bmw-sema-3.jpg",
        title: "Detail Braket Dudukan Tabung",
        caption:
          "Braket kokoh yang mencengkeram kuat tabung RFK, tahan getaran guncangan ekstrem sirkuit.",
        tag: "03 / CANISTER MOUNTING",
      },
      {
        src: "/assets/passato/bmw-sema-4.jpg",
        title: "Proteksi Area Ruang Mesin & Turbo",
        caption:
          "Kompartemen mesin bertenaga tinggi dengan perlindungan terarah untuk meredam potensi bahaya panas manifold dan sistem induksi udara.",
        tag: "04 / ENGINE BAY SUPPRESSION",
      },
      {
        src: "/assets/passato/bmw-sema-5.jpg",
        title: "Track Stance & Siap Lintasan",
        caption:
          "Teruji pada pengujian ketat lintasan sirkuit dan pameran kelas dunia, membuktikan keselamatan dan estetika dapat berjalan berdampingan.",
        tag: "05 / TRACK READY",
      },
    ],
    testimonialOrQuote: {
      quote:
        "Pada level modifikasi motorsport tertinggi, estetika dan keselamatan harus berada di level yang sama. RFK memberikan perlindungan pemadaman terbersih tanpa merusak ruang mesin bernilai tinggi.",
      author: "Passato Motorsport Engineering",
      role: "International Automotive Builder",
    },
    whatsappMessage:
      "Halo Tim Racing Fire Killer, saya tertarik dengan sistem fire suppression motorsport seperti yang terpasang pada BMW Passato. Saya ingin konsultasi untuk mobil saya.",
  },
  {
    slug: "driftbull-garasi-drift",
    title: "Driftbull - Garasi Drift",
    subtitle: "Professional Drift Competition Machine",
    heroHeadline: "PERLINDUNGAN PEMADAM AKTIF DI ARENA DRIFTING PALING EKSTREM.",
    badge: "GARASI DRIFT / PRO DRIFT MACHINE",
    tagline: "Dipercaya Tim Garasi Drift untuk Menjinakkan Risiko Panas Ekstrem Lintasan Drift",
    coverImage: "/assets/driftbull/driftbull-1.jpg",
    overview:
      "Driftbull adalah mobil kompetisi drifting profesional legendaris milik Garasi Drift (Ziko Harnadi & Dipo Dwiki). Di arena drifting profesional, mesin dipaksa bekerja pada putaran RPM tinggi secara konstan dengan sudut kemiringan ekstrem dan hembusan panas knalpot yang mencapai ratusan derajat Celsius. Garasi Drift memilih Racing Fire Killer (RFK) sebagai garda terdepan sistem pemadam kebakaran aktif untuk melindungi pengemudi dan mesin buas Driftbull.",
    cardSummary:
      "Mobil drift kompetisi ikonik Garasi Drift yang menghadapi temperatur mesin ekstrem dan guncangan RPM tinggi. Mengandalkan sistem RFK untuk perlindungan instan tanpa meninggalkan residu serbuk kimia korosif.",
    categoryTag: "PRO DRIFT CHAMPIONSHIP",
    carSpecs: [
      { label: "Nama Mobil", value: "Driftbull by Garasi Drift" },
      { label: "Tim Balap", value: "Garasi Drift Motorsport Team" },
      { label: "Disiplin Motorsport", value: "Professional Drifting / Tandem Battle" },
      { label: "Konfigurasi Mesin", value: "High-Boost Turbocharged Competition Engine" },
      { label: "Sistem Kemudi & Sudut", value: "Pro Drift Angle Kit & Hydraulic Handbrake" },
      { label: "Kabin & Safety", value: "Full Roll Cage FIA Spec & Firewall Sealing" },
    ],
    rfkSystemSpecs: [
      { label: "Sistem Pemadam", value: "RFK Active Fire Suppression System" },
      { label: "Media Pemadam", value: "Hartindo AF11E Clean Agent" },
      { label: "Kapasitas Tabung", value: "RFK 2.0 KG Motorsport Competition Spec" },
      { label: "Tekanan Kerja", value: "14 Bar Standar Kerja Presisi" },
      { label: "Tipe Braket", value: "Heavy-Duty Motorsport Mounting Bracket" },
      { label: "Cakupan Zona", value: "Ruang Mesin, Jalur Turbocharger, Kompartemen Kokpit" },
      { label: "Waktu Respon", value: "Pemadaman Seketika Rata-rata 10 Detik" },
      { label: "Dampak Kelistrikan", value: "Non-Konduktif, Aman untuk ECU Balap & PDM" },
    ],
    features: [
      {
        number: "01",
        title: "TAHAN GUNCANGAN G-FORCE LATERAL",
        description:
          "Saat drifting dengan kecepatan tinggi dan transisi arah yang brutal, braket kokoh RFK menjaga tabung tetap terkunci aman tanpa bergeser sedikit pun.",
      },
      {
        number: "02",
        title: "REDAM PANAS TURBOCHARGER SEKETIKA",
        description:
          "Aliran gas cair Hartindo AF11E menyerap panas secara cepat di sekitar rumah keong turbo dan manifold knalpot membara, memutus segitiga api seketika.",
      },
      {
        number: "03",
        title: "MOBIL LANGSUNG BISA INSPEKSI KEMBALI",
        description:
          "Tanpa kerak bubuk powder yang lengket dan merusak sela mesin, kru Garasi Drift dapat segera melakukan inspeksi mesin dan turun kembali ke lintasan.",
      },
      {
        number: "04",
        title: "AKSES MUDAH DARI POSISI PENGEMUDI",
        description:
          "Dipasang dalam jangkauan tangan pengemudi saat duduk di bucket seat dengan sabuk pengaman 6-titik terkunci rapat, menjamin reaksi kilat saat darurat.",
      },
    ],
    whyRfk: {
      heading: "Mengapa Garasi Drift Mempercayakan Driftbull kepada RFK?",
      paragraphs: [
        "Drifting adalah salah satu cabang motorsport yang paling menuntut ketahanan mesin dan komponen. Mobil melaju menyamping dengan kecepatan tinggi, roda belakang berputar menghasilkan kepulan asap tebal, sementara aliran udara pendingin dari depan sangat terbatas karena mobil melaju miring.",
        "Kondisi ini membuat suhu ruang mesin melonjak drastis hingga lebih dari 850°C pada manifold knalpot dan rumah turbocharger. Dengan tekanan bahan bakar balap yang sangat tinggi di sekitar mesin, kebocoran sekecil apa pun dapat memicu kobaran api seketika.",
        "Garasi Drift tidak mau mengambil risiko menggunakan APAR bubuk kimia biasa. Jika menggunakan bubuk powder konvensional, semprotan pemadam akan menghancurkan internal mesin turbo dan melumerkan soket kabel ECU mandiri, mengakibatkan kerusakan bernilai ratusan juta rupiah serta menghentikan langkah di kejuaraan.",
        "Dengan Racing Fire Killer, Driftbull mendapatkan proteksi kelas satu: gas bersih Hartindo AF11E mematikan api secara instan dalam hitungan detik pertama, menguap tanpa meninggalkan residu sedikit pun, dan bersifat non-konduktif sehingga seluruh sistem elektronika canggih Driftbull tetap aman.",
      ],
      callout:
        "Di lintasan drift kompetisi, rasa percaya diri pengemudi lahir dari jaminan keamanan mobil. RFK memberikan perlindungan maksimal agar drifter bisa menekan pedal gas hingga batas maksimal tanpa rasa waswas.",
    },
    installationHighlights: {
      title: "Konfigurasi Instalasi Proteksi RFK pada Driftbull",
      points: [
        {
          location: "Roll Cage Kabin Samping Pengemudi",
          description:
            "Tabung RFK 2.0 KG terpasang kokoh pada roll cage interior Driftbull, dapat diraih oleh drifter maupun navigator dalam waktu kurang dari 2 detik.",
        },
        {
          location: "Braket Heavy Duty",
          description:
            "Menggunakan material berkekuatan tinggi yang dirancang untuk menahan entakan keras saat benturan ban, getaran limiter RPM tinggi, dan hempasan suspensi kaku.",
        },
        {
          location: "Jalur Pipa Nozzle Ruang Mesin",
          description:
            "Sistem nozzle diarahkan langsung ke area rawan kebakaran seperti turbocharger, exhaust manifold, dan saluran distribusi bahan bakar balap.",
        },
        {
          location: "Safety Pin Quick Release Ergonomis",
          description:
            "Pin pengaman dilengkapi tali penarik mencolok sehingga dapat dilepas dengan mudah bahkan ketika pengemudi memakai sarung tangan balap tebal.",
        },
      ],
    },
    gallery: [
      {
        src: "/assets/driftbull/driftbull-1.jpg",
        title: "Pemasangan Tabung RFK pada Roll Cage",
        caption:
          "Integrasi tabung pemadam RFK pada roll cage Driftbull, menjamin kesiapan proteksi kebakaran di setiap sesi tandem balap.",
        tag: "01 / ROLL CAGE MOUNT",
      },
      {
        src: "/assets/driftbull/driftbull-2.jpg",
        title: "Braket Presisi Tahan G-Force Drift",
        caption:
          "Detail braket dudukan kokoh yang memegang tabung dengan presisi tinggi, tahan terhadap entakan lateral dan getaran sasis yang keras.",
        tag: "02 / HEAVY DUTY MOUNT",
      },
      {
        src: "/assets/driftbull/driftbull-3.jpg",
        title: "Kokpit Balap & Cockpit Integration",
        caption:
          "Suasana kabin kompetisi Garasi Drift di mana tabung RFK terintegrasi rapi berdampingan dengan bucket seat dan kemudi kompetisi.",
        tag: "03 / RACE COCKPIT",
      },
      {
        src: "/assets/driftbull/driftbull-4.jpg",
        title: "Postur Tangguh Driftbull Garasi Drift",
        caption:
          "Monster drift Driftbull karya Garasi Drift, siap menaklukkan aspal dengan sudut kemiringan tajam dan kecepatan tinggi.",
        tag: "04 / FULL STANCE",
      },
      {
        src: "/assets/driftbull/driftbull-5.jpg",
        title: "Siap Beraksi di Lintasan Sirkuit",
        caption:
          "Driftbull membuktikan bahwa mobil drift bertenaga buas wajib didukung oleh sistem keselamatan pemadam kebakaran motorsport terbaik.",
        tag: "05 / COMPETITION READY",
      },
    ],
    testimonialOrQuote: {
      quote:
        "Di arena drift profesional, temperatur mesin dan turbo bekerja di titik didih ekstrem. Racing Fire Killer memberi kami ketenangan penuh untuk gaspol maksimal di setiap clipping point tanpa rasa takut.",
      author: "Garasi Drift Motorsport",
      role: "Professional Drift Team & Automotive Creators",
    },
    whatsappMessage:
      "Halo Tim Racing Fire Killer, saya melihat instalasi RFK di Driftbull Garasi Drift dan tertarik memasang sistem fire suppression motorsport untuk mobil saya. Mohon informasinya.",
  },
];

export function getShowcaseBySlug(slug: string): ShowcaseItem | undefined {
  return SHOWCASES.find((item) => item.slug === slug);
}

