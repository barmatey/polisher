<script setup lang="ts">
import {ref, nextTick} from "vue";

interface P {
  hotkey: string | null;
}

const p = defineProps<P>();

const value = ref("");

async function onKeyDown(e: KeyboardEvent) {
  e.preventDefault();

  const parts: string[] = [];
  if (e.ctrlKey) parts.push("Ctrl");
  if (e.altKey) parts.push("Alt");
  if (e.shiftKey) parts.push("Shift");
  if (e.metaKey) parts.push("Meta");

  const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
  if (!["Control", "Shift", "Alt", "Meta"].includes(key)) {
    parts.push(key);
  }

  value.value = parts.join("+");

  // После выбора можно сразу выйти из режима

  // await saveAndClose()
}


// Mange enter mode
const inputEl = ref<HTMLElement | null>(null);
const handlerMode = ref(false);

function openHandlerMode() {
  handlerMode.value = true;
  nextTick(() => inputEl.value?.focus());
}

async function saveAndClose() {
  handlerMode.value = false;
}
</script>

<template>
  <div class="flex gap-2 border p-2 rounded cursor-text">
    <!-- Отображение текущего hotkey -->
    <div
        v-if="!handlerMode"
        @click="openHandlerMode"
        class="cursor-pointer"
    >
      {{ value || p.hotkey || "Click to set hotkey" }}
    </div>

    <!-- Режим ввода -->
    <div
        v-else
        ref="inputEl"
        tabindex="0"
        @keydown.prevent="onKeyDown"
        class=""
    >
      {{ value || "Press Key" }}
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: monospace;
  margin: 6px 0;
}
</style>
