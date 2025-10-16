import {defineConfig} from 'vite'


// https://vite.dev/config/
export default defineConfig({
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
        outDir: 'dist/background',
        emptyOutDir: true,
    }
})