<script setup lang="ts">
import MySettings from "../../../atoms/my-settings.vue";
import type {Prompt} from "../domain.ts";
import PromptCard from "./prompt-card/prompt-card.vue";
import {onMounted, ref} from "vue";
import {getPromptService} from "../services.ts";

const prompts = ref<Prompt[]>([])

onMounted(async () => {
  prompts.value = await getPromptService().getAllImprovePrompts()
})
</script>

<template>
  <my-settings>
    <div class="flex flex-col gap2">
      <my-h2>Prompts</my-h2>
      <prompt-card
          :prompt="item"
          v-for="item in prompts"
      />
    </div>
  </my-settings>
</template>

<style scoped>

</style>