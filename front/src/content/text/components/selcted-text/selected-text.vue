<script setup lang="ts">
import {onMounted, onBeforeUnmount} from "vue";
import {getInputComponent, useSelectedTextStore} from "../../store.ts";

const store = useSelectedTextStore()

function updateText() {
  const component = getInputComponent()
  if (component) store.component = component
  store.selectedText = window.getSelection()?.toString().trim() ?? ""
}

onMounted(() => {
  document.addEventListener("selectionchange", updateText);
  document.addEventListener("input", updateText);
  document.addEventListener("focusin", updateText);
  document.addEventListener("focusout", updateText);
});

onBeforeUnmount(() => {
  document.removeEventListener("selectionchange", updateText);
  document.removeEventListener("input", updateText);
  document.removeEventListener("focusin", updateText);
  document.removeEventListener("focusout", updateText);
});
</script>

<template>
  <div/>
</template>

<style scoped>

</style>
