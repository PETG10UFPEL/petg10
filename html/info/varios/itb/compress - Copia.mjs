import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, dirname, basename } from 'path';

// Aponte para a pasta onde estão as imagens do seu projeto HTML
const TARGET_DIR = '.';

function findImages(dir) {
  let results = [];
  for (const file of readdirSync(dir)) {
    const full = join(dir, file);
    if (statSync(full).isDirectory() && !file.includes('node_modules')) {
      results = results.concat(findImages(full));
    } else if (['.png', '.jpg', '.jpeg'].includes(extname(file).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

const images = findImages(TARGET_DIR);
console.log(`Encontradas ${images.length} imagens...`);

for (const img of images) {
  const out = join(dirname(img), basename(img, extname(img)) + '.webp');
  await sharp(img).webp({ quality: 80 }).toFile(out);
  const orig = statSync(img).size;
  const novo = statSync(out).size;
  const reducao = (((orig - novo) / orig) * 100).toFixed(1);
  console.log(`✓ ${basename(img)} → ${basename(out)} (redução: ${reducao}%)`);
}

console.log('\nConcluído! Verifique as imagens .webp geradas.');