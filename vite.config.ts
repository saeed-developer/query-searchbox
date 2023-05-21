import { resolve } from "node:path";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
const { EsLinter, linterPlugin } = EsLint;
import * as packageJson from "./package.json";
import removeConsole from "vite-plugin-remove-console";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    removeConsole(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    svgr(),
    typescript({
      sourceMap: false,
      declaration: true,
      outDir: "dist",
    }),
  ],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve("src", "components/index.tsx"),
      name: "main",
      formats: ["es", "cjs"],
      // fileName: (format) => `Query-SearchBox.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
