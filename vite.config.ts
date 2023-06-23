import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
