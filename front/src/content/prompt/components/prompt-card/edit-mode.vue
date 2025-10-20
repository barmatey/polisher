<script setup lang="ts">
import type {Prompt, PromptForm} from "../../domain.ts";
import {ref} from "vue";
import MyInputText from "../../../../atoms/my-input-text.vue";
import MyTextarea from "../../../../atoms/my-textarea.vue";
import SaveCancel from "../../../../atoms/save-cancel.vue";
import ReplacementSelector from "../../../replacement/components/replacement-selector.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()
const e = defineEmits<{
  (e: "cancel"): void
  (e: "updated", item: Prompt): void
}>()

const formData = ref<PromptForm>({
  title: p.prompt.title,
  text: p.prompt.text,
  hotkey: p.prompt.hotkey,
  replacement: {...p.prompt.replacement},
})


function handleClickOnCancel() {
  e("cancel")
}

function handleClickOnSave() {
  const updated = Object.assign({}, p.prompt, formData.value)
  e("updated", updated)
}

</script>

<template>
  <div class="flex flex-col gap-6">
    <my-input-text label="Title" v-model="formData.title" fluid/>
    <my-textarea label="Text" v-model="formData.text" fluid auto-resize rows="1"/>
    <replacement-selector v-model="formData.replacement"/>
    <save-cancel
        @save="handleClickOnSave"
        @cancel="handleClickOnCancel"
    />
  </div>
</template>

<style scoped>

</style>