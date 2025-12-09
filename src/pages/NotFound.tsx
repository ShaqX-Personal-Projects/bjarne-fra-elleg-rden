import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          {/* Large 404 number */}
          <div className="relative mb-8">
            <span className="text-[12rem] md:text-[16rem] font-serif font-bold text-muted/20 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <Home className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Siden blev ikke fundet
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Beklager, den side du leder efter findes ikke. Måske er den blevet flyttet eller slettet.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Tilbage til forsiden
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2" onClick={() => window.history.back()}>
              <button type="button" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
                Gå tilbage
              </button>
            </Button>
          </div>
          
          {/* Contact info */}
          <p className="mt-12 text-sm text-muted-foreground">
            Har du brug for hjælp?{" "}
            <a href="/#kontakt" className="text-primary hover:underline">
              Kontakt os
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;