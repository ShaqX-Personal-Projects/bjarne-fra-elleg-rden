import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin } from "lucide-react";
import heroImage from "@/assets/gallery/gallery-2.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Havearbejde på Læsø"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2521' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-8 animate-fade-in-up opacity-0 shadow-card">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Kun på Læsø</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 stagger-1">
            Alt inden for havearbejde og anlæg på Læsø
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-secondary font-medium mb-6 animate-fade-in-up opacity-0 stagger-2">
            Bjarne Fra Ellegården – professionel hjælp til have, skov og udearealer for både private og erhverv.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 stagger-3">
            Træd ind i vores univers, hvor haver blomstrer, og naturen får nyt liv. Vi hjælper dig med alt fra løbende vedligeholdelse til de tunge anlægsopgaver – kun på Læsø.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 stagger-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#services")}
            >
              Se vores services
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection("#kontakt")}
            >
              Kontakt Os
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 stagger-5">
          <button
            onClick={() => scrollToSection("#om-os")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll ned"
          >
            <span className="text-sm font-medium">Scroll ned</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
