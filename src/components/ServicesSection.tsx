import { useEffect, useRef, useState } from "react";
import {
  Scissors,
  TreeDeciduous,
  Recycle,
  Tractor,
  Home,
  Trees,
  Wrench,
  Flame,
  CircleDot,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: "Græsslåning og buskrydning",
    description: "Løbende vedligeholdelse af græsplæner, kanter og beplantning for et pænt og velholdt udendørsområde.",
    featured: true,
  },
  {
    icon: TreeDeciduous,
    title: "Anlægsgartnerarbejde",
    description: "Plantning og omplantning af træer samt professionel træfældning – fra mindre opgaver til større anlæg.",
    featured: true,
  },
  {
    icon: Recycle,
    title: "Flisning af træer",
    description: "Effektiv og miljøvenlig flisning af træer til brug i haven eller andre udendørsområder.",
  },
  {
    icon: Tractor,
    title: "Salg af brugte havetraktorer",
    description: "Kvalitets havetraktorer til en god pris – ideelle til dig, der selv vil stå for en del af havearbejdet.",
  },
  {
    icon: Home,
    title: "Tagrende- og terrasse-rensning",
    description: "Grundig rensning af tagrender og terrasser, så dit hjem fremstår rent, pænt og funktionelt.",
  },
  {
    icon: Trees,
    title: "Skovrydning og haveaffald",
    description: "Vi klarer skovrydning, oprydning og bortkørsel af haveaffald, så du slipper for det tunge arbejde.",
    featured: true,
  },
  {
    icon: Wrench,
    title: "Slagleklipning og stennedlægningsfræsning",
    description: "Specialarbejde udført med det rette udstyr og høj præcision.",
  },
  {
    icon: Flame,
    title: "Salg af brændesække og flis",
    description: "Kvalitets brænde og flis – perfekt til opvarmning og brug i haven.",
  },
  {
    icon: CircleDot,
    title: "Stubfræsning",
    description: "Effektiv fjernelse af træstubbe, så du får et pænt og plant underlag.",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Header - Left aligned */}
        <div className={`max-w-2xl mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-secondary" />
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Services</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Alt det vi
            <span className="text-secondary"> kan hjælpe</span>
            <span className="block">dig med</span>
          </h2>
          <p className="text-xl text-primary-foreground/70">
            Fra daglig vedligeholdelse til store anlægsprojekter – vi har udstyret og erfaringen.
          </p>
        </div>

        {/* All Services - Uniform grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-secondary transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
