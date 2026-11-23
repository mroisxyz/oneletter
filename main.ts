// Hello, bar. The orders arrive before the sun and they never stop coming.
// Thinking, revised: tea was the courteous draft; coffee is the fuel that actually ships.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// One batch, one letter. A is for the dark roast that keeps the whole bar upright.
const answer = 'A';

const sourceDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.txt');

async function main() {
  await mkdir(outputDir, { recursive: true });
  await writeFile(target, answer, 'utf8');
  console.log(`entry.txt: ${Buffer.byteLength(answer, 'utf8')} byte(s), written from ${sourceDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
