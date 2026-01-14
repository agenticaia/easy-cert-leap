import { ArrowDown, TrendingDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-hero pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card shadow-soft px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Oferta exclusiva por tiempo limitado</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Migra a Girasol.pe y{" "}
            <span className="text-gradient">reduce tus costos a la mitad</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            ¿Ya facturas con otro proveedor? Pásate con nosotros y recibe automáticamente un{" "}
            <strong className="text-foreground">50% de descuento</strong> en tu certificado digital.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={scrollToForm} className="group">
              Quiero mi 50% de descuento
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Price Comparison Visual */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card shadow-card rounded-2xl p-6 w-full max-w-xs">
              <p className="text-sm text-muted-foreground mb-2">Otros proveedores</p>
              <p className="font-display font-bold text-3xl text-foreground line-through opacity-60">S/ 200</p>
              <p className="text-xs text-muted-foreground mt-1">Precio promedio anual</p>
            </div>

            <div className="flex items-center gap-2 text-secondary">
              <TrendingDown className="w-8 h-8 animate-float" />
              <span className="font-bold text-lg">50% menos</span>
            </div>

            <div className="bg-card shadow-card rounded-2xl p-6 w-full max-w-xs border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                TU PRECIO
              </div>
              <p className="text-sm text-muted-foreground mb-2">Con Girasol.pe</p>
              <p className="font-display font-bold text-3xl text-secondary">S/ 100</p>
              <p className="text-xs text-muted-foreground mt-1">Precio con descuento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
