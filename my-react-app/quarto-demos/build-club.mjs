// 동아리 소개 사이트(club) 데모를 스타일까지 포함한 단독 HTML로 빌드합니다.
// JS 청크와 CSS 자산을 모두 추출해 하나의 HTML 파일에 인라인합니다.
import { build } from "vite";
import react from "@vitejs/plugin-react";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(here, "../../강의교재/react-demos");

const name = "club";
const title = "CodeMate 동아리 소개 사이트";

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
      input: resolve(here, name, "main.jsx"),
      output: {
        format: "es",
        inlineDynamicImports: true,
      },
    },
  },
});

const outputs = Array.isArray(result) ? result.flatMap((item) => item.output) : result.output;
const chunk = outputs.find((item) => item.type === "chunk");
const cssAsset = outputs.find((item) => item.type === "asset" && item.fileName.endsWith(".css"));

const script = chunk.code.replaceAll("</script", "<\\/script");
const css = cssAsset ? String(cssAsset.source) : "";

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

await writeFile(resolve(outputDir, `${name}.html`), html, "utf8");
console.log(`Built ${name}.html (${(html.length / 1024).toFixed(1)} KB) -> ${outputDir}`);
