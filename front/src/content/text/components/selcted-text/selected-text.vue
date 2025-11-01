<script setup lang="ts">
import {onMounted, onBeforeUnmount} from "vue";
import {useSelectedTextStore} from "../../store.ts";

const store = useSelectedTextStore()

function updateText() {
  const selection = window.getSelection()?.toString().trim();
  if (selection) {
    store.text = selection;
    return;
  }

  const active = document.activeElement as HTMLElement | null;
  if (active) {
    if (
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable
    ) {
      const input = active as HTMLInputElement | HTMLTextAreaElement;
      store.text = input.value || input.textContent || "";
      return;
    }
  }

  store.text = "";
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
