<script setup lang="ts">
import type {Prompt, PromptForm} from "../../domain.ts";
import {ref} from "vue";
import MyLabel from "../../../../atoms/my-label.vue";
import {IftaLabel, Textarea} from "primevue";
import MyH3 from "../../../../atoms/my-h3.vue";
import MyInputText from "../../../../atoms/my-input-text.vue";

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
    <div class="flex  flex-col">
      <my-label :for="p.prompt.id + 'title'">Title</my-label>
      <my-input-text :id="p.prompt.id + 'title'" v-model="formData.title" fluid/>
    </div>


    <IftaLabel>
      <Textarea :id="p.prompt.id + 'text'" v-model="formData.text" fluid auto-resize rows="7"/>
      <my-label :for="p.prompt.id + 'text'">Prompt</my-label>
    </IftaLabel>
  </div>
</template>

<style scoped>

</style>