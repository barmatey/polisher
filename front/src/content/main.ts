import { createApp } from 'vue';
import Content from './content.vue';

// 1. Создаём контейнер прямо на странице
const container = document.createElement('div');
container.id = 'my-vue-extension-root';

// Можно добавить базовые стили
container.style.position = 'fixed';
container.style.top = '50px';
container.style.right = '0';
container.style.zIndex = '9999';
container.style.backgroundColor = 'white';
container.style.border = '1px solid #ccc';
container.style.padding = '10px';

// 2. Добавляем в body
document.body.appendChild(container);

// 3. Монтируем Vue
createApp(Content).mount('#my-vue-extension-root');
