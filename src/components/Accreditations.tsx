import { siteConfig } from "@/lib/site-config";

export const Accreditations = () => {
  const items = [
    { name: "ICONTEC", className: "font-display font-bold text-2xl tracking-tighter" },
    { name: "BUREAU VERITAS", className: "font-display font-extrabold text-xl tracking-tight uppercase" },
    { name: "ICONTEC", className: "font-display font-bold text-2xl tracking-tighter" },
    { name: "BUREAU VERITAS", className: "font-display font-extrabold text-xl tracking-tight uppercase" },
    { name: "ICONTEC", className: "font-display font-bold text-2xl tracking-tighter" },
    { name: "BUREAU VERITAS", className: "font-display font-extrabold text-xl tracking-tight uppercase" },
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
            animation: marqueeScroll 25s linear infinite;
        }

        @keyframes marqueeScroll {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(-50%);
            }
        }
      `}</style>
      <section className="py-12 bg-background border-y border-border overflow-hidden">
        <div className="container relative">
          <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold text-center pb-8 md:pb-10">
            Alineados con los requisitos de:
          </h3>
          <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
            <div className="absolute left-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />

            <div className="flex w-max items-center marquee-inner will-change-transform">
              {[...items, ...items].map((item, index) => (
                <div key={index} className={`shrink-0 flex items-center justify-center mx-8 md:mx-12 text-primary/60 hover:text-primary transition-colors cursor-default ${item.className}`}>
                  {item.name}
                </div>
              ))}
            </div>

            <div className="absolute right-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
};
