import {createApp} from 'vue'
import Content from './content.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import {WINDOW_WIDTH} from "./config.ts";
import {definePreset} from "@primeuix/themes";
import {ConfirmationService} from "primevue";


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

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{pink.50}',
            100: '{pink.100}',
            200: '{pink.200}',
            300: '{pink.300}',
            400: '{pink.400}',
            500: '{pink.500}',
            600: '{pink.600}',
            700: '{pink.700}',
            800: '{pink.800}',
            900: '{pink.900}',
            950: '{pink.950}'
        },
    },
});

// 5. Монтируем Vue компонент
app
    .use(PrimeVue, {
        theme: {
            preset: MyPreset,
            options: {
                darkModeSelector: '.my-app-dark',
            }
        }
    }).
    use(ConfirmationService)
    .mount('#my-vue-extension-root')

console.log('CONTENT JS')
