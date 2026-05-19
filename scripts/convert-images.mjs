/**
 * Converts PNG/JPG images to WebP using sharp.
 * Run once: node scripts/convert-images.mjs
 * Safe to re-run — skips files that already have a .webp counterpart.
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");

const QUALITY = 82;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let converted = 0;
let skipped = 0;
let saved = 0;

for await (const file of walk(PUBLIC_DIR)) {
  const ext = extname(file).toLowerCase();
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") continue;

  const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");

  // Skip if already converted
  try {
    await stat(webpPath);
    skipped++;
    continue;
  } catch {}

  const originalSize = (await stat(file)).size;
  await sharp(file).webp({ quality: QUALITY }).toFile(webpPath);
  const newSize = (await stat(webpPath)).size;
  const reduction = Math.round((1 - newSize / originalSize) * 100);
  saved += originalSize - newSize;

  const rel = file.replace(PUBLIC_DIR, "");
  console.log(`✓ ${rel}  ${kb(originalSize)} → ${kb(newSize)}  (−${reduction}%)`);
  converted++;
}

console.log(`\nDone. ${converted} converted, ${skipped} skipped.`);
console.log(`Total saved: ${kb(saved)}`);

function kb(bytes) {
  return bytes > 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}
