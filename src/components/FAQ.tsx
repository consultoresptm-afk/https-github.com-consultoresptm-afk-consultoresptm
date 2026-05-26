import { teamBase64 as bgFAQ } from "@/assets/team-base64";

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-36 bg-gradient-deep overflow-hidden text-primary-foreground">
      {/* Background image integrated smoothly from behind */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.14] mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url(${bgFAQ})` }}
      />
      {/* Gradient overlays to guarantee superb text contrast and a premium look */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6">
            Preguntas Frecuentes sobre <span className="italic text-teal">Certificaciones y Cumplimiento</span>
          </h2>
          <p className="text-primary-foreground/70 text-base sm:text-lg max-w-2xl mx-auto">
            Resolvemos tus dudas técnicas sobre normatividad ISO, sostenibilidad y gestión empresarial en Colombia.
          </p>
        </div>

        <div className="space-y-16">
          {/* General & ISO */}
          <article className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-display text-teal border-b border-primary-foreground/10 pb-2 uppercase tracking-wide">Certificaciones ISO y Normatividad</h2>
            
            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Qué es la certificación ISO 9001 y por qué mi empresa la necesita?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                ISO 9001 es el estándar internacional para Sistemas de Gestión de la Calidad que garantiza que tus procesos cumplen con requisitos globales de eficiencia y satisfacción del cliente. Las PYMEs en Colombia la necesitan para acceder a licitaciones públicas, mejorar su reputación ante grandes proveedores y reducir costos operativos mediante la estandarización. Implementar ISO 9001 con Consultores PTM asegura resultados auditables en menos de 10 meses.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Cuánto cuesta certificar una PYME en ISO 9001 en Colombia en 2024?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                El costo de certificación ISO 9001 para una PYME en Colombia oscila usualmente entre $5,000,000 y $12,000,000 COP para la etapa de consultoría, más los derechos de auditoría externa. El valor final depende de la complejidad de los procesos y el número de empleados. Invertir en Consultores PTM garantiza un retorno de inversión mediante la optimización de procesos y la reducción de errores transaccionales desde el primer semestre.
              </p>
            </div>
          </article>

          {/* Sostenibilidad */}
          <article className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-display text-teal border-b border-primary-foreground/10 pb-2 uppercase tracking-wide">Sostenibilidad Corporativa</h2>
            
            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Cómo ayuda la sostenibilidad a la rentabilidad de mi negocio?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                La sostenibilidad corporativa impulsa la rentabilidad al reducir el desperdicio de materias primas y optimizar el consumo energético, lo que baja directamente los costos fijos. Además, las empresas sostenibles en Colombia acceden a beneficios tributarios y mejoran su calificación crediticia. Implementar estrategias ESG atrae inversionistas y fideliza clientes que prefieren marcas con responsabilidad ambiental comprobable, transformando la ética en beneficios financieros medibles.
              </p>
            </div>
          </article>

          {/* Gestión Ambiental */}
          <article className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-display text-teal border-b border-primary-foreground/10 pb-2 uppercase tracking-wide">Gestión Ambiental (ISO 14001)</h2>
            
            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Cuáles son los requisitos legales de gestión ambiental para empresas en Bogotá?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                Las empresas en Bogotá deben cumplir con el Registro Único Ambiental (RUA), planes de gestión de residuos peligrosos (RESPEL) y normatividad sobre vertimientos y emisiones controladas por la Secretaría de Ambiente. El incumplimiento genera sanciones económicas severas y cierres preventivos. ISO 14001 es la herramienta preventiva ideal para asegurar la conformidad legal constante y evitar riesgos jurídicos ambientales ante las autoridades de control colombianas.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Qué diferencia hay entre cumplimiento ambiental legal e ISO 14001?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                El cumplimiento legal es una obligación jurídica mínima sancionable, mientras que ISO 14001 es un estándar de excelencia proactivo que integra el medio ambiente en la estrategia de la empresa. Estar certificado en ISO 14001 garantiza que tu empresa no solo cumple la ley colombiana, sino que busca la mejora continua en el desempeño ecológico, otorgando puntos adicionales en procesos de contratación estatal y privada nacional.
              </p>
            </div>
          </article>

          {/* SST */}
          <article className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-display text-teal border-b border-primary-foreground/10 pb-2 uppercase tracking-wide">Seguridad y Salud en el Trabajo (SST)</h2>
            
            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Es obligatorio implementar el SG-SST para pequeñas empresas de 1 a 10 empleados?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                Sí, según el Decreto 1072 de 2015 y la Resolución 0312 de 2019, toda empresa en Colombia, sin importar su tamaño, debe implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo. Las microempresas tienen estándares mínimos simplificados, pero la ausencia de este sistema puede acarrear multas superiores a los 500 salarios mínimos legales vigentes. Consultores PTM adapta el marco ISO 45001 para que cumpla con la ley local eficientemente.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Cuáles son los beneficios de certificar ISO 45001 en lugar de solo cumplir el Decreto 1072?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                Certificar ISO 45001 eleva el cumplimiento legal del Decreto 1072 a un estándar internacional reconocido globalmente por clientes y socios extranjeros. Reduce drásticamente la tasa de accidentalidad laboral, mejora la productividad al disminuir el ausentismo y posiciona a la empresa como un empleador de elección. Es la mejor defensa técnica ante posibles demandas laborales, demostrando la debida diligencia organizacional en la protección de los trabajadores.
              </p>
            </div>
          </article>

          {/* Calidad */}
          <article className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-display text-teal border-b border-primary-foreground/10 pb-2 uppercase tracking-wide">Gestión de la Calidad</h2>
            
            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Cuánto tiempo se requiere para ver resultados reales en un Sistema de Gestión de Calidad?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                Los resultados operativos iniciales, como la reducción de errores en entregas y mejor organización documental, se perciben en los primeros 3 meses de implementación guiada. La maduración total del sistema y la certificación final suelen tomar entre 6 y 10 meses. Un sistema de calidad bien diseñado por Consultores PTM no es burocracia, sino una herramienta de gestión que libera tiempo a la gerencia para enfocarse en la expansión del negocio.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl text-primary-foreground font-medium">¿Qué impacto tiene la norma BASC en la exportación de productos colombianos?</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-justify text-sm sm:text-base">
                La norma BASC es crítica para exportadores colombianos porque garantiza que la cadena de suministro está blindada contra actividades ilícitas como el narcotráfico y el contrabando. Estar certificado en BASC agiliza los tiempos en puertos y aduanas internacionales (especialmente hacia EE.UU. y Europa) y reduce el número de inspecciones intrusivas. Es un requisito de facto para cualquier empresa que aspire a ser un operador logístico o exportador confiable a nivel mundial.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
