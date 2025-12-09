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
  category: "vedligeholdelse" | "anlæg" | "salg";
}

const services: Service[] = [
  {
    icon: Scissors,
    title: "Græsslåning og buskrydning",
    description: "Løbende vedligeholdelse af græsplæner, kanter og beplantning for et pænt og velholdt udendørsområde.",
    category: "vedligeholdelse",
  },
  {
    icon: TreeDeciduous,
    title: "Anlægsgartnerarbejde",
    description: "Plantning og omplantning af træer samt professionel træfældning – fra mindre opgaver til større anlæg.",
    category: "anlæg",
  },
  {
    icon: Recycle,
    title: "Flisning af træer",
    description: "Effektiv og miljøvenlig flisning af træer til brug i haven eller andre udendørsområder.",
    category: "anlæg",
  },
  {
    icon: Tractor,
    title: "Salg af brugte havetraktorer",
    description: "Kvalitets havetraktorer til en god pris – ideelle til dig, der selv vil stå for en del af havearbejdet.",
    category: "salg",
  },
  {
    icon: Home,
    title: "Tagrende- og terrasse-rensning",
    description: "Grundig rensning af tagrender og terrasser, så dit hjem fremstår rent, pænt og funktionelt.",
    category: "vedligeholdelse",
  },
  {
    icon: Trees,
    title: "Skovrydning og haveaffald",
    description: "Vi klarer skovrydning, oprydning og bortkørsel af haveaffald, så du slipper for det tunge arbejde.",
    category: "anlæg",
  },
  {
    icon: Wrench,
    title: "Slagleklipning og stennedlægningsfræsning",
    description: "Specialarbejde udført med det rette udstyr og høj præcision.",
    category: "anlæg",
  },
  {
    icon: Flame,
    title: "Salg af brændesække og flis",
    description: "Kvalitets brænde og flis – perfekt til opvarmning og brug i haven.",
    category: "salg",
  },
  {
    icon: CircleDot,
    title: "Stubfræsning",
    description: "Effektiv fjernelse af træstubbe, så du får et pænt og plant underlag.",
    category: "anlæg",
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
      className="py-20 md:py-28 bg-muted/30"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Vores ydelser
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Fra daglig vedligeholdelse til store anlægsprojekter – vi har udstyret og erfaringen til at løse opgaven.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-medium transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
