import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Bjarne Fra Ellegården
            </h3>
            <p className="text-background/70 mb-4">
              Professionelt havearbejde og anlæg på Læsø. Vi hjælper private og erhverv med alt fra vedligeholdelse til store projekter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hurtige links</h4>
            <nav className="space-y-2">
              {[
                { href: "#om-os", label: "Om os" },
                { href: "#services", label: "Services" },
                { href: "#billeder", label: "Billeder" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=Ellegårdsvej+2A,+9940+Læsø"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Ellegårdsvej 2A, 9940 Læsø</span>
              </a>
              <a
                href="mailto:Christensen@live.dk"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>Christensen@live.dk</span>
              </a>
              <a
                href="tel:+4524429676"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+45 24 42 96 76</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/50 text-sm">
            © {currentYear} Bjarne Fra Ellegården. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
