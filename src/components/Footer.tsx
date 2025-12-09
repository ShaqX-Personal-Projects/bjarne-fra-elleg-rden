import { forwardRef } from "react";
import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-foreground text-primary-foreground relative overflow-hidden" role="contentinfo">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary-foreground/10 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-secondary/10 via-transparent to-transparent" aria-hidden="true" />

      <div className="container mx-auto py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Bjarne Fra Ellegården
            </h2>
            <p className="text-primary-foreground/60 mb-6 max-w-sm">
              Professionelt havearbejde og anlæg på Læsø. Vi hjælper private og erhverv med alt fra vedligeholdelse til store projekter.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
              aria-label="Scroll tilbage til toppen af siden"
            >
              <div className="w-10 h-10 border border-primary-foreground/20 rounded-full flex items-center justify-center group-hover:border-primary-foreground/40 group-hover:bg-primary-foreground/5 transition-all">
                <ArrowUp className="w-4 h-4" aria-hidden="true" />
              </div>
              Tilbage til toppen
            </button>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6">Navigation</h3>
            <nav aria-label="Footer navigation" className="space-y-3">
              {[
                { href: "#om-os", label: "Om os" },
                { href: "#services", label: "Services" },
                { href: "#billeder", label: "Billeder" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-6">Kontakt</h3>
            <address className="space-y-4 not-italic">
              <a
                href="https://maps.google.com/?q=Ellegårdsvej+2A,+9940+Læsø"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Ellegårdsvej 2A<br />9940 Læsø</span>
              </a>
              <a
                href="mailto:Christensen@live.dk"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>Christensen@live.dk</span>
              </a>
              <a
                href="tel:+4524429676"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>+45 24 42 96 76</span>
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-primary-foreground/40 text-sm">
            © {currentYear} Bjarne Fra Ellegården. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
