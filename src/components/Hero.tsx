import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink, openWhatsApp } from "@/lib/site-config";
import heroImg from "@/assets/hero-corporate.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Equipo de consultores PTM en sesión estratégica con vista panorámica de Bogotá"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
      </div>

      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(195 50% 97%) 1px, transparent 1px), linear-gradient(90deg, hsl(195 50% 97%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md text-primary-foreground/90 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.22em] mb-6 sm:mb-8 reveal-up">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
            <span>Consultoría empresarial certificada</span>
          </div>

          <h1 className="font-display text-primary-foreground text-balance text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] mb-5 sm:mb-6 reveal-up" style={{ animationDelay: "0.1s" }}>
            Estrategia, gestión, cumplimiento{" "}
            <span className="hidden sm:inline"><br /></span>
            y <span className="italic text-teal">excelencia</span> para tu organización.
          </h1>

          <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed reveal-up" style={{ animationDelay: "0.2s" }}>
            En <strong className="text-primary-foreground font-semibold">{siteConfig.company}</strong> diseñamos soluciones integrales
            de gestión, sostenibilidad y certificaciones ISO que llevan a las empresas al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 reveal-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#servicios" onClick={(e) => { e.preventDefault(); document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" }); }}>
                Ver nuestras soluciones
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
              <a href={whatsappLink} onClick={(e) => { e.preventDefault(); openWhatsApp(); }} target="_blank" rel="noopener noreferrer">
                Hablar con un experto
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-12 mt-12 sm:mt-16 max-w-2xl reveal-up" style={{ animationDelay: "0.4s" }}>
            {[
              { n: "+25", l: "Años de experiencia" },
              { n: "+10", l: "Empresas asesoradas" },
              { n: "100%", l: "Compromiso con resultados" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-teal/60 pl-3 sm:pl-4">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-foreground">{s.n}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-foreground/70 mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-primary-foreground/60 animate-float-slow">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
      </div>
    </section>
  );
};
