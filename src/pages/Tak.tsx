import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Tak = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Tak for din besked
        </h1>

        {/* Message */}
        <p className="text-lg text-muted-foreground mb-8">
          Vi har modtaget din henvendelse og vender tilbage så hurtigt som muligt.
        </p>

        {/* Back button */}
        <Button asChild variant="default" size="lg" className="gap-2">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Tilbage til forsiden
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default Tak;
