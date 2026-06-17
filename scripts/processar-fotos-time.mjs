/**
 * Converte e centraliza as fotos do time para o card aspect-[3/5].
 * - Jorge: 900x1600 (9:16) → corta para 900x1500 (3:5) do topo, mantendo rosto
 * - Nicolas: 2316x3088 (3:4) → corta para 1853x3088 (3:5) centrando horizontalmente
 * Salva como WebP em public/time/
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/time");

async function processarJorge() {
  const input = "C:/Users/SAMSUNG/Downloads/FOTO JORGE LP.jpeg";
  const output = path.join(OUT_DIR, "jorge.webp");

  const meta = await sharp(input).metadata();
  const { width, height } = meta;

  // Proporção 3:5 mantendo largura total, corta from top (cabeça no topo do crop)
  const cropHeight = Math.round(width * (5 / 3));
  const cropTop = 0; // começa do topo — preserva rosto/cabeça

  console.log(`Jorge original: ${width}x${height}`);
  console.log(`Crop: ${width}x${cropHeight} @ top=${cropTop}`);

  await sharp(input)
    .extract({ left: 0, top: cropTop, width, height: Math.min(cropHeight, height) })
    .resize(600, 1000, { fit: "fill" })
    .webp({ quality: 85 })
    .toFile(output);

  console.log(`✅ Jorge salvo em ${output}`);
}

async function processarNicolas() {
  const input = "C:/Users/SAMSUNG/Downloads/Foto nicolas.HEIC";
  const output = path.join(OUT_DIR, "nicolas.webp");

  const meta = await sharp(input).metadata();
  const { width, height } = meta;

  // Proporção 3:5: manter altura total, cortar largura centralizando horizontalmente
  const cropWidth = Math.round(height * (3 / 5));
  const cropLeft = Math.round((width - cropWidth) / 2);

  console.log(`Nicolas original: ${width}x${height}`);
  console.log(`Crop: ${cropWidth}x${height} @ left=${cropLeft}`);

  await sharp(input)
    .extract({ left: cropLeft, top: 0, width: Math.min(cropWidth, width), height })
    .resize(600, 1000, { fit: "fill" })
    .webp({ quality: 85 })
    .toFile(output);

  console.log(`✅ Nicolas salvo em ${output}`);
}

async function main() {
  try {
    await processarJorge();
    await processarNicolas();
    console.log("\n✅ Ambas as fotos processadas com sucesso!");
  } catch (err) {
    console.error("Erro:", err.message);
    process.exit(1);
  }
}

main();
