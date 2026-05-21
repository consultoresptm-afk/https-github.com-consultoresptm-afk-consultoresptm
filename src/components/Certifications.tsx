import { Award, Leaf, HardHat, GraduationCap, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const certs = [
  {
    code: "ISO 9001",
    title: "Gestión de la Calidad",
    desc: "Sistemas robustos para garantizar excelencia operacional y satisfacción del cliente.",
    icon: Award,
    context:
      "La ISO 9001 es la norma internacional más reconocida para Sistemas de Gestión de la Calidad (SGC). Establece los criterios para que una organización demuestre su capacidad de ofrecer productos y servicios que cumplan con los requisitos del cliente y la normativa aplicable.",
    benefits: [
      "Mayor satisfacción y fidelización del cliente.",
      "Procesos internos más eficientes y estandarizados.",
      "Mejora continua basada en datos y evidencias.",
      "Acceso a nuevos mercados y licitaciones que exigen certificación.",
      "Reducción de errores, reprocesos y costos operativos.",
    ],
  },
  {
    code: "ISO 14001",
    title: "Gestión Ambiental",
    desc: "Reducción de impactos ambientales y cumplimiento de la normativa vigente.",
    icon: Leaf,
    context:
      "La ISO 14001 establece los requisitos para implementar un Sistema de Gestión Ambiental (SGA) eficaz, ayudando a las organizaciones a identificar, controlar y reducir sus impactos sobre el medio ambiente.",
    benefits: [
      "Cumplimiento de la legislación ambiental vigente.",
      "Reducción del consumo de recursos (agua, energía, materias primas).",
      "Disminución de residuos y emisiones contaminantes.",
      "Mejora de la imagen corporativa y reputación sostenible.",
      "Ventaja competitiva frente a clientes y aliados eco-responsables.",
    ],
  },
  {
    code: "ISO 45001",
    title: "Seguridad y Salud en el Trabajo",
    desc: "Ambientes laborales seguros, prevención de riesgos y bienestar integral.",
    icon: HardHat,
    context:
      "La ISO 45001 es la norma internacional para Sistemas de Gestión de Seguridad y Salud en el Trabajo (SST). Su objetivo es prevenir lesiones y deterioro de la salud de los colaboradores, generando entornos laborales seguros y saludables.",
    benefits: [
      "Reducción de accidentes y enfermedades laborales.",
      "Cumplimiento de la normativa SST nacional e internacional.",
      "Mayor productividad y compromiso del talento humano.",
      "Disminución de ausentismo y costos por incidentes.",
      "Cultura organizacional centrada en el bienestar.",
    ],
  },
  {
    code: "ISO 21001",
    title: "Gestión de Organizaciones Educativas",
    desc: "Estándar internacional para optimizar servicios educativos, mejorar la satisfacción de los alumnos y asegurar procesos de aprendizaje de alta calidad.",
    icon: GraduationCap,
    context:
      "La ISO 21001 establece los requisitos para un Sistema de Gestión para Organizaciones Educativas (SGOE), con el objetivo de proporcionar un marco común para instituciones educativas que buscan mejorar sus procesos y atender mejor las necesidades de estudiantes y otros beneficiarios.",
    benefits: [
      "Mejora en la calidad educativa y satisfacción de los estudiantes.",
      "Procesos académicos y administrativos más eficientes.",
      "Mayor credibilidad, prestigio institucional y confianza.",
      "Alineación efectiva con políticas y requisitos del sector educativo.",
      "Fomento de una cultura de mejora continua y excelencia.",
    ],
  },
  {
    code: "ISO 50001",
    title: "Gestión de la Energía",
    desc: "Optimización del uso energético, reducción de costos y eficiencia sostenible.",
    icon: Zap,
    context:
      "La ISO 50001 establece los requisitos para implementar un Sistema de Gestión de la Energía (SGEn), permitiendo a las organizaciones usar la energía de forma más eficiente y sostenible.",
    benefits: [
      "Reducción significativa del consumo y costos energéticos.",
      "Disminución de la huella de carbono organizacional.",
      "Mejor desempeño energético en procesos e instalaciones.",
      "Cumplimiento de políticas de sostenibilidad y ESG.",
      "Acceso a beneficios e incentivos por eficiencia energética.",
    ],
  },
];

export const Certifications = () => {
  return (
    <section id="certificaciones" className="relative py-20 sm:py-24 lg:py-36 bg-muted/40">
      <div className="container">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-accent font-semibold mb-3 sm:mb-4">
            Certificaciones ISO
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 text-balance">
            Estándares internacionales que <span className="italic text-accent">elevan tu marca</span>.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Acompañamos el diseño, implementación y mantenimiento de Sistemas de Gestión bajo las normas
            ISO más relevantes para tu sector. Trabajamos con un enfoque práctico y orientado a resultados.
          </p>
          <p className="text-xs sm:text-sm text-accent mt-3 font-medium">
            Haz clic en cualquier norma para conocer su contexto y beneficios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {certs.map((c, i) => (
            <Dialog key={c.code}>
              <DialogTrigger asChild>
                <article
                  className={`group relative bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/50 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer lg:col-span-2 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    i === 3 ? "lg:col-start-2" : ""
                  }`}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver detalles de ${c.code} - ${c.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      (e.currentTarget as HTMLElement).click();
                    }
                  }}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-5 sm:mb-6 group-hover:bg-gradient-accent group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-500">
                      <c.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="font-display text-accent text-xs sm:text-sm font-bold tracking-wider mb-2">
                      {c.code}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-primary mb-2 sm:mb-3 leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {c.desc}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-accent group-hover:underline">
                      Ver beneficios →
                    </span>
                  </div>
                </article>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-md bg-gradient-accent flex items-center justify-center text-primary-foreground shrink-0">
                      <c.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display text-accent text-xs font-bold tracking-wider">
                        {c.code}
                      </div>
                      <DialogTitle className="font-display text-xl sm:text-2xl text-primary text-left">
                        {c.title}
                      </DialogTitle>
                    </div>
                  </div>
                  <DialogDescription className="text-muted-foreground text-base leading-relaxed text-left pt-2">
                    {c.context}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <h4 className="font-display text-primary text-base sm:text-lg mb-3">
                    Beneficios clave
                  </h4>
                  <ul className="space-y-2.5">
                    {c.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
