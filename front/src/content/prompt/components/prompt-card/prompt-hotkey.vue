<script setup lang="ts">
import {ref, nextTick} from "vue";
import {getPromptService} from "../../services.ts";
import type {Prompt} from "../../domain.ts";

interface P {
  prompt: Prompt;
}

const e = defineEmits<{
  (e: "updated", item: Prompt[]): void
}>()

const p = defineProps<P>();

const value = ref<string | null>(null);
const pressedKeys = new Set<string>();
const handlerMode = ref(false);

const inputEl = ref<HTMLElement | null>(null);

function normalizeKey(key: string): string {
  if (key.length === 1) return key.toUpperCase();
  return key;
}

function onKeyDown(e: KeyboardEvent) {
  e.preventDefault();

  const key = e.key;

  // Esc → отменить ввод без сохранения
  if (key === "Escape") {
    closeHandlerMode();
    return;
  }

  // Backspace или Delete → очистить хоткей
  if (key === "Backspace" || key === "Delete") {
    value.value = null;
    saveAndClose();
    return;
  }

  pressedKeys.add(normalizeKey(key));
}


function onKeyUp(e: KeyboardEvent) {
  e.preventDefault();

  const key = normalizeKey(e.key);

  if (["Escape", "Backspace", "Delete"].includes(key)) return;

  const parts: string[] = [];

  if (pressedKeys.has("Control")) parts.push("Ctrl");
  if (pressedKeys.has("Alt")) parts.push("Alt");
  if (pressedKeys.has("Shift")) parts.push("Shift");
  if (pressedKeys.has("Meta")) parts.push("Meta");

  if (!["Control", "Shift", "Alt", "Meta"].includes(key)) {
    parts.push(key);
  }

  value.value = parts.join("+");
  pressedKeys.clear();

  saveAndClose();
}

function openHandlerMode() {
  handlerMode.value = true;
  nextTick(() => inputEl.value?.focus());
}

function closeHandlerMode() {
  pressedKeys.clear();
  value.value = null
  handlerMode.value = false;
}

async function saveAndClose() {
  const result = await getPromptService().updateHotkey(p.prompt.id, value.value)
  console.log('from prompt hotkey => ', result.map(x => x.title + ": " + x.hotkey))
  e("updated", result)
  closeHandlerMode()
}
</script>

<template>
  <div class="flex gap-2 items-center">
    {{ p.prompt.hotkey }}
    <div
        v-if="!handlerMode"
        @click="openHandlerMode"
        class="cursor-pointer glass-btn outlined-glass-btn flex items-center"
    >
      {{ p.prompt.hotkey || "Click to set hotkey" }}
    </div>

    <div
        v-else
        ref="inputEl"
        tabindex="0"
        @keydown.prevent="onKeyDown"
        @keyup.prevent="onKeyUp"
        class="glass-btn flex items-center"
    >
      {{ value || "Press keys" }}
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: monospace;
  margin: 6px 0;
}
</style>
