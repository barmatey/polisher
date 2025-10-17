// content.ts
import {createApp} from 'vue'
import Content from './content.vue'

// 1. Создаём контейнер для Vue панели
const sidebar = document.createElement('div')
sidebar.id = 'my-vue-extension-root'

// стили панели
Object.assign(sidebar.style, {
    width: '30rem',
    backgroundColor: 'lightblue',
    flexShrink: '0',           // чтобы не сжималась
    padding: '0.5rem'
})

// 2. Создаём flex wrapper для всей страницы
const wrapper = document.createElement('div')
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'row'

// Переносим весь контент body внутрь wrapper
while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild)
}

// Добавляем панель справа
wrapper.appendChild(sidebar)

// Очищаем body и вставляем wrapper
document.body.innerHTML = ''
document.body.appendChild(wrapper)

// 3. Монтируем Vue компонент в sidebar
createApp(Content).mount('#my-vue-extension-root')

console.log('CONTENT JS')
