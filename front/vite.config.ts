// vite.config.ts
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { fileURLToPath } from 'node:url'
import esbuild from 'rollup-plugin-esbuild'




export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/popup/index.html', // popup html
                    dest: '',
                },
                {
                    src: 'manifest.json', // manifest
                    dest: '',
                },
            ],
        }),

    ],
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            input: {
                popup: 'src/popup/main.ts',
                content: 'src/content/main.ts',
                background: 'src/background/main.ts',
            },
            output: {
                // format выбирается индивидуально для каждой сборки ниже
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'popup') return 'main.js'
                    if (chunkInfo.name === 'content') return 'content.js'
                    if (chunkInfo.name === 'background') return 'background.js'
                    throw new Error(`Unknown chunk ${chunkInfo.name}`)
                },
            },
        },
    },
})
