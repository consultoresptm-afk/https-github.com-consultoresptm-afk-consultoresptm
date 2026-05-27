import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import blogData from "@/data/blog.json";
import { ChevronLeft, Share2, Calendar, Folder } from "lucide-react";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function BlogPost() {
  const { slug } = useParams();
  
  const post = blogData.find(p => p.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/#blog" replace />;
  }

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: post.titulo,
        url
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      toast.success("Enlace copiado al portapapeles");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-500/30">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 pt-8">
            <Link to="/#blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-teal transition-colors mb-8">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Volver al inicio
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
              <span className="flex items-center text-teal bg-teal/10 px-3 py-1.5 rounded-full">
                <Folder className="w-3.5 h-3.5 mr-1.5" />
                {post.categoria}
              </span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <time dateTime={post.fecha}>
                  {new Date(post.fecha).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-gray-900 tracking-tight leading-tight mb-8">
              {post.titulo}
            </h1>

            <div className="flex items-center justify-between border-y border-gray-200 py-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-display font-bold">
                  PTM
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Equipo Consultores PTM</div>
                  <div className="text-xs text-gray-500">Expertos en Gestión & Cumplimiento</div>
                </div>
              </div>
              
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:text-teal hover:border-teal/30 hover:bg-teal/5 transition-all text-sm font-medium"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Compartir artículo</span>
              </button>
            </div>
          </div>
          
          <div className="mb-12 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-200 border border-border shadow-sm">
             <img 
              src={(post as any).imagen || `https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1200&auto=format&fit=crop`} 
              alt={post.titulo}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>

          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-a:text-teal hover:prose-a:text-teal/80 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-li:marker:text-teal"
            dangerouslySetInnerHTML={{ __html: post.cuerpo_html }}
          />

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-teal/5 rounded-2xl p-8 sm:p-10 border border-teal/10 text-center">
              <h3 className="text-2xl font-display font-medium text-gray-900 mb-4">¿Necesita asesoría especializada?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                En Consultores PTM estamos listos para acompañar a su organización en el diseño, implementación y auditoría de sistemas de gestión integrales y cumplimiento normativo.
              </p>
              <Link 
                to="/#contacto" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-teal rounded-full hover:bg-teal/90 transition-all hover:shadow-lg shadow-teal/20"
              >
                Contactar a un experto
              </Link>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
