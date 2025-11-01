<script setup lang="ts">

import type {Prompt, PromptForm} from "../../domain.ts";
import MyTextarea from "../../../../atoms/my-textarea.vue";
import ReplacementSelector from "../prompt-card/replacement-selector/replacement-selector.vue";
import SaveCancel from "../../../../atoms/save-cancel.vue";
import MyInputText from "../../../../atoms/my-input-text.vue";
import {ref} from "vue";
import {getReplacementService} from "../prompt-card/replacement-selector/services.ts";
import {getPromptService} from "../../services.ts";

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
  const created = await getPromptService().createOne(formData.value)
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