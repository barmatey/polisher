<script setup lang="ts">
import PromptCard from "../prompt-card/prompt-card.vue";
import GlassButton from "../../../../atoms/glass-button.vue";
import type {ImproveContext} from "./types.ts";
import type {Prompt} from "../../domain.ts";

const context = defineModel<ImproveContext>({required: true})

function handleEditModeOpened(target: Prompt) {
  context.value.updateTarget = target
  context.value.mode = 'update'
}

function handleClickOnCreatePromptButton() {
  context.value.mode = 'create'
}

</script>


<template>
  <div class="flex flex-col gap-3">
    <prompt-card
        v-for="item in context.prompts"
        :key="item.id"
        :prompt="item"
        @edit-mode-opened="handleEditModeOpened(item)"
    />

    <div/>

    <glass-button
        class="w-max"
        label="Create"
        @click="handleClickOnCreatePromptButton"
    />
  </div>
</template>
