import { build } from "vite";
import react from "@vitejs/plugin-react";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const name = "week06-travel";
const title = "부천 여행 · 6주차 React Hook 실습";
const outputDir = resolve(here, "../../강의교재/react-demos");

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
      input: resolve(here, name, "main.jsx"),
      output: { format: "es", inlineDynamicImports: true },
    },
  },
});

const outputs = Array.isArray(result) ? result.flatMap((item) => item.output) : result.output;
const chunk = outputs.find((item) => item.type === "chunk");
const cssAsset = outputs.find((item) => item.type === "asset" && item.fileName.endsWith(".css"));
if (!chunk || !cssAsset) throw new Error("React 코드 또는 CSS 빌드 결과가 없습니다.");

const script = chunk.code.replaceAll("</script", "<\\/script");
const css = String(cssAsset.source).replaceAll("</style", "<\\/style");
const html = `<!doctype html>
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

await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, `${name}.html`), html, "utf8");
console.log(`Built ${name}.html`);
