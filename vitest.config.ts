import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/mocks/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: false,
  },
});
