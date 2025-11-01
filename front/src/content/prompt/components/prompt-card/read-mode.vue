<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import SimpleMenu from "../../../../atoms/simple-menu.vue";
import PromptHotkey from "./prompt-hotkey.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()

const e = defineEmits<{
  (e: "edit"): void
  (e: "deleted"): void
  (e: "updated", value: Prompt): void
}>()

function handleClickOnEdit() {
  e("edit")
}

function handleDelete() {
  e("deleted")
}

function handleHotkeyUpdated(value: string | null) {
  const updated = {...p.prompt}
  updated.hotkey = value
  e("updated", updated)
}
</script>

<template>
  <div class="flex justify-between items-center">
    <div>{{ p.prompt.title }}</div>
    <div class="flex gap-3 items-center">
      <prompt-hotkey
          :hotkey="p.prompt.hotkey"
          @updated="handleHotkeyUpdated"
      />
      <simple-menu
          @edit="handleClickOnEdit"
          @delete="handleDelete"
      />
    </div>
  </div>

</template>

<style scoped>

</style>