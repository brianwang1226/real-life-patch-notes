import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "v2.4.1: fixed a bug where the bladder sent its low-battery warning 40 minutes after the last restroom, usually mid-meeting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
console.log(`chars: ${[...line].length}`);
