import { build } from 'esbuild'

build({
    entryPoints: ['src/content/main.ts'],
    outfile: 'dist/content/content.js',
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: 'es2017',
})
