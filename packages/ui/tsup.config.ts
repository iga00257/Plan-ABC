import { defineConfig } from 'tsup'
import cssModulesPlugin from 'esbuild-plugin-css-modules'

export default defineConfig((options) => ({
  entryPoints: ['src/index.ts', 'src/styles/index.css'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  esbuildPlugins: [cssModulesPlugin()],
  external: ['react'],
  ...options,
}))
