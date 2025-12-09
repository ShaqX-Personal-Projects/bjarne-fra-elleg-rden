import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <article>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <GallerySection />
          <ContactSection />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
