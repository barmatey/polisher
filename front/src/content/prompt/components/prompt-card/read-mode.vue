<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import SimpleMenu from "../../../../atoms/simple-menu.vue";
import PromptHotkey from "./prompt-hotkey.vue";
import {getPromptService} from "../../services.ts";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()

const e = defineEmits<{
  (e: "edit"): void
  (e: "deleted"): void
  (e: "updated", value: Prompt[]): void
}>()

function handleClickOnEdit() {
  e("edit")
}

async function handleDelete() {
  await getPromptService().deleteOne(p.prompt.id)
  e("deleted")
}

function handleHotkeyUpdated(items: Prompt[]) {
  e("updated", items)
}
</script>

<template>
  <div class="flex justify-between items-center">
    <div>{{ p.prompt.title }}</div>
    <div class="flex gap-3 items-center">
      <prompt-hotkey
          :prompt="p.prompt"
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