<script setup lang="ts">
import { ref, nextTick } from "vue";

interface P {
  hotkey: string | null;
}

const p = defineProps<P>();

const value = ref("");
const pressedKeys = new Set<string>(); // отслеживаем нажатые клавиши
const handlerMode = ref(false);
const inputEl = ref<HTMLElement | null>(null);

function normalizeKey(key: string): string {
  if (key.length === 1) return key.toUpperCase();
  return key;
}

function onKeyDown(e: KeyboardEvent) {
  e.preventDefault();

  const key = normalizeKey(e.key);
  pressedKeys.add(key);
}

function onKeyUp(e: KeyboardEvent) {
  e.preventDefault();

  const parts: string[] = [];

  if (pressedKeys.has("Control")) parts.push("Ctrl");
  if (pressedKeys.has("Alt")) parts.push("Alt");
  if (pressedKeys.has("Shift")) parts.push("Shift");
  if (pressedKeys.has("Meta")) parts.push("Meta");

  const key = normalizeKey(e.key);
  if (!["Control", "Shift", "Alt", "Meta"].includes(key)) {
    parts.push(key);
  }

  value.value = parts.join("+");
  pressedKeys.clear();

  // после отпускания сохраняем
  saveAndClose();
}

function openHandlerMode() {
  handlerMode.value = true;
  nextTick(() => inputEl.value?.focus());
}

function saveAndClose() {
  handlerMode.value = false;
}
</script>

<template>
  <div class="flex gap-2 border p-2 rounded cursor-text">
    <div
        v-if="!handlerMode"
        @click="openHandlerMode"
        class="cursor-pointer"
    >
      {{ value || p.hotkey || "Click to set hotkey" }}
    </div>

    <div
        v-else
        ref="inputEl"
        tabindex="0"
        @keydown.prevent="onKeyDown"
        @keyup.prevent="onKeyUp"
    >
      {{ value || "Press keys..." }}
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: monospace;
  margin: 6px 0;
}
</style>
