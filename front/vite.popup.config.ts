import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import {fileURLToPath} from "node:url";


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        viteStaticCopy({
            targets: [
                // {
                //     src: 'src/background/main.ts', // Source path
                //     dest: 'background', // Destination folder inside dist
                // },
                {
                    src: 'src/popup/index.html', // Source path
                    dest: '' // Destination folder is dist itself
                }
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    build: {
        rollupOptions: {
            input: {
                popup: "src/popup/main.ts",
            },
            output: {
                format: 'iife',
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'popup') return 'main.js';
                    throw Error(`Unknown chunk ${chunkInfo.name}`);
                },
            },
            external: []
        },
    }
})