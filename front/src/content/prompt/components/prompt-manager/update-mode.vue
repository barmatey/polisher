<script setup lang="ts">
import PromptCard from "../prompt-card/prompt-card.vue";
import type {ImproveContext} from "./types.ts";
import type {Prompt} from "../../domain.ts";

const p = defineProps<{
  context: ImproveContext
}>()

const e = defineEmits<{
  (e: "updated", items: Prompt[]): void
  (e: "cancel"): void
  (e: "deleted"): void
}>()

function handleCancel() {
  e("cancel")
}

function handleUpdated(items: Prompt[]) {
  e("updated", items)
}
function handleDeleted(){
  e("deleted")
}
</script>

<template>
  <div>
    <prompt-card
        :prompt="p.context.updateTarget!"
        editing
        @cancel="handleCancel"
        @updated="handleUpdated"
        @deleted="handleDeleted"
    />
  </div>
</template>

<style scoped>

</style>