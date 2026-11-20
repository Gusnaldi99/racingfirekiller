import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ProductSection from "@/components/ProductSection";
import SystemSection from "@/components/SystemSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-rfk-black text-rfk-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhySection />
        <ProductSection />
        <SystemSection />
        <ShowcaseSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

