// scripts/optimize-images.mjs
//
// Recursively finds every .jpg/.jpeg/.png under src/static/images,
// resizes (max width, capped, never upscales) and converts each to WebP.
//
// Usage:
//   node scripts/optimize-images.mjs
//
// Requires: npm install -D sharp

import sharp from "sharp"
import { readdirSync, statSync, mkdirSync } from "fs"
import { join, extname, basename, dirname, relative } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

// Adjust this if your script lives somewhere other than apps/web/scripts
const SOURCE_DIR = join(__dirname, "..", "public", "images")

const MAX_WIDTH = 1920 // change if you need bigger hero images
const QUALITY = 80 // 0-100, 80 is a good visual-quality/size tradeoff
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"])

let processed = 0
let skipped = 0
let totalOriginalBytes = 0
let totalNewBytes = 0

function walk(dir) {
  const entries = readdirSync(dir)

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      walk(fullPath)
      continue
    }

    const ext = extname(entry).toLowerCase()
    if (!IMAGE_EXTENSIONS.has(ext)) continue

    // Skip files that are already optimized output (avoid re-processing)
    if (entry.includes(".optimized.")) continue

    processFile(fullPath, stats.size)
  }
}

async function processFile(fullPath, originalSize) {
  const dir = dirname(fullPath)
  const name = basename(fullPath, extname(fullPath))
  const outputPath = join(dir, `${name}.webp`)

  try {
    await sharp(fullPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    const newSize = statSync(outputPath).size
    totalOriginalBytes += originalSize
    totalNewBytes += newSize
    processed++

    const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(0)
    console.log(
      `✓ ${relative(SOURCE_DIR, fullPath)} -> ${relative(SOURCE_DIR, outputPath)} ` +
        `(${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB, -${saved}%)`
    )
  } catch (err) {
    skipped++
    console.error(`✗ Failed: ${relative(SOURCE_DIR, fullPath)} — ${err.message}`)
  }
}

async function run() {
  console.log(`Scanning ${SOURCE_DIR}...\n`)

  try {
    statSync(SOURCE_DIR)
  } catch {
    console.error(`Source directory not found: ${SOURCE_DIR}`)
    console.error(`Edit SOURCE_DIR at the top of this script if your path differs.`)
    process.exit(1)
  }

  // Collect all matching files first so we can await them in sequence
  // (sequential keeps memory/CPU usage predictable for large image sets)
  const files = []
  collectFiles(SOURCE_DIR, files)

  for (const { path, size } of files) {
    await processFile(path, size)
  }

  console.log(`\nDone. ${processed} converted, ${skipped} failed.`)
  if (totalOriginalBytes > 0) {
    const totalSavedPct = (
      ((totalOriginalBytes - totalNewBytes) / totalOriginalBytes) *
      100
    ).toFixed(0)
    console.log(
      `Total: ${(totalOriginalBytes / 1024 / 1024).toFixed(2)}MB -> ` +
        `${(totalNewBytes / 1024 / 1024).toFixed(2)}MB (-${totalSavedPct}%)`
    )
  }
  console.log(
    `\nOriginal files were left untouched — update your imports to point at the new .webp files.`
  )
}

function collectFiles(dir, results) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      collectFiles(fullPath, results)
      continue
    }

    const ext = extname(entry).toLowerCase()
    if (!IMAGE_EXTENSIONS.has(ext)) continue
    if (entry.includes(".optimized.")) continue

    results.push({ path: fullPath, size: stats.size })
  }
}

run()
