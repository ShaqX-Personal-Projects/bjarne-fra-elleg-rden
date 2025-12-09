import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import gallery images
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";

const galleryImages = [
  { src: gallery2, alt: "Skovrydning og træfældning" },
  { src: gallery4, alt: "Professionel træfældning" },
  { src: gallery5, alt: "Teamet ved flismaskinen" },
  { src: gallery7, alt: "Hækklipning og buskrydning" },
  { src: gallery3, alt: "Arbejde med lift" },
  { src: gallery6, alt: "Læsø natur" },
  { src: gallery1, alt: "Anlægsarbejde" },
];

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  }, [selectedIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  return (
    <>
      <section
        id="billeder"
        ref={sectionRef}
        className="py-24 md:py-32 relative overflow-hidden"
      >
        {/* Decorative diagonal line */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-secondary to-transparent" />
        
        <div className="container mx-auto">
          {/* Header - Offset design */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className={`lg:col-span-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-secondary" />
                <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Galleri</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Se vores
                <span className="block text-secondary">arbejde</span>
              </h2>
            </div>
            <div className={`lg:col-span-5 lg:col-start-8 flex items-end transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <p className="text-lg text-muted-foreground">
                Eksempler på vores arbejde, maskiner og resultater fra hele Læsø. Klik på et billede for at forstørre.
              </p>
            </div>
          </div>

          {/* Gallery - Creative asymmetric layout */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large image - spans 8 columns */}
            <div
              className={`col-span-12 md:col-span-8 row-span-2 cursor-pointer group transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onClick={() => setSelectedIndex(0)}
            >
              <div className="relative h-full min-h-[300px] md:min-h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block bg-card text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {galleryImages[0].alt}
                  </span>
                </div>
              </div>
            </div>

            {/* Right column - 2 stacked images */}
            {galleryImages.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className={`col-span-6 md:col-span-4 cursor-pointer group transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                onClick={() => setSelectedIndex(index + 1)}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
              </div>
            ))}

            {/* Bottom row - 4 images */}
            {galleryImages.slice(3).map((image, index) => (
              <div
                key={index + 3}
                className={`col-span-6 md:col-span-3 cursor-pointer group transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                onClick={() => setSelectedIndex(index + 3)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with swipe support */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button - positioned outside image area */}
          <button
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-card hover:bg-card/80 rounded-full flex items-center justify-center text-foreground transition-colors shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Luk billede"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-card hover:bg-card/80 rounded-full flex items-center justify-center text-foreground transition-colors shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Forrige billede"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-card hover:bg-card/80 rounded-full flex items-center justify-center text-foreground transition-colors shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Næste billede"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div className="relative max-w-[85vw] max-h-[80vh] mx-16">
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Image caption */}
            <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/80 text-sm whitespace-nowrap">
              {galleryImages[selectedIndex].alt} • {selectedIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
