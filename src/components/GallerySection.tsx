import { useEffect, useRef, useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
              onClick={() => setSelectedImage(galleryImages[0].src)}
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
                onClick={() => setSelectedImage(image.src)}
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
                onClick={() => setSelectedImage(image.src)}
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-card/20 hover:bg-card/40 rounded-full flex items-center justify-center text-primary-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Luk billede"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Forstørret billede"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
