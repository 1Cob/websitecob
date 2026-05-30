#!/usr/bin/env node
/* =========================================================
   Müzik listesi üretici
   assets/music/ klasörünü tarar ve assets/music/tracks.json üretir.
   Kullanım (proje kök dizininde):  node tools/generate-music.mjs
   Dosya adı "Sanatçı - Şarkı.mp3" ise ikisini ayırır.
   ========================================================= */
import { readdirSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "assets", "music");
const EXT = [".mp3", ".m4a", ".ogg", ".wav", ".flac", ".aac"];

if (!existsSync(DIR)) { console.error("Klasör yok:", DIR); process.exit(1); }

const files = readdirSync(DIR)
  .filter((f) => EXT.some((e) => f.toLowerCase().endsWith(e)))
  .sort((a, b) => a.localeCompare(b, "tr"));

const tracks = files.map((file) => {
  const name = file.replace(/\.[^.]+$/, "").replace(/_/g, " ").trim();
  if (name.includes(" - ")) {
    const p = name.split(" - ");
    return { file, artist: p[0].trim(), title: p.slice(1).join(" - ").trim() };
  }
  return { file, artist: "COB", title: name };
});

writeFileSync(join(DIR, "tracks.json"), JSON.stringify({ tracks }, null, 2) + "\n");
console.log(`✓ ${tracks.length} parça yazıldı → assets/music/tracks.json`);
tracks.forEach((t) => console.log(`   • ${t.artist} — ${t.title}`));
if (!tracks.length) console.log("   (klasörde ses dosyası yok)");
