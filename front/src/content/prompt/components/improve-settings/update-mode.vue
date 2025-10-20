<script setup lang="ts">
import PromptCard from "../prompt-card/prompt-card.vue";
import type {ImproveContext} from "./types.ts";

const context = defineModel<ImproveContext>({required: true})

function handleEditModeClosed(){
  context.value.updateTarget = null
  context.value.mode = "read"
}
</script>

<template>
  <div>
    <prompt-card
        :prompt="context.updateTarget!"
        editing
        @edit-mode-closed="handleEditModeClosed"
    />
  </div>
</template>

<style scoped>

</style>