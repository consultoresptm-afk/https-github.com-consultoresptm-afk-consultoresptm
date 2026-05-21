import { Target, Eye, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about-section.jpg";

const pillars = [
  {
    icon: Target,
    title: "Misión",
    text: "Estamos comprometidos con el asesoramiento, implementación y certificación de sistemas de gestión que agregan valor a las organizaciones, asegurando el cumplimiento normativo de cada uno de sus procesos, contribuyendo a la sostenibilidad y mejora continua.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "En el 2030 estar entre las mejores empresas de asesorías a nivel nacional en normativas de gestión; principalmente en el campo Ambiental, Seguridad y Salud en el Trabajo, Calidad, Eficiencia Energética, Seguridad Vial e Inocuidad, entre otras, definiendo procesos sostenibles que contribuyan a la rentabilidad de las organizaciones.",
  },
  {
    icon: Sparkles,
    title: "Principios y Valores",
    text: "Integridad, Responsabilidad, Trabajo en equipo, Orientación al cliente, Innovación, Excelencia, Respeto, Compromiso, Adaptabilidad, Sostenibilidad, Relaciones mutuamente beneficiosas con el proveedor y Mejora continua.",
  },
];

export const About = () => {
  return (
    <section id="nosotros" className="relative py-20 sm:py-24 lg:py-36 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-elegant aspect-[4/5]">
              <img
                src={aboutImg}
                alt="Arquitectura corporativa moderna que representa la solidez de PTM"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 md:-right-8 bg-card border border-border rounded-lg p-4 sm:p-6 shadow-elegant max-w-[220px] sm:max-w-[260px] animate-float-slow">
              <div className="font-display text-base sm:text-xl text-primary leading-tight">
                Consultoría que transforma resultados.
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent/40 rounded-lg -z-10" />
          </div>

          {/* Content side */}
          <div>
            <div className="text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] text-accent font-semibold mb-3 sm:mb-4">
              Sobre Nosotros
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 text-balance">
              Expertos en <span className="italic text-accent">gestión empresarial</span> y cumplimiento normativo.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              Somos una firma colombiana especializada en consultoría integral, sistemas de gestión y certificaciones
              internacionales. Combinamos experiencia técnica, metodología rigurosa y un acompañamiento cercano para
              que cada empresa alcance estándares de clase mundial.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4 sm:gap-5 group">
                  <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-gradient-accent flex items-center justify-center text-primary-foreground shadow-soft group-hover:shadow-glow transition-shadow duration-300">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg sm:text-xl text-primary mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
