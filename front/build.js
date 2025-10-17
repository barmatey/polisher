import { build } from 'esbuild'
import vuePlugin from 'esbuild-plugin-vue-next'

await build({
    entryPoints: ['src/content/main.ts'],
    outfile: 'dist/content/content.js',
    bundle: true,
    format: 'iife',         // для content script
    platform: 'browser',
    target: 'es2017',
    plugins: [vuePlugin()],
    minify: false,
})
