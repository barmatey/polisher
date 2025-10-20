<script setup lang="ts">
import type {ImproveContext} from "./types.ts";
import NewPrompt from "../prompt-forms/new-prompt.vue";
import type {Prompt} from "../../domain.ts";

defineProps<{
  context: ImproveContext
}>()

const e = defineEmits<{
  (e: "cancel"): void
  (e: "created", item: Prompt): void
}>()

function handleCancel() {
  e("cancel")
}

function handleCreated(item: Prompt) {
  e("created", item)
}
</script>

<template>
  <div>
    <new-prompt
        @cancel="handleCancel"
        @created="handleCreated"
    />
  </div>
</template>

<style scoped>

</style>