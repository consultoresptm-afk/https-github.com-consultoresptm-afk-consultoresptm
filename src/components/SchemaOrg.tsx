import { Helmet } from "react-helmet-async";

export const SchemaOrg = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Consultores PTM Gestión y Cumplimiento SAS",
    "url": "https://consultoresptm.com",
    "logo": "https://consultoresptm.com/Logo_corporativo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+573168203824",
      "contactType": "customer service",
      "email": "consultoresptm@gmail.com",
      "areaServed": "CO",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.linkedin.com/company/consultoresptm"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Consultores PTM Gestión y Cumplimiento SAS",
    "image": "https://consultoresptm.com/Logo_corporativo.png",
    "@id": "https://consultoresptm.com",
    "url": "https://consultoresptm.com",
    "telephone": "+573168203824",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrera 7 No. 156-68",
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "postalCode": "110111",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.6097,
      "longitude": -74.0817
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  const servicesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Certificación ISO 9001",
      "provider": { "@type": "Organization", "name": "Consultores PTM" },
      "description": "Consultoría e implementación de Sistemas de Gestión de la Calidad ISO 9001."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Certificación ISO 14001",
      "provider": { "@type": "Organization", "name": "Consultores PTM" },
      "description": "Consultoría e implementación de Sistemas de Gestión Ambiental ISO 14001."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Certificación ISO 45001",
      "provider": { "@type": "Organization", "name": "Consultores PTM" },
      "description": "Consultoría e implementación de Sistemas de Gestión de Seguridad y Salud en el Trabajo ISO 45001."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Certificación BASC",
      "provider": { "@type": "Organization", "name": "Consultores PTM" },
      "description": "Sistemas de gestión en control y seguridad para el comercio internacional."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma certificar una PYME en ISO 9001 en Colombia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo promedio varía entre 6 a 10 meses, dependiendo del tamaño de la organización y el compromiso de la alta gerencia."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué beneficios tiene la ISO 14001 para una empresa colombiana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permite el cumplimiento normativo ambiental, reduce costos operativos mediante la eficiencia de recursos y mejora la imagen corporativa ante licitaciones públicas y privadas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es obligatorio el sistema de gestión ISO 45001?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aunque la norma ISO 45001 es voluntaria, en Colombia existe el Decreto 1072 que obliga a implementar el SG-SST; la certificación ISO 45001 eleva este estándar a nivel internacional."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es la certificación BASC y quién la requiere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es una alianza empresarial internacional que promueve un comercio seguro. Es fundamental para exportadores, transportadores y operadores logísticos en Colombia."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué elegir a Consultores PTM para mi certificación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contamos con más de 20 años de experiencia, un enfoque práctico diseñado para PYMEs y un 100% de éxito en procesos de auditoría externa."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
