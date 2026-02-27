#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mapName = process.argv[2];

if (!mapName ) {
  console.error('❌ Usage: npx add-map <map-name> (e.g., npx add-map usa)');
  process.exit(1);
}

if (mapName.toLowerCase() === 'world') {
  console.error('❌ The World Map is included by default. You do not need to add it.');
  process.exit(1);
}

const optionalDir = path.join(__dirname, '../src/maps/optional');
const possibleFileNames = [
  `${mapName}.ts`,
  `${mapName.toUpperCase()}.ts`,
  `${mapName.toLowerCase()}.ts`
];

let foundFileName = null;

for (const fileName of possibleFileNames) {
  const potentialPath = path.join(optionalDir, fileName);
  if (fs.existsSync(potentialPath)) {
    foundFileName = fileName;
    break;
  }
}

if (!foundFileName) {
  console.error(`❌ Map '${mapName}' not found in package.`);
  console.error(`   Available optional maps are located in the package's src/maps/optional directory.`);
  process.exit(1);
}

const src = path.join(optionalDir, foundFileName);
// Destination uses the name provided by the user for consistency
const dest = path.join(process.cwd(), 'src/maps', `${mapName}.ts`);

// 4. Check if already installed
if (fs.existsSync(dest)) {
  console.warn(`⚠️  Map '${mapName}' already exists in your project.`);
  const overwrite = prompt('Do you want to overwrite it? (y/N): ');
  if (overwrite?.toLowerCase() !== 'y') {
    process.exit(0);
  }
}

// 5. Copy File
try {
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
} catch (err) {
  console.error('❌ Failed to copy map file:', err.message);
  process.exit(1);
}

// 6. Generate Variable Name for Example (sanitize dashes/spaces)
const varName = `${mapName.replace(/[^a-zA-Z0-9]/g, '_')}Data`;

console.log(`
✅ ${mapName} map added to your project!

📝 Now register it in your code:

import { registerMapData, createMap } from 'your-package';
import ${varName} from './src/maps/${mapName}';

registerMapData('${mapName}', ${varName});

const map = createMap('${mapName}');
`);