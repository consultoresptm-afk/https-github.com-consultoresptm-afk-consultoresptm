import { useState } from "react";
import blogData from "@/data/blog.json";
import { BookOpen, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 6;

export const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sorting by date as requested in user's instructions
  const sortedData = [...blogData].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = sortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleShare = (e: React.MouseEvent, slug: string, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/blog/${slug}`;
    if (navigator.share) {
      navigator.share({
        title,
        url
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      toast.success("Enlace copiado al portapapeles");
    }
  };

  return (
    <section id="blog" className="py-20 lg:py-32 bg-slate-50 border-t border-border">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-teal text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Base de Conocimiento
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-medium tracking-tight mb-6">
            Publicaciones Recientes
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            Actualidad normativa, guías técnicas y artículos de opinión en sostenibilidad, gestión ambiental y SST (Seguridad y Salud en el Trabajo).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              {/* Added an image for each article in the card to make it cohesive */}
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                  src={(post as any).imagen || `https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop`} 
                  alt={post.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded-full">
                    {post.categoria}
                  </span>
                  <time dateTime={post.fecha} className="text-xs text-gray-400 font-medium">
                    {new Date(post.fecha).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <h3 className="text-xl font-display font-medium text-gray-900 mb-3 group-hover:text-teal transition-colors line-clamp-2">
                  {post.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.seo_description}
                </p>
                <div className="mt-auto border-t border-gray-100 pt-5 flex items-center justify-between">
                  <span className="text-teal text-sm font-semibold flex items-center gap-2 transition-colors">
                    Leer artículo 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                  <button 
                    onClick={(e) => handleShare(e, post.slug, post.titulo)}
                    className="p-2 text-gray-400 hover:text-teal hover:bg-teal/5 rounded-full transition-colors"
                    aria-label="Compartir artículo"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 mx-4">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    currentPage === idx + 1 
                      ? "bg-teal text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
