import { build } from "vite";
import react from "@vitejs/plugin-react";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(here, "../../강의교재/react-demos");

const demos = [
  ["header", "머리말과 메뉴"],
  ["introduction", "소개 영역"],
  ["project", "프로젝트 카드"],
  ["contact", "이메일 입력 양식"],
  ["footer", "바닥글"],
  ["values", "JavaScript 값 사용"],
  ["course", "텍스트 링크와 이미지"],
];

await mkdir(outputDir, { recursive: true });

for (const [name, title] of demos) {
  const result = await build({
    configFile: false,
    root: here,
    plugins: [react()],
    define: { "process.env.NODE_ENV": '"production"' },
    build: {
      write: false,
      minify: true,
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
  const script = chunk.code.replaceAll("</script", "<\\/script");
  const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">${script}</script>
  </body>
</html>
`;

  await writeFile(resolve(outputDir, `${name}.html`), html, "utf8");
}
