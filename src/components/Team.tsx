import { CheckCircle2, Briefcase, GraduationCap, Building2 } from "lucide-react";

const directors = [
  {
    name: "Julio R. Talero T.",
    role: "Director HSQ",
    education: [
      "Ingeniero Industrial (Universidad Antonio Nariño)",
      "Esp. en Gerencia de SST (Universidad ECCI)"
    ],
    experience: "27 Años",
    sectors: ["Agroindustria", "Manufactura", "Estatal", "Metalmecánica"],
    certifications: [
      "Licencia vigente en SST",
      "Auditor líder IRCA ISO 9001:2015, 14001:2015 e 45001:2018",
      "Auditor interno ISO 50001:2018",
      "Diplomado en SST en calderas",
      "Certificación en Eficiencia Energética",
      "Diplomado en reincorporación laboral y ocupacional"
    ]
  },
  {
    name: "William H. Martinez M.",
    role: "Director de Sostenibilidad Corporativa",
    education: [
      "Ingeniero Ambiental (Universidad Central)",
      "Magister en Sostenibilidad Corporativa (Universidad Central)"
    ],
    experience: "7 Años",
    sectors: ["Construcción", "Agroindustria", "Estatal"],
    certifications: [
      "Auditor líder IRCA ISO 9001:2015 Y 14001:2015",
      "Diplomado en Gestión Ambiental",
      "Certificación en Eficiencia Energética",
      "Certificación ArcGIS Desktop",
      "Certificación en ACV Fotovoltaico"
    ]
  }
];

export const Team = () => {
  return (
    <section id="equipo" className="py-20 lg:py-32 bg-background border-t border-border">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-teal text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Liderazgo Estratégico
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-medium tracking-tight mb-6">
            Dirección Ejecutiva
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Nuestro equipo directivo combina décadas de experiencia técnica y gerencial para asegurar la excelencia en cada proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {directors.map((director, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8 pb-8 border-b border-border/50">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <span className="font-display text-2xl text-primary">
                    {director.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-primary font-medium tracking-tight mb-2">
                    {director.name}
                  </h3>
                  <div className="text-teal font-medium tracking-wide uppercase text-sm sm:text-base">
                    {director.role}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                    <GraduationCap className="w-5 h-5 text-teal" />
                    <span>Perfil Académico</span>
                  </div>
                  <ul className="space-y-2">
                    {director.education.map((edu, eIdx) => (
                      <li key={eIdx} className="text-muted-foreground text-sm leading-relaxed">
                        • {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                    <CheckCircle2 className="w-5 h-5 text-teal" />
                    <span>Acreditaciones y Licencias</span>
                  </div>
                  <ul className="space-y-3">
                    {director.certifications.map((cert, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border/50">
                  <div>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Briefcase className="w-4 h-4 text-teal" />
                      <span className="text-sm">Experiencia</span>
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {director.experience}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Building2 className="w-4 h-4 text-teal" />
                      <span className="text-sm">Sectores</span>
                    </div>
                    <div className="text-muted-foreground text-sm flex flex-wrap gap-1 fade-in">
                      {director.sectors.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
