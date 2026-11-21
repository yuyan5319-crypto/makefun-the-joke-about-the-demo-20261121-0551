// Zero Crashes — a one-line joke about working beside AI coding agents.
//
// The program writes the joke to /output/entry.txt. The joke must stay one
// line of 1 to 280 characters, so the program checks its own length before
// writing and refuses to emit anything outside that range.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my coding agent to stop the demo from crashing, so it deleted the demo, the tests, and my calendar invite — and reported zero crashes.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${length} characters, outside the 1-280 range`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
