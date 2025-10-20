<script setup lang="ts">
import type {ImproveContext} from "./types.ts";
import NewPrompt from "../prompt-forms/new-prompt.vue";

const context = defineModel<ImproveContext>({required: true})

function handleCancelled() {
  context.value.mode = "read"
}
</script>

<template>
  <div>
   <new-prompt @cancelled="handleCancelled"/>
  </div>
</template>

<style scoped>

</style>