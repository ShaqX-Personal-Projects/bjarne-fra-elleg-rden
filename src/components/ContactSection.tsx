import { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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

  const contactItems = [
    {
      icon: MapPin,
      label: "Adresse",
      value: "Ellegårdsvej 2A, 9940 Læsø",
      href: "https://maps.google.com/?q=Ellegårdsvej+2A,+9940+Læsø",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "Christensen@live.dk",
      href: "mailto:Christensen@live.dk",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+45 24 42 96 76",
      href: "tel:+4524429676",
    },
    {
      icon: Clock,
      label: "Åbent",
      value: "Mandag - Søndag",
    },
  ];

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left side - Contact info */}
          <div className={`lg:col-span-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-secondary" />
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Kontakt</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Lad os
              <span className="block text-secondary">tale sammen</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Har du spørgsmål, ønsker et uforpligtende tilbud eller vil booke en opgave? Vi er altid klar til at hjælpe.
            </p>

            {/* Contact items */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`group transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Netlify Form */}
          <div className={`lg:col-span-6 lg:col-start-7 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-secondary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/10 rounded-2xl" />
              
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="relative bg-card border border-border rounded-2xl p-8 md:p-10 shadow-soft"
              >
                {/* Hidden field for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: 
                    <input name="bot-field" />
                  </label>
                </p>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
                  Send os en besked
                </h3>
                
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="navn" className="block text-sm font-medium text-foreground mb-2">
                        Navn *
                      </label>
                      <input
                        type="text"
                        id="navn"
                        name="navn"
                        required
                        className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="Dit navn"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="+45 XX XX XX XX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="din@email.dk"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="besked" className="block text-sm font-medium text-foreground mb-2">
                      Besked *
                    </label>
                    <textarea
                      id="besked"
                      name="besked"
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                      placeholder="Fortæl os, hvad vi kan hjælpe med..."
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full mt-6 gap-2"
                >
                  Send besked
                  <Send className="w-4 h-4" />
                </Button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Vi vender tilbage så hurtigt som muligt.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
