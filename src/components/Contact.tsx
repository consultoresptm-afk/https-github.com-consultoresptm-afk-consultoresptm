import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink, openWhatsApp } from "@/lib/site-config";
import bgContact from "@/assets/team-ptm.jpg";

export const Contact = () => {
  return (
    <section id="contacto" className="relative py-20 sm:py-24 lg:py-36 bg-gradient-deep overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] mix-blend-luminosity"
        style={{ backgroundImage: `url(${bgContact})` }}
      />
      {/* Brand color overlay to keep palette cohesive */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/80" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl" />

      {/* Grid overlay — same checkered style */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(195 50% 97%) 1px, transparent 1px), linear-gradient(90deg, hsl(195 50% 97%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Top fade for smooth transition from previous section */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/90 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md text-primary-foreground/90 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] mb-5 sm:mb-6">
              Contacto
            </div>
            <h2 className="font-display text-primary-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 text-balance">
              Hablemos sobre el <span className="italic text-teal">próximo paso</span> de tu organización.
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Cuéntanos sobre tu empresa y los retos que enfrentas. Te contactaremos para coordinar
              una sesión de diagnóstico sin compromiso.
            </p>

            <div className="space-y-4 sm:space-y-5">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-primary transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/60">Email</div>
                  <div className="text-primary-foreground font-medium text-sm sm:text-base break-all">{siteConfig.email}</div>
                </div>
              </a>

              <a href={whatsappLink} onClick={(e) => { e.preventDefault(); openWhatsApp(); }} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-primary transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/60">WhatsApp</div>
                  <div className="text-primary-foreground font-medium text-sm sm:text-base">{siteConfig.whatsappNumber}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-teal">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/60">Ubicación</div>
                  <div className="text-primary-foreground font-medium text-sm sm:text-base">{siteConfig.city}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="relative bg-card/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-elegant border border-primary-foreground/10">
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-5 sm:mb-6">Solicita una asesoría</h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const msg = `Hola PTM, soy ${data.get("nombre")} de ${data.get("empresa")}. ${data.get("mensaje")}`;
                openWhatsApp(msg);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Nombre</label>
                  <input required name="nombre" className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Empresa</label>
                  <input required name="empresa" className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</label>
                <input required type="email" name="email" className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">¿En qué podemos ayudarte?</label>
                <textarea required name="mensaje" rows={4} className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <MessageCircle />
                Enviar por WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Te responderemos en horario hábil. Tu información es 100% confidencial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
