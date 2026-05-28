import { CheckCircle2, Briefcase, GraduationCap, Building2 } from "lucide-react";

const directors = [
  {
    name: "Julio R. Talero T.",
    role: "Director de Calidad y Certificaciones",
    email: "hsq@consultoresptm.com",
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
    role: "Director Ambiental y Desarrollo Sostenible",
    email: "sostenibilidad@consultoresptm.com",
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
    <section id="equipo" className="relative py-20 lg:py-32 border-t border-border overflow-hidden bg-slate-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[40rem] h-[20rem] bg-indigo-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-teal text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            Liderazgo Estratégico
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-medium tracking-tight mb-6">
            Dirección Ejecutiva
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            Nuestro equipo directivo combina décadas de experiencia técnica y gerencial para asegurar la excelencia en cada proyecto.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8">
          {directors.map((director, idx) => (
            <div 
              key={idx}
              className="text-sm text-gray-600 w-full lg:max-w-md divide-y divide-gray-300 border border-gray-300 rounded-xl bg-white shadow-sm"
            >
              <div className="flex flex-col items-center justify-between py-10 px-6">
                <div className="h-28 w-28 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-gray-200 shadow-inner">
                  <span className="font-display text-4xl text-slate-700 tracking-tight">
                    {director.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h2 className="text-2xl text-gray-900 mt-5 font-display font-medium tracking-tight text-center">{director.name}</h2>
                <p className="text-center mt-1.5 text-base">{director.role}</p>
                <p className="bg-teal/10 px-3 py-1 rounded-full mt-4 text-[13px] text-teal font-medium border border-teal/20">
                  {director.experience} Experiencia
                </p>
              </div>

              <div className="p-8 space-y-6 bg-gray-50/50">
                <div>
                  <h4 className="text-gray-900 font-medium mb-3 flex items-center gap-2 text-base">
                    <GraduationCap className="w-4 h-4 text-teal" /> Perfil Académico
                  </h4>
                  <ul className="space-y-2">
                    {director.education.map((edu, eIdx) => (
                      <li key={eIdx} className="leading-relaxed flex items-start gap-2">
                        <span className="text-teal/60 mt-0.5 text-[10px]">●</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-gray-900 font-medium mb-3 flex items-center gap-2 text-base">
                    <CheckCircle2 className="w-4 h-4 text-teal" /> Acreditaciones y Licencias
                  </h4>
                  <ul className="space-y-2">
                    {director.certifications.map((cert, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <span className="text-teal/60 mt-0.5 text-[10px]">●</span>
                        <span className="leading-relaxed">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 font-medium mb-2 flex items-center gap-2 text-base">
                    <Building2 className="w-4 h-4 text-teal" /> Sectores
                  </h4>
                  <div className="leading-relaxed">
                    {director.sectors.join(", ")}
                  </div>
                </div>
              </div>

              <div className="flex items-center divide-x divide-gray-300">
                  <a href={`mailto:${director.email}`} className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-gray-50 text-gray-700 transition-colors font-medium rounded-bl-xl">
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Contactar
                  </a>
                  <a href="#contacto" className="flex items-center justify-center gap-2 w-1/2 py-4 hover:bg-gray-50 text-gray-700 transition-colors font-medium rounded-br-xl">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Llamar
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
