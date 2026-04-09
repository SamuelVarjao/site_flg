/*
 * Home — FLG de Cortes e Vinco
 * Landing page completa com todas as seções
 * Design: Precision Craft — Modernismo Construtivista
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyFLGSection from "@/components/sections/WhyFLGSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyFLGSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
