// content.ts
import { createApp } from 'vue'
import Content from './content.vue'

// 1. Создаём контейнер для Vue
const container = document.createElement('div')
container.id = 'my-vue-extension-root'

// задаём базовые стили, чтобы было видно
Object.assign(container.style, {
    position: 'fixed',
    top: '50px',
    right: '0',
    width: '300px',
    height: '200px',
    zIndex: '9999',
    backgroundColor: 'red',
    padding: '10px'
})

// 2. Добавляем в body
document.body.appendChild(container)

// 3. Монтируем Vue компонент
createApp(Content).mount('#my-vue-extension-root')

console.log('CONTENT JS')
