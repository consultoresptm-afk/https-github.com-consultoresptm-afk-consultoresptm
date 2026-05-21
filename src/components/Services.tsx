import { FileText, ExternalLink, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink, openWhatsApp } from "@/lib/site-config";
import bgServicios from "@/assets/bg-servicios-ptm.jpg";

export const Services = () => {
  return (
    <section id="servicios" className="relative py-20 sm:py-24 lg:py-36 bg-gradient-deep overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] mix-blend-luminosity"
        style={{ backgroundImage: `url(${bgServicios})` }}
      />
      {/* Brand color overlay to keep palette cohesive */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/80" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl" />
      {/* Grid overlay — same checkered style, layered on top of image + overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(195 50% 97%) 1px, transparent 1px), linear-gradient(90deg, hsl(195 50% 97%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Bottom fade for smooth transition into next section */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/90 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md text-primary-foreground/90 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] mb-5 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-teal shrink-0" />
            <span>Portafolio de Servicios</span>
          </div>
          <h2 className="font-display text-primary-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 text-balance">
            Conoce nuestras <span className="italic text-teal">soluciones integrales</span>
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
            En {siteConfig.company} ofrecemos un portafolio completo de servicios en gestión empresarial,
            sostenibilidad, calidad y certificaciones ISO. Hemos preparado un brochure corporativo con toda
            nuestra oferta para brindarte una visión clara y detallada.
          </p>
        </div>

        {/* Brochure card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 shadow-elegant border border-primary-foreground/10">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 sm:gap-10 items-center">
              {/* Preview thumbnail */}
              <div className="relative group">
                <a
                  href={siteConfig.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-hero shadow-elegant border border-border"
                >
                  {/* Mock document preview */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="bg-primary p-4 flex items-center gap-2 border-b border-primary-foreground/10">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground/30" />
                      </div>
                      <div className="ml-3 flex-1 h-5 bg-primary-foreground/10 rounded" />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-br from-card to-muted">
                      <div>
                        <div className="text-[9px] uppercase tracking-widest text-accent font-bold mb-2">Brochure Corporativo</div>
                        <div className="font-display text-primary text-xl leading-tight mb-4">
                          Soluciones integrales en gestión y cumplimiento
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-full bg-muted-foreground/20 rounded" />
                          <div className="h-1.5 w-4/5 bg-muted-foreground/20 rounded" />
                          <div className="h-1.5 w-3/5 bg-muted-foreground/20 rounded" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded bg-gradient-accent opacity-80" />
                          ))}
                        </div>
                        <div className="text-[9px] font-bold text-primary">PTM</div>
                      </div>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-primary-foreground flex items-center gap-2 font-semibold">
                      Abrir brochure <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              </div>

              {/* CTA stack */}
              <div className="flex flex-col gap-4 md:min-w-[280px]">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-accent font-semibold">
                  Documento ejecutivo
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-primary leading-tight">
                  Información clara, estructurada y lista para llevar tu empresa al siguiente nivel.
                </h3>

                <Button asChild variant="brochure" size="xl" className="mt-2">
                  <a href={siteConfig.brochureUrl} target="_blank" rel="noopener noreferrer">
                    <FileText />
                    Ver Brochure de Servicios
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                </Button>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    ¿Prefieres asesoría personalizada?
                  </p>
                  <Button asChild variant="whatsapp" size="lg" className="w-full">
                    <a href={whatsappLink} onClick={(e) => { e.preventDefault(); openWhatsApp(); }} target="_blank" rel="noopener noreferrer">
                      <MessageCircle />
                      Hablar por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center">
            {[
              "Diagnóstico sin costo inicial",
              "Acompañamiento de extremo a extremo",
              "Resultados medibles y auditables",
            ].map((t) => (
              <div key={t} className="text-primary-foreground/80 text-sm py-3 px-4 rounded-md bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                ✓ {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
