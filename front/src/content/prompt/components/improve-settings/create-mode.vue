<script setup lang="ts">
import type {ImproveContext} from "./types.ts";
import NewPrompt from "../prompt-forms/new-prompt.vue";

defineProps<{
  context: ImproveContext
}>()

const e = defineEmits<{
  (e: "cancel"): void
}>()

function handleCancel() {
  e("cancel")
}
</script>

<template>
  <div>
    <new-prompt @cancel="handleCancel"/>
  </div>
</template>

<style scoped>

</style>