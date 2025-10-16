import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteStaticCopy} from "vite-plugin-static-copy";


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/popup/index.html', // Source path
                    dest: '' // Destination folder is dist itself
                },
                {
                  src: 'manifest.json',
                  dest: '',
                },
            ],
        }),
    ],
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

            external: [],
        },
        outDir: 'dist',
        emptyOutDir: true,
    }
})