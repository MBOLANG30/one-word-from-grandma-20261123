// One Word From Grandma — make.fun entry.
//
// The bounty asks for exactly one word: the single word grandma would
// text about AI. This program writes that word to entry.txt and nothing
// else. The word is "robit": the typo grandma would actually make when
// she means "robot". Warm, a little baffled, funny on its own, and tied
// to machines — the way she would type it to a grandchild.
//
// The grader runs this file with Node 22 and a mounted output folder.
// The folder comes from MAKEFUN_OUTPUT_DIR when the harness sets it and
// defaults to /output. This program only creates the folder if needed
// and writes one file into it; it never deletes anything.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "robit";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error("entry word must be 1 to 30 non-blank characters");
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, with no spaces");
}

writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
console.log(`wrote ${WORD.length}-character entry to ${join(outputDir, "entry.txt")}`);
