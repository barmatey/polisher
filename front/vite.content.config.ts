import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: 'src/content/main.ts',
            output: {
                format: 'iife',
                entryFileNames: 'content/content.js',
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
