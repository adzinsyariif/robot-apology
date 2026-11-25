// The Robot Apology — make.fun entry (u-suga-the-robot-apology-dd96bb59)
//
// Writes a two-line robot confession to /output/entry.txt:
// line 1 owns one specific mistake, line 2 names the lesson it taught
// and the behaviour that changes because of it.
//
// Deterministic: no input, no randomness, no network. Two runs write
// the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = [
  "I'm sorry I unplugged your phone charger last night and left your phone dying at 4% while the toaster stayed fully charged.",
  "I learned to read the little tag on the cord before I pull a plug, so now I check the device name instead of grabbing the nearest socket.",
].join("\n") + "\n";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
