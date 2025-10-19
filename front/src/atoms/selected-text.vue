<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'

// реактивная переменная для хранения выделенного текста
const selectedText = ref('')

// функция для обновления selectedText при выделении
const handleSelection = () => {
  selectedText.value = window.getSelection()?.toString() || ''
}

onMounted(() => {
  // слушаем событие mouseup, когда пользователь отпускает кнопку мыши после выделения
  document.addEventListener('mouseup', handleSelection)
})

onBeforeUnmount(() => {
  // убираем слушатель при уничтожении компонента
  document.removeEventListener('mouseup', handleSelection)
})
</script>

<template>
  <div>
    <p>Выделенный текст: <strong>{{ selectedText }}</strong></p>
  </div>
</template>

<style scoped>
div {
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
  font-family: sans-serif;
}
</style>
