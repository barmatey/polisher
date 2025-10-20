<script setup lang="ts">
import MySettings from "../../../atoms/my-settings.vue";
import type {Prompt} from "../domain.ts";
import PromptCard from "./prompt-card/prompt-card.vue";
import MyH2 from "../../../atoms/my-h2.vue";
import {computed, onMounted, ref} from "vue";
import {getPromptService} from "../services.ts";

const prompts = ref<Prompt[]>([])
const editModes = ref<Record<string, boolean>>({})
const isEditMode = computed(() => Object.values(editModes.value).filter(x => x).length > 0)

const title = computed(() => isEditMode.value ? "Edit Prompt" : "Improve Settings")

function handleDialogClosed() {
  for (let key of Object.keys(editModes.value)) {
    editModes.value[key] = false
  }
}

onMounted(async () => {
  prompts.value = await getPromptService().getAllImprovePrompts()
})
</script>

<template>
  <my-settings
      :title="title"
      @dialog-closed="handleDialogClosed"
  >
    <div class="flex flex-col gap-3">
      <my-h2 v-if="!isEditMode">Prompts</my-h2>
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