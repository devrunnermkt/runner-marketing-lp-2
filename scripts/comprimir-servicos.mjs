import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve("public/servicos");
const MAX_W = 800; // cards exibem ~320px; 800px cobre telas retina

const files = await readdir(dir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".webp", ".png"].includes(ext)) continue;

  const full = path.join(dir, file);
  const before = (await stat(full)).size;

  // Converte tudo para .webp (melhor compressão) com largura máxima de 800px
  const base = path.basename(file, ext);
  const out = path.join(dir, `${base}.webp`);

  // Já é .webp (não reprocessa para evitar ler/escrever o mesmo arquivo)
  if (out === full) {
    console.log(`${file}  (ja e webp, mantido - ${(before / 1024).toFixed(0)}KB)`);
    continue;
  }

  const buf = await sharp(full)
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toBuffer();

  await writeFile(out, buf);
  const after = buf.length;

  console.log(
    `${file} -> ${base}.webp  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
  );
}
