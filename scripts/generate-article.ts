import fs from 'fs';

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const dataPath = './src/data/blog.json';

// Cargar artículos existentes
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Mapeo de términos de búsqueda en Pexels por categoría
const categoryQueries: Record<string, string[]> = {
  "Gestión Ambiental": ["environment industry", "solar panels", "green corporate", "wind turbine", "nature protection"],
  "SST": ["worker safety", "industrial safety", "construction worker helmet", "factory engineer", "warehouse safety"],
  "Sostenibilidad y ESG": ["sustainability corporate", "eco friendly business", "sustainable energy", "business tree", "modern green office"],
  "Gestión de Calidad": ["quality control inspector", "laboratory audit", "business meeting tablet", "production check", "manufacturing quality"],
  "Certificaciones y Trámites": ["business handshake", "signing contract", "corporate documents", "professional meeting", "legal paperwork"]
};

// Seleccionar un artículo aleatorio como base (plantilla)
const randomBaseIndex = Math.floor(Math.random() * data.length);
const baseArticle = data[randomBaseIndex];

async function generateArticle() {
  const newId = Math.max(...data.map((p: any) => p.id)) + 1;
  const today = new Date().toISOString().split('T')[0];
  const queryList = categoryQueries[baseArticle.categoria] || ["industry professional"];
  const randomQuery = queryList[Math.floor(Math.random() * queryList.length)];
  
  let newImage = baseArticle.imagen; // Fallback por defecto

  // Si tenemos API Key de Pexels, buscamos una imagen nueva
  if (PEXELS_API_KEY) {
    try {
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(randomQuery)}&per_page=15&orientation=landscape`;
      const response = await fetch(url, {
        headers: { Authorization: PEXELS_API_KEY }
      });
      const json = await response.json();
      
      if (json.photos && json.photos.length > 0) {
        // Seleccionamos una imagen al azar de los resultados
        const randomPhoto = json.photos[Math.floor(Math.random() * json.photos.length)];
        newImage = randomPhoto.src.large2x || randomPhoto.src.large;
      }
    } catch (error) {
      console.error("Error obteniendo nueva imagen de Pexels:", error);
    }
  }

  // Generamos el nuevo artículo
  const newArticle = {
    ...baseArticle,
    id: newId,
    titulo: `${baseArticle.titulo.split(':')[0]} - Actualización ${today}`,
    slug: `${baseArticle.slug}-act-${Date.now()}`,
    fecha: today,
    imagen: newImage,
    seo_description: `Actualización automática de nuestro blog sobre ${baseArticle.categoria}. ${baseArticle.seo_description}`
  };

  // Agregar al inicio o final
  data.push(newArticle);
  
  // Guardar en el archivo
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`[Éxito] Nuevo artículo generado: "${newArticle.titulo}" con ID ${newId}`);
}

generateArticle();
