<script setup lang="ts">
import type {Prompt, PromptForm} from "../../domain.ts";
import {ref} from "vue";
import MyInputText from "../../../../atoms/my-input-text.vue";
import MyTextarea from "../../../../atoms/my-textarea.vue";
import SaveCancel from "../../../../atoms/save-cancel.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()
const e = defineEmits(["clickOnCancel"])

const formData = ref<PromptForm>({
  title: p.prompt.title,
  text: p.prompt.text,
  hotkey: p.prompt.hotkey,
})


function handleClickOnCancel() {
  e("clickOnCancel")
}

</script>

<template>
  <div class="flex flex-col gap-6">
    <my-input-text label="Title" v-model="formData.title" fluid/>
    <my-textarea label="Text" v-model="formData.text" fluid auto-resize rows="1"/>
    <save-cancel
        @click-on-cancel="handleClickOnCancel"
    />
  </div>
</template>

<style scoped>

</style>