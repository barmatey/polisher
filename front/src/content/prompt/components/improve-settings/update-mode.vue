<script setup lang="ts">
import PromptCard from "../prompt-card/prompt-card.vue";
import type {ImproveContext} from "./types.ts";
import type {Prompt} from "../../domain.ts";

const context = defineModel<ImproveContext>({required: true})

const e = defineEmits<{
  (e: "updated", item: Prompt): void
}>()

function handleEditModeClosed() {
  context.value.updateTarget = null
  context.value.mode = "read"
}

function handleUpdated(item: Prompt) {
  e("updated", item)
}
</script>

<template>
  <div>
    <prompt-card
        :prompt="context.updateTarget!"
        editing
        @edit-mode-closed="handleEditModeClosed"
        @updated="handleUpdated"
    />
  </div>
</template>

<style scoped>

</style>