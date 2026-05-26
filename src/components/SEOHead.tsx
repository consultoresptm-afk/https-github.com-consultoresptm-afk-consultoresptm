import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEOHead = ({
  title = "Consultores PTM | Gestión, Cumplimiento y Certificaciones ISO",
  description = "Consultoría empresarial certificada para PYMEs en Colombia. Estrategia, gestión, cumplimiento normativo y certificaciones ISO 9001, 14001, 45001. +20 años de experiencia.",
  keywords = "consultoría empresarial, certificaciones ISO Colombia, ISO 9001 Bogotá, ISO 14001, ISO 45001, BASC, cumplimiento normativo PYMEs, gestión de calidad",
  canonical = "https://consultoresptm.com/"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>
      <meta name="title" content={title} />
      
      {/* Meta tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://consultoresptm.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://consultoresptm.com/og-image.jpg" />
    </Helmet>
  );
};
