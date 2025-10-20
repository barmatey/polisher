<script setup lang="ts">
import PromptCard from "../prompt-card/prompt-card.vue";
import type {ImproveContext} from "./types.ts";
import type {Prompt} from "../../domain.ts";

const p = defineProps<{
  context: ImproveContext
}>()

const e = defineEmits<{
  (e: "updated", item: Prompt): void
  (e: "cancel"): void
}>()

function handleCancel() {
  e("cancel")
}

function handleUpdated(item: Prompt) {
  e("updated", item)
}
</script>

<template>
  <div>
    <prompt-card
        :prompt="p.context.updateTarget!"
        editing
        @cancel="handleCancel"
        @updated="handleUpdated"
    />
  </div>
</template>

<style scoped>

</style>