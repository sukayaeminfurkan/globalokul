import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const svg = readFileSync(join(root, 'public/og.svg'));
await sharp(svg)
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(join(root, 'public/og.png'));

console.log('✓ public/og.png oluşturuldu (1200x630)');
