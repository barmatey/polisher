import {createApp} from 'vue'
import Content from './content.vue'
import "../assets/colors.css"
import {components} from "./components.ts";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';



// 1. Размер панели
const sidebarWidth = '480px' // px, например 30rem ~ 480px
const marginRight = '500px'

// 2. Создаём контейнер панели
const sidebar = document.createElement('div')
sidebar.id = 'my-vue-extension-root'
Object.assign(sidebar.style, {
    width: sidebarWidth,
    height: '100vh',
    position: 'fixed',
    top: '0',
    right: '0',
    zIndex: '9999',
    overflowY: 'auto',
})


// 4. Сдвигаем основной контент
document.body.style.marginRight = marginRight

// 3. Добавляем в body
document.body.appendChild(sidebar)

const app = createApp(Content)
for (let [key, value] of Object.entries(components)) {
    app.component(key, value)
}

// 5. Монтируем Vue компонент
app
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .mount('#my-vue-extension-root')

console.log('CONTENT JS')
