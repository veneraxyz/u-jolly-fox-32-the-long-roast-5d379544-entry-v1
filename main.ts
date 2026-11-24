import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry =
  "My agent spent 40 minutes 'researching', cited three sources, then delivered an answer so confidently wrong it should list hallucinating as a core skill on its resume.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
