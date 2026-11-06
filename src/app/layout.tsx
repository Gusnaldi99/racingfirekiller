import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020202",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Racing Fire Killer | Sistem Pemadam Mobil Balap & Modifikasi",
  description:
    "RFK menghadirkan Hartindo AF11E 1 KG, 2 KG, dan 4 KG untuk sistem pemadam otomatis kendaraan motorsport. Formula non-konduktif, tanpa residu, respons 10 detik, dan garansi 5 tahun.",
  keywords: [
    "racing fire killer",
    "APAR mobil balap",
    "pemadam api motorsport",
    "Hartindo AF11E",
    "automatic suppression system",
    "clean agent fire extinguisher",
    "APAR tanpa residu",
    "fire safety mobil modifikasi",
  ],
  authors: [{ name: "Racing Fire Killer" }],
  creator: "PT. Famindo Alfa Spektrum Teknologi",
  publisher: "Racing Fire Killer",
  metadataBase: new URL("https://www.racingfirekiller.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.racingfirekiller.com/",
    title: "Racing Fire Killer | Sistem Pemadam Mobil Balap & Modifikasi",
    description:
      "Sistem pemadam otomatis dan tabung performa tinggi untuk mobil balap dan modifikasi. Formula non-konduktif, tanpa residu, dan respons cepat 10 detik.",
    siteName: "Racing Fire Killer",
    images: [
      {
        url: "/assets/logo/rfk-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Racing Fire Killer Automotive Fire Safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Racing Fire Killer | Sistem Pemadam Mobil Balap & Modifikasi",
    description:
      "Perlindungan kebakaran motorsport dengan formula Hartindo AF11E non-konduktif & tanpa residu.",
    images: ["/assets/logo/rfk-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.racingfirekiller.com/#organization",
        name: "Racing Fire Killer",
        url: "https://www.racingfirekiller.com",
        logo: "https://www.racingfirekiller.com/assets/logo/rfk-logo-white.png",
        description:
          "Sistem pemadam kebakaran otomotif dan motorsport performa tinggi berteknologi Hartindo AF11E.",
        parentOrganization: {
          "@type": "Organization",
          name: "PT. Famindo Alfa Spektrum Teknologi (FAST)",
        },
      },
      {
        "@type": "Product",
        "@id": "https://www.racingfirekiller.com/#product-af11e",
        name: "Racing Fire Killer Hartindo AF11E",
        description:
          "Tabung pemadam kebakaran gas bersih bersertifikasi EN3 dan CE untuk ruang mesin dan kabin mobil balap.",
        brand: {
          "@type": "Brand",
          name: "Racing Fire Killer",
        },
      },
    ],
  };

  return (
    <html lang="id" className={`${barlowCondensed.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-rfk-black text-rfk-white min-h-screen antialiased selection:bg-rfk-red selection:text-rfk-white">
        {children}
      </body>
    </html>
  );
}
