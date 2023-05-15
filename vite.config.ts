import { resolve } from 'node:path'
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'

const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),

    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/component/'],
    }),
    svgr()
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.tsx'),
      name: 'Query-SearchBox',
      formats: ['es', 'umd'],
      fileName: (format) => `Query-SearchBox.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))