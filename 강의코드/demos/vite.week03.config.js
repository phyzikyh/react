import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../../강의교재/examples/week03-practice",
    emptyOutDir: false,
    rollupOptions: { input: {
      receipt: fileURLToPath(new URL("./week03-receipt/index.html", import.meta.url)),
      travel: fileURLToPath(new URL("./week03-travel/index.html", import.meta.url)),
    } },
  },
});

