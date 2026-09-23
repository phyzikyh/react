// 인스타 피드 발전시키기 실습의 완성본을 스타일 포함 단독 HTML로 빌드합니다.
import { build } from "vite";
import react from "@vitejs/plugin-react";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(here, "../../강의교재/react-demos");

const inputName = "insta";
const outName = "week05-feed-plus";
const title = "인스타그램 피드 발전시키기 완성본";

await mkdir(outputDir, { recursive: true });

const result = await build({
  configFile: false,
  root: here,
  plugins: [react()],
  define: { "process.env.NODE_ENV": '"production"' },
  build: {
    write: false,
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(here, inputName, "main.jsx"),
      output: { format: "es", inlineDynamicImports: true },
    },
  },
});

const outputs = Array.isArray(result) ? result.flatMap((i) => i.output) : result.output;
const chunk = outputs.find((i) => i.type === "chunk");
const cssAsset = outputs.find((i) => i.type === "asset" && i.fileName.endsWith(".css"));
const script = chunk.code.replaceAll("</script", "<\\/script");
const css = cssAsset ? String(cssAsset.source) : "";

const htmlOut = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">${script}</script>
  </body>
</html>
`;

await writeFile(resolve(outputDir, `${outName}.html`), htmlOut, "utf8");
console.log(`Built ${outName}.html (${(htmlOut.length / 1024).toFixed(1)} KB) -> ${outputDir}`);
