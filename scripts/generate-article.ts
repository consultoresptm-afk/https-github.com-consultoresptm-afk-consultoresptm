import fs from 'fs';
import Groq from 'groq-sdk';

// Initialize API keys from environment variables
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const dataPath = './src/data/blog.json';

async function generateArticle() {
  if (!GROQ_API_KEY) {
    console.error("Error: GROQ_API_KEY no está configurada.");
    process.exit(1);
  }
  if (!PEXELS_API_KEY) {
    console.error("Error: PEXELS_API_KEY no está configurada. Agrega este secreto en GitHub.");
    process.exit(1);
  }

  console.log("Cargando la base de artículos...");
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Extraer títulos recientes para decirle a la IA que no los repita
  const recentTitles = data.slice(0, 20).map((p: any) => p.titulo).join("\n- ");
  
  const categories = [
    "Gestión Ambiental",
    "SST",
    "Sostenibilidad y ESG",
    "Gestión de Calidad",
    "Certificaciones y Trámites"
  ];
  const targetCategory = categories[Math.floor(Math.random() * categories.length)];

  console.log(`Solicitando a Groq un artículo sobre: ${targetCategory}...`);
  
  const groq = new Groq({ apiKey: GROQ_API_KEY });
  
  const prompt = `Escribe un artículo de blog sobre normativas en Colombia y buenas prácticas empresariales internacionales.
  Debe centrarse en novedades, leyes derogadas, actualizaciones normativas recientes o tendencias críticas para empresas.
  La temática principal u obligatoria es: "${targetCategory}".
  
  REGLAS:
  1. El artículo DEBE SER COMPLETAMENTE NUEVO.
  2. PROHIBIDO repetir temas similares a los siguientes títulos históricos:
  - ${recentTitles}
  3. El tono debe ser institucional, consultivo, aportando gran valor técnico a gerentes, directores y coordinadores de sistemas de gestión.
  4. Formatea el artículo usando HTML estrictamente organizado. Usa <h2>, <p>, <ul>, <li> y <strong> obligatoriamente. No uses <html>, <body> ni estilos integrados.
  
  Devuelve la respuesta estrictamente en formato JSON con la siguiente estructura (no incluyas formato markdown ni texto adicional):
  {
    "titulo": "Título profesional llamativo",
    "slug": "slug-amigable-url",
    "categoria": "${targetCategory}",
    "seo_description": "Resumen persuasivo muy directo. Máximo 150 caracteres",
    "cuerpo_html": "Todo el cuerpo del documento usando las etiquetas semánticas de HTML",
    "pexels_search_query": "Máximo 3 palabras EN INGLÉS, ideal para buscar una foto pertinente en stock"
  }`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a specialized content generator agent. You must exclusively return valid JSON. Do not include markdown tags like \`\`\`json."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama3-70b-8192",
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    const outputText = chatCompletion.choices[0]?.message?.content || "{}";
    const generatedContent = JSON.parse(outputText);

    console.log(`Tema generado exitosamente: "${generatedContent.titulo}"`);
    
    let newImage = "";
    try {
      const pexelsUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(generatedContent.pexels_search_query)}&per_page=15&orientation=landscape`;
      const pexelsRes = await fetch(pexelsUrl, { headers: { Authorization: PEXELS_API_KEY } });
      const json = await pexelsRes.json();
      
      if (json.photos && json.photos.length > 0) {
        // Validar también en Pexels que no hayamos usado la imagen antes
        const usedImageIds = new Set(data.map((p: any) => p.imagen));
        
        for (const photo of json.photos) {
          const imgUrl = photo.src.large2x || photo.src.large;
          if (!usedImageIds.has(imgUrl)) {
            newImage = imgUrl;
            break;
          }
        }
        if (!newImage) newImage = json.photos[0].src.large2x || json.photos[0].src.large;
      }
    } catch (e) {
      console.error("No se pudo obtener imagen específica de Pexels, se configurará una por defecto.", e);
    }

    if (!newImage) {
       newImage = "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1200&auto=format&fit=crop";
    }

    const newId = Math.max(...data.map((p: any) => p.id), 0) + 1;
    const today = new Date().toISOString().split('T')[0];

    const newArticle = {
      id: newId,
      titulo: generatedContent.titulo,
      slug: generatedContent.slug,
      fecha: today,
      categoria: generatedContent.categoria,
      imagen: newImage,
      seo_description: generatedContent.seo_description,
      cuerpo_html: generatedContent.cuerpo_html
    };

    // Agregamos al comienzo para que sea el primero en mostrarse en el blog
    data.unshift(newArticle);
    
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    console.log(`[Éxito] Nuevo artículo procesado e insertado satisfactoriamente en blog.json.`);

  } catch (err) {
    console.error("Hubo un error crítico en el flujo de generación con Groq:", err);
    process.exit(1);
  }
}

generateArticle();
