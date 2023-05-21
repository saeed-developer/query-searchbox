import { resolve } from "node:path";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
const { EsLinter, linterPlugin } = EsLint;
import * as packageJson from "./package.json";
import removeConsole from "vite-plugin-remove-console";
import sassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    removeConsole(),
    sassDts({
      enabledMode: ["development", "production"],
 
      outputDir: resolve("src" , "./dist"),
    }),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ["src/components/"],
      outputDir: "dist/",
    }),
    svgr(),
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.tsx"),
      name: "Query-SearchBox",
      formats: ["es", "cjs"],
      fileName: (format) => `Query-SearchBox.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
