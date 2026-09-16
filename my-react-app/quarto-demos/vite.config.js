import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: here,
  base: "./",
  plugins: [react()],
  build: {
    outDir: resolve(here, "../../강의교재/react-demos"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        header: resolve(here, "header.html"),
        introduction: resolve(here, "introduction.html"),
        project: resolve(here, "project.html"),
        contact: resolve(here, "contact.html"),
        footer: resolve(here, "footer.html"),
      },
    },
  },
});
