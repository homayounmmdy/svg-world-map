#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mapName = process.argv[2];

if (!mapName || mapName !== 'afghanistan') {
  console.error('Usage: npx add-map afghanistan');
  process.exit(1);
}

const src = path.join(__dirname, '../src/maps/optional/AF.ts');
const dest = path.join(process.cwd(), 'src/maps/AF.ts');

if (!fs.existsSync(src)) {
  console.error('❌ Afghanistan map not found in package');
  process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);

console.log(`
✅ Afghanistan map added to your project!

📝 Now register it in your code:

import { registerMapData, createMap } from 'your-package';
import afghanistanData from './src/maps/AF';

registerMapData('afghanistan', afghanistanData);

const map = createMap('afghanistan');
`);