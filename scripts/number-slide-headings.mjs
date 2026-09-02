import { readFileSync, writeFileSync } from "node:fs";

const file = process.argv[2];
if (!file) throw new Error("Usage: node number-slide-headings.mjs <slides.qmd>");

let number = 0;
let inFence = false;
const source = readFileSync(file, "utf8");
const output = source.split(/(?<=\n)/).map((line) => {
  if (/^\s*```/.test(line)) {
    inFence = !inFence;
    return line;
  }
  if (inFence || !line.startsWith("## ")) return line;
  number += 1;
  return line.replace(/^## (?:\d+\.\s*)?/, `## ${number}. `);
}).join("");

writeFileSync(file, output, "utf8");
console.log(`Numbered ${number} slide headings in ${file}`);
