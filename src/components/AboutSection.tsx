import { useEffect, useRef, useState } from "react";
import { Leaf, Users, Award } from "lucide-react";

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

  const features = [
    {
      icon: Leaf,
      title: "Lokalt kendskab",
      description: "Vi kender Læsøs natur, jord og klima til bunds.",
    },
    {
      icon: Users,
      title: "Personlig service",
      description: "Ærlig rådgivning og løsninger der passer til dig.",
    },
    {
      icon: Award,
      title: "Erfaring",
      description: "Mange års erfaring med alle typer haveopgaver.",
    },
  ];

  return (
    <section
      id="om-os"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/30 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Om os
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Din lokale partner på Læsø
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hos Bjarne Fra Ellegården tilbyder vi professionelt havearbejde og anlægstjenester til både private og erhverv. Med mange års erfaring er vi din pålidelige partner til alt fra den daglige vedligeholdelse af din have til større anlægsprojekter.
              </p>
              <p>
                Vi arbejder udelukkende på Læsø og kender de lokale forhold, naturen og jorden. Det betyder, at du får praktisk, ærlig rådgivning og løsninger, der rent faktisk fungerer i din have eller på din grund.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className={`grid gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
