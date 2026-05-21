// PTM site configuration — easy to update
export const siteConfig = {
  company: "Consultores PTM Gestión y Cumplimiento SAS",
  shortName: "PTM",
  tagline: "Gestión, cumplimiento y certificación con visión estratégica",
  // 👉 Reemplaza este enlace por el brochure final (PDF, Drive, Canva, Notion...)
  brochureUrl: "https://propuesta-ptm.vercel.app/",
  intranetUrl: "https://sistema-ptm.vercel.app/",
  whatsappNumber: "+573168203824",
  whatsappMessage: "Hola PTM, me interesa recibir asesoría personalizada.",
  email: "consultoresptm@gmail.com",
  city: "Bogotá D.C., Colombia",
};

const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
const defaultUserAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";

const isMobileDevice = (userAgent = defaultUserAgent) =>
  /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);

const buildWhatsAppLink = (customMessage?: string, userAgent = defaultUserAgent) => {
  const msg = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);

  return isMobileDevice(userAgent)
    ? `https://wa.me/${cleanNumber}?text=${msg}`
    : `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${msg}&type=phone_number&app_absent=0`;
};

export const whatsappLink = buildWhatsAppLink();

export const openWhatsApp = (customMessage?: string) => {
  const url = buildWhatsAppLink(customMessage);
  const win = window.open(url, "_blank", "noopener,noreferrer");

  if (!win) {
    window.location.href = url;
  }
};
