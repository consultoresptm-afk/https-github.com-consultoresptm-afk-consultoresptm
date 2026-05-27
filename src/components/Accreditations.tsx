import { siteConfig } from "@/lib/site-config";

export const Accreditations = () => {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold text-center md:text-left">
            Alineados con los requisitos de:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {/* Minimalist Typographic Representation */}
            <div className="font-display font-bold text-2xl tracking-tighter text-primary/60 hover:text-primary transition-colors cursor-default">
              ICONTEC
            </div>
            <div className="font-display font-extrabold text-xl tracking-tight text-primary/60 hover:text-primary transition-colors cursor-default uppercase">
              Bureau Veritas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
