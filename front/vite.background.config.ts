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
            targets: [],
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
                background: "src/background/main.ts",
            },
            output: {
                format: 'iife',
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'background') return 'background.js';
                    throw Error(`Unknown chunk ${chunkInfo.name}`);
                },
            },
            external: []
        },
    }
})