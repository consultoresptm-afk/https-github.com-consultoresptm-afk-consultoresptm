import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import logoPtm from "@/assets/logo-ptm.jpg";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Certificaciones ISO", href: "#certificaciones" },
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
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }} className="flex items-center gap-3 group">
          <div className={cn(
            "h-12 w-12 rounded-[14px] flex items-center justify-center overflow-hidden transition-all duration-300 shadow-soft",
            scrolled ? "bg-white" : "bg-white/95 ring-1 ring-primary-foreground/20"
          )}>
            <img
              src={logoPtm}
              alt="Logo Consultores PTM Gestión y Cumplimiento SAS"
              className="h-full w-full object-cover scale-[1.15]"
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col">
            <div className={cn("font-display text-xs sm:text-sm leading-tight", scrolled ? "text-foreground" : "text-primary-foreground")}>
              Consultores PTM
            </div>
            <div className={cn("text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.18em]", scrolled ? "text-muted-foreground" : "text-primary-foreground/70")}>
              Gestión & Cumplimiento
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              className={cn(
                "text-sm font-medium underline-grow transition-colors",
                scrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-primary-foreground"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 flex-wrap justify-end">
          <Button asChild variant="hero" size="sm">
            <a href={siteConfig.brochureUrl} target="_blank" rel="noopener noreferrer">
              Portafolio de Servicios
              <ExternalLink className="ml-1" />
            </a>
          </Button>
          <Button asChild variant="hero" size="sm">
            <a href={siteConfig.intranetUrl} target="_blank" rel="noopener noreferrer">
              Intranet
              <ExternalLink className="ml-1" />
            </a>
          </Button>
        </div>

        <button
          className={cn("lg:hidden p-2 rounded-md transition-colors", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl border-b border-border",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              className="text-foreground py-2 border-b border-border/50 font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <Button asChild variant="hero" className="w-full sm:w-auto">
              <a href={siteConfig.brochureUrl} target="_blank" rel="noopener noreferrer">
                Portafolio de Servicios
                <ExternalLink />
              </a>
            </Button>
            <Button asChild variant="hero" className="w-full sm:w-auto">
              <a href={siteConfig.intranetUrl} target="_blank" rel="noopener noreferrer">
                Intranet
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
