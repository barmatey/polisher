// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// the below import needs to be added
import { viteStaticCopy } from 'vite-plugin-static-copy'
import {fileURLToPath} from "node:url";


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/background/background.ts', // Source path
                    dest: 'background', // Destination folder inside dist
                },
                {
                    src: 'index.html', // Source path
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
                content: 'src/main.js', // Build `main.js` as the content script
                background: 'src/background/background.js', // Add `background.js` as another entry point
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'content') return 'main.js';
                    if (chunkInfo.name === 'background') return 'background/background.js';
                    return '[name].js'; // fallback
                },
            },
            external: []
        },
    }
})