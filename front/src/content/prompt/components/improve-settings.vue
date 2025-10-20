<script setup lang="ts">
import MySettings from "../../../atoms/my-settings.vue";
import type {Prompt} from "../domain.ts";
import PromptCard from "./prompt-card/prompt-card.vue";
import {computed, onMounted, ref} from "vue";
import {getPromptService} from "../services.ts";

const prompts = ref<Prompt[]>([])
const editModes = ref<Record<string, boolean>>({})
const isEditMode = computed(() => Object.values(editModes.value).filter(x => x).length > 0)

onMounted(async () => {
  prompts.value = await getPromptService().getAllImprovePrompts()
})
</script>

<template>
  <my-settings title="Improve buttons">
    <div class="flex flex-col gap-3">
      <div v-for="item in prompts">
        <prompt-card
            v-if="!isEditMode || editModes[item.id]"
            v-model:edit-mode="editModes[item.id]"
            :prompt="item"
        />
      </div>
    </div>
  </my-settings>
</template>

<style scoped>

</style>