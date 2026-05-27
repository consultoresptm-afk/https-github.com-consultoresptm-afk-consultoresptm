import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { logoBase64 } from "@/assets/logo-base64";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Dirección Ejecutiva", href: "#equipo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Certificaciones ISO", href: "#certificaciones" },
  { label: "FAQ'S", href: "#seccion-faqs" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 transition-all duration-500 max-w-screen-2xl mx-auto">
      <nav
        className={cn(
          "flex items-center justify-between w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-border shadow-md text-foreground"
            : "bg-black/20 backdrop-blur-md border-white/20 text-white"
        )}
      >
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#inicio");
          }}
          className="flex items-center gap-3 shrink-0"
        >
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center overflow-hidden bg-white shrink-0 shadow-sm border border-border">
            <img
              src={logoBase64}
              alt="Logo Consultores PTM"
              className="h-full w-full object-cover scale-[1.15]"
              width={44}
              height={44}
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <div className="font-display text-xs sm:text-sm font-semibold leading-tight">
              Consultores PTM
            </div>
            <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] opacity-80">
              Gestión & Cumplimiento
            </div>
          </div>
        </a>

        <div className="hidden xl:flex items-center gap-5 lg:gap-6 ml-auto mr-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="relative overflow-hidden h-5 group text-[13px] font-medium"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300 opacity-90 group-hover:opacity-100">
                {l.label}
              </span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 opacity-100 text-teal">
                {l.label}
              </span>
            </a>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Button asChild size="sm" variant={scrolled ? "default" : "secondary"} className="h-9 px-4 rounded-full font-medium">
            <a href={siteConfig.brochureUrl} target="_blank" rel="noopener noreferrer">
              Portafolio <ExternalLink className="ml-1 w-3.5 h-3.5" />
            </a>
          </Button>
          <div className="button-bg rounded-full p-[2px] transition duration-300 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.3)]">
            <a
              href={siteConfig.intranetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 h-[32px] text-xs text-white rounded-full font-medium bg-gray-900 border-none hover:bg-black transition-colors flex items-center gap-1"
            >
              Intranet <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <button
          className="xl:hidden p-2 rounded-full transition-colors hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={cn(
          "absolute top-[calc(100%+0.5rem)] inset-x-4 xl:hidden overflow-hidden transition-all duration-500 rounded-2xl border bg-background/95 backdrop-blur-xl shadow-lg",
          open ? "max-h-[800px] opacity-100 border-border" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <div className="flex flex-col p-4 gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="text-foreground p-3 rounded-lg hover:bg-accent/10 transition-colors font-medium text-sm"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3 p-3 border-t border-border/50">
            <Button asChild className="w-full rounded-full justify-center">
              <a href={siteConfig.brochureUrl} target="_blank" rel="noopener noreferrer">
                Portafolio de Servicios
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <div className="button-bg rounded-full p-[2px]">
              <a
                href={siteConfig.intranetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2.5 text-sm text-white rounded-full font-medium bg-gray-900 border-none hover:bg-black transition-colors flex justify-center items-center gap-2"
              >
                Intranet <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
