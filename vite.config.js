import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import process from "process";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), manualChunksPlugin()],
  root: process.cwd(),
  base: "/",
  publicDir: "/public",
  resolve: {
    mainFields: ["module", "jsnext:main", "jsnext"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: [
      {
        find: "containers",
        replacement: path.resolve(__dirname, "src/containers"),
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
      {
        find: "styles",
        replacement: path.resolve(__dirname, "src/styles"),
      },
    ],
  },
  server: {
    host: "localhost",
    port: "3030",
    open: true,
  },
});
