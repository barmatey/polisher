const container = document.createElement('div');
container.id = 'my-vue-extension-root';

container.style.width = '222px';
container.style.height = '222px';
container.style.position = 'fixed';
container.style.top = '50px';
container.style.right = '0';
container.style.zIndex = '9999';
container.style.backgroundColor = 'lightgreen';
container.style.padding = '10px';

// 2. Добавляем в body
document.body.appendChild(container);


console.log('CONTENT JS');