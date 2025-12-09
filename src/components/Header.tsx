import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#om-os", label: "Om os" },
    { href: "#services", label: "Services" },
    { href: "#billeder", label: "Billeder" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-xl md:text-2xl font-bold transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          } hover:text-primary`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Bjarne Fra Ellegården
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`font-medium transition-colors relative group ${
                isScrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? "bg-primary" : "bg-primary-foreground"
              }`} />
            </button>
          ))}
          <a href="tel:+4524429676">
            <Button variant={isScrolled ? "default" : "heroOutline"} size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Ring nu
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-medium transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground/80 hover:text-primary font-medium py-3 px-4 text-left hover:bg-muted/50 rounded-xl transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+4524429676" className="mt-4 px-4">
            <Button variant="default" className="w-full gap-2">
              <Phone className="w-4 h-4" />
              Ring nu
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
