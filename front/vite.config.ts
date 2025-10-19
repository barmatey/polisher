import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'




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
                    src: 'src/assets/buttons.css', // popup html
                    dest: 'content/',
                },
                {
                    src: 'manifest.json', // manifest
                    dest: '',
                },
            ],
        }),

    ],
    resolve: {
    },
    build: {
        rollupOptions: {
            input: {
                popup: 'src/popup/main.ts',
                background: 'src/background/main.ts',
            },
            output: {
                // format выбирается индивидуально для каждой сборки ниже
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'popup') return 'main.js'
                    if (chunkInfo.name === 'background') return 'background.js'
                    throw new Error(`Unknown chunk ${chunkInfo.name}`)
                },
            },
        },
    },
})
