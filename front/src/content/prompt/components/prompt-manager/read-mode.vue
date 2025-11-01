<script setup lang="ts">
import PromptCard from "../prompt-card/prompt-card.vue";
import GlassButton from "../../../../atoms/glass-button.vue";
import type {ImproveContext} from "./types.ts";
import type {Prompt} from "../../domain.ts";

const p = defineProps<{
  context: ImproveContext
}>()

const e = defineEmits<{
  (e: "edit", target: Prompt): void
  (e: "deleted", target: Prompt):void
  (e: "updated", target: Prompt[]): void
  (e: "build"): void
}>()

function handleEdit(target: Prompt) {
  e("edit", target)
}

function handleClickOnCreate() {
  e("build")
}

function handleDeleted(item: Prompt){
  e("deleted", item)
}

function handleUpdated(items: Prompt[]){
  e("updated", items)
}

</script>


<template>
  <div class="flex flex-col gap-3">
    <prompt-card
        v-for="item in p.context.prompts"
        :key="item.id"
        :prompt="item"
        @edit="handleEdit(item)"
        @deleted="handleDeleted(item)"
        @updated="handleUpdated"
    />

    <div/>

    <glass-button
        class="w-max"
        label="Create"
        @click="handleClickOnCreate"
    />
  </div>
</template>
