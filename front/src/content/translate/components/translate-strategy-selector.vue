<script setup lang="ts">
import {RadioButton} from "primevue";
import MyLabel from "../../../atoms/my-label.vue";
import MyH3 from "../../../atoms/my-h2.vue";
import {onMounted, ref, computed} from "vue";
import type {TranslateStrategy} from "../domain.ts";
import {getTranslateStrategyService} from "../services.ts";

const strategies = ref<TranslateStrategy[]>([]);
const selected = defineModel<TranslateStrategy | null>({default: null});

// <-- Связь между объектом и его примитивным кодом
const selectedCode = computed({
  get: () => selected.value?.code ?? null,
  set: (code: string | null) => {
    selected.value = strategies.value.find(s => s.code === code) ?? null;
  },
});

onMounted(async () => {
  strategies.value = await getTranslateStrategyService().getAll()
  selected.value = strategies.value[0] ?? null
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <my-h3>Strategy</my-h3>
    <div/>

    <div
        v-for="s in strategies"
        :key="s.code"
        class="flex gap-2 items-center"
    >
      <RadioButton
          v-model="selectedCode"
          :inputId="s.code"
          :value="s.code"
          size="small"
      />
      <my-label :for="s.code">{{ s.title }}</my-label>
    </div>
  </div>
</template>

<style scoped></style>
