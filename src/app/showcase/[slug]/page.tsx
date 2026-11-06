import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowcaseDetailView from "@/components/ShowcaseDetailView";
import { SHOWCASES, getShowcaseBySlug } from "@/data/showcaseData";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SHOWCASES.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getShowcaseBySlug(params.slug);

  if (!item) {
    return {
      title: "Showcase Tidak Ditemukan | Racing Fire Killer",
      description: "Halaman showcase instalasi sistem proteksi Racing Fire Killer.",
    };
  }

  return {
    title: `${item.title} - Showcase Instalasi RFK | Racing Fire Killer`,
    description: item.overview,
    openGraph: {
      title: `${item.title} - Fire Suppression System Instalasi RFK`,
      description: item.cardSummary,
      images: [
        {
          url: item.coverImage,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
  };
}

export default function ShowcaseDetailPage({ params }: PageProps) {
  const item = getShowcaseBySlug(params.slug);

  if (!item) {
    notFound();
  }

  // Find the other showcase to recommend
  const otherShowcase = SHOWCASES.find((s) => s.slug !== item.slug) || SHOWCASES[0];

  return (
    <div className="flex flex-col min-h-screen bg-rfk-black text-rfk-white">
      <Navbar />
      <main className="flex-1">
        <ShowcaseDetailView item={item} otherShowcase={otherShowcase} />
      </main>
      <Footer />
    </div>
  );
}

