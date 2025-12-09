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
  { src: gallery2, alt: "Skovrydning og træfældning på Læsø" },
  { src: gallery4, alt: "Professionel træfældning med sikkerhedsudstyr" },
  { src: gallery5, alt: "Teamet ved flismaskinen på en ejendom" },
  { src: gallery7, alt: "Hækklipning og buskrydning" },
  { src: gallery3, alt: "Arbejde med lift ved hus" },
  { src: gallery6, alt: "Læsø natur og træer" },
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

          {/* Gallery Grid - Masonry-like layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-xl cursor-pointer group transition-all duration-500 ${
                  index === 0 || index === 3 ? "md:row-span-2" : ""
                } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className={`relative w-full h-full ${
                  index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-primary-foreground text-sm font-medium bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Luk billede"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Forstørret billede"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
