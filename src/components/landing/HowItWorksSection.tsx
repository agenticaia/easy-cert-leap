import { Upload, CheckCircle2, BadgePercent, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "1",
    title: "Sube tu archivo",
    description: "Carga la clave pública (.CER) de tu proveedor actual.",
  },
  {
    icon: CheckCircle2,
    number: "2",
    title: "Validación Automática",
    description: "Nuestro sistema verifica que eres elegible para la oferta.",
  },
  {
    icon: BadgePercent,
    number: "3",
    title: "Ahorra",
    description: "Obtienes tu cupón del 50% al instante para renovar con nosotros.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Cámbiate en 3 simples pasos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sin complicaciones. Sin letra pequeña escondida. Así de fácil.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex-1 relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-card shadow-card flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold text-sm flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - hidden on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 transform translate-x-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
