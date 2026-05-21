import { siteConfig } from "@/lib/site-config";
import logoPtm from "@/assets/logo-ptm.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-[14px] bg-white flex items-center justify-center overflow-hidden shadow-soft">
                <img src={logoPtm} alt="Logo PTM" className="h-full w-full object-cover scale-[1.15]" width={48} height={48} loading="lazy" />
              </div>
              <div>
                <div className="font-display text-sm">Consultores PTM</div>
                <div className="text-[10px] uppercase tracking-widest text-primary-foreground/60">Gestión & Cumplimiento</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              {siteConfig.company}. Consultoría empresarial, sistemas de gestión y certificaciones ISO en Colombia.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-teal font-semibold mb-4">Navegación</div>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#inicio" className="hover:text-primary-foreground transition">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-primary-foreground transition">Sobre Nosotros</a></li>
              <li><a href={siteConfig.brochureUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition">Portafolio de Servicios</a></li>
              <li><a href="#certificaciones" className="hover:text-primary-foreground transition">Certificaciones ISO</a></li>
              <li><a href="#contacto" className="hover:text-primary-foreground transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-teal font-semibold mb-4">Contacto</div>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.whatsappNumber}</li>
              <li>{siteConfig.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} {siteConfig.company}. Todos los derechos reservados.</div>
          <div>NIT registrado · Bogotá D.C.</div>
        </div>
      </div>
    </footer>
  );
};
