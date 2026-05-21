import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { siteConfig, whatsappLink, openWhatsApp } from "@/lib/site-config";
import { toast } from "sonner";

export const WhatsAppFloat = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.whatsappNumber);
      toast.success("Número copiado al portapapeles", {
        description: siteConfig.whatsappNumber,
      });
    } catch {
      toast.info("Nuestro número de WhatsApp", {
        description: siteConfig.whatsappNumber,
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {expanded && (
        <div className="bg-card border border-border rounded-xl shadow-elegant p-4 w-72 animate-scale-in">
          <div className="font-display text-sm text-primary mb-1">Hablemos por WhatsApp</div>
          <div className="text-xs text-muted-foreground mb-3 select-all">{siteConfig.whatsappNumber}</div>
          <div className="grid grid-cols-1 gap-2">
            <a
              href={whatsappLink}
              onClick={(e) => { e.preventDefault(); openWhatsApp(); setExpanded(false); }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[hsl(142_70%_40%)] hover:bg-[hsl(142_70%_35%)] text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Abrir WhatsApp
            </a>
            <button
              onClick={() => { handleCopy(); setExpanded(false); }}
              className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/70 text-foreground text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" /> Copiar número
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mt-3 leading-tight">
            ¿No abre? Copia el número y escríbenos directamente.
          </p>
        </div>
      )}

      {/* Floating trigger */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Hablar por WhatsApp"
        className="relative group"
      >
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_40%)] animate-ping opacity-30" />
        )}
        <span className="relative flex items-center gap-3 bg-[hsl(142_70%_40%)] hover:bg-[hsl(142_70%_35%)] text-white pl-4 pr-5 py-3.5 rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-semibold">
            {expanded ? "Cerrar" : "¿Hablamos?"}
          </span>
        </span>
      </button>
    </div>
  );
};
