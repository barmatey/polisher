import {defineConfig} from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: 'src/content/main.ts',
            output: {
                format: 'iife',
                entryFileNames: 'content.js',
            },
        },
        outDir: 'dist/content',
        emptyOutDir: true,
    },
})
