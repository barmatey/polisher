<script setup lang="ts">

import type {Prompt, PromptForm} from "../../domain.ts";
import MyTextarea from "../../../../atoms/my-textarea.vue";
import ReplacementSelector from "../../../replacement/components/replacement-selector.vue";
import SaveCancel from "../../../../atoms/save-cancel.vue";
import MyInputText from "../../../../atoms/my-input-text.vue";
import {ref} from "vue";
import {getReplacementService} from "../../../replacement/services.ts";

const e = defineEmits<{
  (e: "created", item: Prompt): void
  (e: "cancel"): void
}>()

const formData = ref<PromptForm>({
  title: "",
  text: "",
  hotkey: null,
  replacement: getReplacementService().getBaseReplacement(),
})

function handleClickOnCancel() {
  e("cancel")
}

async function handleSave() {
  const created: Prompt = {
    id: "string",
    title: formData.value.title,
    category: "improve",
    role: "system",
    text: formData.value.text,
    userId: "",
    order: 10,
    hotkey: formData.value.hotkey,
    replacement: {...formData.value.replacement},
  }
  e("created", created)
}

</script>

<template>
  <div class="flex flex-col gap-6">
    <my-input-text label="Title" v-model="formData.title" fluid/>
    <my-textarea label="Text" v-model="formData.text" fluid auto-resize rows="1"/>
    <replacement-selector v-model="formData.replacement"/>
    <save-cancel
        @cancel="handleClickOnCancel"
        @save="handleSave"
    />
  </div>
</template>

<style scoped>

</style>