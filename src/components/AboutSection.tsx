import { useEffect, useRef, useState } from "react";
import { Leaf, Users, Award } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.png";

const AboutSection = () => {
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

  return (
    <section
      id="om-os"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-muted/40 -skew-x-12 origin-top-left" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Image Column - Offset position */}
          <div className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="relative lg:-mt-16">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-secondary/30 rounded-2xl transform -rotate-3" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl transform rotate-2" />
              
              <img
                src={aboutTeamImage}
                alt="Bjarne og teamet fra Ellegården"
                className="relative w-full rounded-xl shadow-medium object-cover aspect-[4/5]"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-medium">
                <span className="block text-3xl font-serif font-bold">Læsø</span>
                <span className="text-sm opacity-80">Din lokale partner</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`lg:col-span-7 lg:pl-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-16 bg-secondary" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Om os</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              Vi kender 
              <span className="text-secondary"> hver en krog</span>
              <span className="block">af Læsø</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Hos Bjarne Fra Ellegården tilbyder vi professionelt havearbejde og anlægstjenester til både private og erhverv. Med mange års erfaring er vi din pålidelige partner til alt fra den daglige vedligeholdelse til større anlægsprojekter.
              </p>
              <p>
                Vi arbejder <strong className="text-foreground">udelukkende på Læsø</strong> og kender de lokale forhold, naturen og jorden. Det betyder praktisk, ærlig rådgivning og løsninger der rent faktisk fungerer.
              </p>
            </div>

            {/* Features - Horizontal layout */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Leaf, label: "Lokalt kendskab" },
                { icon: Users, label: "Personlig service" },
                { icon: Award, label: "Års erfaring" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="group text-center p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
