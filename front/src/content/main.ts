import {createApp} from 'vue'
import Content from './content.vue'
import "../assets/colors.css"
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import {WINDOW_WIDTH} from "./config.ts";


// 1. Размер панели
const marginRight = '500px'

// 2. Создаём контейнер панели
const sidebar = document.createElement('div')
sidebar.id = 'my-vue-extension-root'
Object.assign(sidebar.style, {
    width: `${WINDOW_WIDTH}rem`,
    height: '100vh',
    position: 'fixed',
    top: '0',
    right: '0',
    overflowY: 'auto',
})


// 4. Сдвигаем основной контент
document.body.style.marginRight = marginRight

// 3. Добавляем в body
document.body.appendChild(sidebar)

const app = createApp(Content)

// 5. Монтируем Vue компонент
app
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.my-app-dark',
            }
        }
    })
    .mount('#my-vue-extension-root')

console.log('CONTENT JS')
