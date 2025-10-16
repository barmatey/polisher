import { createApp } from 'vue';
import Content from './content.vue';

createApp(Content).mount('#content-extension-root');

// Если нужно просто выполнить JS без Vue:
// console.log('Content script loaded!');
