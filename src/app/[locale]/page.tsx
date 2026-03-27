import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductTicker from "@/components/sections/ProductTicker";
import AboutSection from "@/components/sections/AboutSection";
import ValueProposition from "@/components/sections/ValueProposition";
import ProductsSection from "@/components/sections/ProductsSection";
import GlobalReach from "@/components/sections/GlobalReach";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductTicker />
        <AboutSection />
        <ValueProposition />
        <ProductsSection />
        <GlobalReach />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
