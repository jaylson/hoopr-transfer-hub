import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-hoopr-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ContactSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
