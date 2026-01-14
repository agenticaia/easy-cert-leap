import { Zap, Headphones, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Emisión Inmediata",
    description: "No pierdas tiempo. Tu certificado activo en minutos, listo para facturar.",
  },
  {
    icon: Headphones,
    title: "Soporte Experto",
    description: "Ayuda real cuando la necesitas, sin tecnicismos complicados.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compatible con SUNAT",
    description: "Olvídate de problemas de validación. Garantía total de funcionamiento.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Más que un descuento, una mejora para tu negocio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre por qué miles de empresas peruanas confían en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
