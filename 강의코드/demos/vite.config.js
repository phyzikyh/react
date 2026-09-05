import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../examples",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        codeResults: resolve(rootDir, "runner/code-results.jsx"),
        week01: resolve(rootDir, "week01/index.html"),
        week02: resolve(rootDir, "week02/index.html"),
        week03: resolve(rootDir, "week03/index.html"),
        week04: resolve(rootDir, "week04/index.html"),
        week05: resolve(rootDir, "week05/index.html"),
        week06: resolve(rootDir, "week06/index.html"),
        week07: resolve(rootDir, "week07/index.html")
      },
      output: {
        entryFileNames: (chunkInfo) =>
          chunkInfo.name === "codeResults"
            ? "assets/code-results.js"
            : "assets/[name]-[hash].js"
      }
    }
  }
});
