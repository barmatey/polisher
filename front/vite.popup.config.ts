import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
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
        outDir: 'dist/popup',
        emptyOutDir: true,
    }
})