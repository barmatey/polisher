<script setup lang="ts">
import {RadioButton} from "primevue";
import MyLabel from "../../../atoms/my-label.vue";
import {onMounted, ref} from "vue";
import type {Replacement} from "../domain.ts";
import {getReplacementService} from "../services.ts";

const options = ref<Replacement[]>([])
const selected = defineModel<Replacement | null>({default: null})

onMounted(async () => {
  options.value = await getReplacementService().getAll()
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <my-label>Replacement Strategy</my-label>
    <div/>

    <div
        v-for="o in options"
        :key="o.code"
        class="flex gap-2 items-center"
    >
      <RadioButton
          v-model="selected"
          :inputId="o.code"
          :value="o.title"
          size="small"
      />
      <my-label :for="o.code">{{ o.title }}</my-label>
    </div>

  </div>
</template>

<style scoped>

</style>