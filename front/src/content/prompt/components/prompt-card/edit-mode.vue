<script setup lang="ts">
import type {Prompt, PromptForm} from "../../domain.ts";
import {ref} from "vue";
import MyH3 from "../../../../atoms/my-h3.vue";
import MyInputText from "../../../../atoms/my-input-text.vue";
import MyTextarea from "../../../../atoms/my-textarea.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()

const formData = ref<PromptForm>({
  title: p.prompt.title,
  text: p.prompt.text,
  hotkey: p.prompt.hotkey,
})


</script>

<template>
  <div class="flex flex-col gap-6">
    <my-h3>Edit Improve Button</my-h3>
    <my-input-text label="Title" v-model="formData.title" fluid/>
    <my-textarea label="Text" v-model="formData.text" fluid auto-resize rows="1"/>
  </div>
</template>

<style scoped>

</style>