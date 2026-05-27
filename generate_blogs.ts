import fs from 'fs';

const baseData = JSON.parse(fs.readFileSync('./src/data/blog.json', 'utf8'));

const newArticles = [];
let idCounter = 6;

for (let i = 0; i < 20; i++) {
  const base = baseData[i % 5];
  const date = new Date(new Date("2026-05-25").getTime() - (i + 5) * 86400000 * 2).toISOString().split('T')[0];
  
  newArticles.push({
    ...base,
    id: idCounter++,
    titulo: `${base.titulo.split(':')[0]} - Caso Práctico ${idCounter}`,
    slug: `${base.slug}-caso-practico-${idCounter}`,
    fecha: date,
    cuerpo_html: base.cuerpo_html.replace('</h2>', ' (Actualización de Casos Prácticos)</h2>'),
    seo_description: `Análisis y actualización sobre ${base.categoria}. ${base.seo_description}`
  });
}

const fullData = [...baseData, ...newArticles];
fs.writeFileSync('./src/data/blog.json', JSON.stringify(fullData, null, 2));
