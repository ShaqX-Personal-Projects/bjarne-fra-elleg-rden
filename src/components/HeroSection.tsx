import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.png";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0 z-0 bg-primary/20">
        <img
          src={heroImage}
          alt="Smuk have på Læsø"
          className={`w-full h-full object-cover object-[center_70%] transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left content - takes 7 columns */}
            <div className="lg:col-span-7 pt-24 pb-16 lg:py-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6 animate-fade-in-up opacity-0">
                <MapPin className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Kun på Læsø</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up opacity-0 stagger-1">
                Havearbejde
                <span className="block text-secondary mt-2">& anlæg</span>
                <span className="block text-primary-foreground/80 text-3xl sm:text-4xl md:text-5xl mt-4">på Læsø</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-fade-in-up opacity-0 stagger-2">
                Professionel hjælp til have, skov og udearealer. Vi kender øen, jorden og naturen – og leverer løsninger der virker.
              </p>

              {/* CTA Buttons - Stacked asymmetrically */}
              <div className="flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0 stagger-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => scrollToSection("#services")}
                  className="bg-primary text-primary-foreground"
                >
                  Se vores services
                </Button>
                <a href="tel:+4524429676" className="group flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors">
                  <div className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs uppercase tracking-wider opacity-70">Ring til os</span>
                    <span className="block font-semibold">+45 24 42 96 76</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - Floating card */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in-up opacity-0 stagger-4">
              <div className="relative">
                {/* Decorative shape behind */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
                
                {/* Stats card */}
                <div className="relative bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-medium border border-border/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Bjarne Fra Ellegården</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🌳</span>
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">Erfaring</span>
                        <span className="font-semibold text-foreground">Mange års ekspertise</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🏡</span>
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">Kundetype</span>
                        <span className="font-semibold text-foreground">Private & erhverv</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">Område</span>
                        <span className="font-semibold text-foreground">Hele Læsø</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
