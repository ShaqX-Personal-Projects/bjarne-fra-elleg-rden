import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Placeholder images - these would be replaced with actual project photos
  const placeholders = Array(6).fill(null);

  return (
    <section
      id="billeder"
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Vores arbejde
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Billeder
          </h2>
          <p className="text-lg text-muted-foreground">
            Se eksempler på vores arbejde, maskiner og resultater. Her får du et indblik i, hvordan vi kan hjælpe din have eller grund på Læsø.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className={`aspect-[4/3] bg-muted rounded-xl overflow-hidden relative group transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                <span className="text-sm opacity-50">Billede {index + 1}</span>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Kontakt os for at se flere eksempler på vores arbejde.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
