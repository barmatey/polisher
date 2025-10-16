import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteStaticCopy } from "vite-plugin-static-copy"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: 'src/extension/manifest.json', dest: '.' },   // копируем manifest.json в dist
        { src: 'src/extension/popup/popup.html', dest: 'popup' } // копируем popup.html
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/extension/popup/main.ts"),
        content: resolve(__dirname, "src/extension/content/main.ts")
      },
      output: {
        entryFileNames: (chunk) => {
          // для popup
          if (chunk.name === 'popup') return 'popup/main.js'
          // для контент-скрипта
          if (chunk.name === 'content') return 'content/main.js'
          return '[name].js'
        },
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})
