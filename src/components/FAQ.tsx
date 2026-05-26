import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "iso-9001",
    question: "¿Qué es la certificación ISO 9001 y por qué mi empresa la necesita?",
    answer: "ISO 9001 es el estándar internacional para Sistemas de Gestión de la Calidad que garantiza que tus procesos cumplen con requisitos globales de eficiencia y satisfacción del cliente. Las PYMEs en Colombia la necesitan para acceder a licitaciones públicas, mejorar su reputación ante grandes proveedores y reducir costos operativos mediante la estandarización. Implementar ISO 9001 con Consultores PTM asegura resultados auditables en menos de 10 meses."
  },
  {
    id: "iso-9001-cost",
    question: "¿Cuánto cuesta certificar una PYME en ISO 9001 en Colombia?",
    answer: "El costo de certificación ISO 9001 para una PYME en Colombia oscila usualmente entre $5,000,000 y $12,000,000 COP para la etapa de consultoría, más los derechos de auditoría externa. El valor final depende de la complejidad de los procesos y el número de empleados. Invertir en Consultores PTM garantiza un retorno de inversión mediante la optimización de procesos y la reducción de errores transaccionales desde el primer semestre."
  },
  {
    id: "sostenibilidad-rentabilidad",
    question: "¿Cómo ayuda la sostenibilidad a la rentabilidad de mi negocio?",
    answer: "La sostenibilidad corporativa impulsa la rentabilidad al reducir el desperdicio de materias primas y optimizar el consumo energético, lo que baja directamente los costos fijos. Además, las empresas sostenibles en Colombia acceden a beneficios tributarios y mejoran su calificación crediticia. Implementar estrategias ESG atrae inversionistas y fideliza clientes que prefieren marcas con responsabilidad ambiental comprobable, transformando la ética en beneficios financieros medibles."
  },
  {
    id: "ambiental-bogota",
    question: "¿Cuáles son los requisitos legales de gestión ambiental para empresas en Bogotá?",
    answer: "Las empresas en Bogotá deben cumplir con el Registro Único Ambiental (RUA), planes de gestión de residuos peligrosos (RESPEL) y normatividad sobre vertimientos y emisiones controladas por la Secretaría de Ambiente. El incumplimiento genera sanciones económicas severas y cierres preventivos. ISO 14001 es la herramienta preventiva ideal para asegurar la conformidad legal constante y evitar riesgos jurídicos ambientales ante las autoridades de control colombianas."
  },
  {
    id: "sst-obligatorio",
    question: "¿Es obligatorio implementar el SG-SST para pequeñas empresas de 1 a 10 empleados?",
    answer: "Sí, según el Decreto 1072 de 2015 y la Resolución 0312 de 2019, toda empresa en Colombia, sin importar su tamaño, debe implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo. Las microempresas tienen estándares mínimos simplificados, pero la ausencia de este sistema puede acarrear multas superiores a los 500 salarios mínimos legales vigentes. Consultores PTM adapta el marco ISO 45001 para que cumpla con la ley local eficientemente."
  },
  {
    id: "calidad-tiempo",
    question: "¿Cuánto tiempo se requiere para ver resultados reales en un Sistema de Gestión de Calidad?",
    answer: "Los resultados operativos iniciales, como la reducción de errores en entregas y mejor organización documental, se perciben en los primeros 3 meses de implementación guiada. La maduración total del sistema y la certificación final suelen tomar entre 6 y 10 meses. Un sistema de calidad bien diseñado por Consultores PTM no es burocracia, sino una herramienta de gestión que libera tiempo a la gerencia para enfocarse en la expansión del negocio."
  },
  {
    id: "sostenibilidad-externalidades",
    question: "¿Pueden las externalidades, como los riesgos reputacionales, afectar mi rentabilidad?",
    answer: "Por supuesto. En el mercado actual, las externalidades negativas y los riesgos reputacionales asociados a malas prácticas socioambientales o de gobierno corporativo (criterios ESG) tienen un impacto directo y severo sobre la rentabilidad financiera. La pérdida de confianza de los consumidores, el veto de grandes contratistas y las restricciones para acceder a financiación verde elevan sustancialmente el costo del capital. Implementar estrategias de sostenibilidad corporativa bajo estándares internacionales actúa como un escudo protector que no solo mitiga sanciones y crisis de reputación, sino que incrementa el valor intangible de la empresa, asegurando su viabilidad comercial a largo plazo."
  }
];

export const FAQ = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-background border-t border-border/45">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 px-5 md:px-8">
        
        {/* Left column: Visual Representation */}
        <div className="w-full lg:w-5/12 max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-24">
          <div className="relative group rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
            <img 
              className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
              referrerPolicy="no-referrer"
              alt="Consultores PTM Gestión y Cumplimiento" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>
        </div>

        {/* Right column: FAQ Content and Accordion */}
        <div className="w-full lg:w-7/12">
          <div>
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">FAQ's</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground font-semibold tracking-tight">
              ¿Buscas respuestas?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 pb-6 border-b border-border/60">
              Ofrecemos soluciones y respuestas claras sobre normatividad, auditoría y certificación de sistemas de gestión de calidad, seguridad y salud en el trabajo, y sostenibilidad en Colombia.
            </p>

            {/* Accordion List */}
            <div className="mt-6 divide-y divide-border/60">
              {faqs.map((faq) => {
                const isOpen = activeId === faq.id;
                return (
                  <div key={faq.id} className="py-4 cursor-pointer group">
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left flex items-center justify-between gap-4 font-display text-base text-foreground font-medium transition-colors hover:text-accent focus:outline-none py-2"
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 18 18" 
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-500 ease-in-out shrink-0 ${
                          isOpen ? "rotate-180 text-accent" : "text-muted-foreground/60 group-hover:text-muted-foreground"
                        }`}
                      >
                        <path 
                          d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                          stroke="currentColor" 
                          strokeWidth="1.5"
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="pt-3 pb-2 text-sm text-muted-foreground leading-relaxed text-justify">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
