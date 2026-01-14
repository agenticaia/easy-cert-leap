import { ShieldCheck, Lock, Award } from "lucide-react";

const TrustSection = () => {
  // Placeholder company names - in production these would be real client logos
  const companies = [
    "Empresa Alpha", "TechCorp", "Innovate SA", "Global Peru", 
    "Solutions Plus", "Digital Express", "Metro Business"
  ];

  return (
    <section className="py-16 bg-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
            Únete a las empresas que ya optimizaron su facturación
          </h2>
        </div>

        {/* Client Logo Carousel */}
        <div className="relative mb-12">
          <div className="flex animate-scroll gap-12 py-4">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-12 px-8 bg-card rounded-lg shadow-soft flex items-center justify-center"
              >
                <span className="text-muted-foreground font-medium whitespace-nowrap opacity-60">
                  {company}
                </span>
              </div>
            ))}
          </div>
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Sitio Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Certificado SSL</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Autorizado por INDECOPI</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
