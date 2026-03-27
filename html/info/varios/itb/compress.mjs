import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const html_file = './itb_simulador.html';
console.log('Lendo HTML...');
let html = readFileSync(html_file, 'utf8');

const regex = /data:image\/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=]+)/g;
let match;
let count = 0;
let totalAntes = 0;
let totalDepois = 0;
const replacements = [];

while ((match = regex.exec(html)) !== null) {
  const full = match[0];
  const tipo = match[1];
  const b64 = match[2];
  const buffer = Buffer.from(b64, 'base64');
  totalAntes += buffer.length;
  const compressed = await sharp(buffer).webp({ quality: 75 }).toBuffer();
  totalDepois += compressed.length;
  replacements.push({ original: full, novo: 'data:image/webp;base64,' + compressed.toString('base64') });
  count++;
  console.log('Imagem ' + count + ' comprimida...');
}

for (const r of replacements) {
  html = html.replace(r.original, r.novo);
}

writeFileSync('./itb_simulador_compressed.html', html, 'utf8');
console.log('Concluido!');
console.log('Imagens: ' + count);
console.log('Antes:  ' + (totalAntes / 1024 / 1024).toFixed(1) + ' MB');
console.log('Depois: ' + (totalDepois / 1024 / 1024).toFixed(1) + ' MB');