<script setup lang="ts">
import {RadioButton} from "primevue";
import {onMounted, ref} from "vue";
import MyLabel from "../atoms/my-label.vue";

const strategies = ref<TranslateStrategy[]>([])
const selectedStrategy = ref<TranslateStrategy | null>(null)

onMounted(async () => {
  strategies.value = await getTranslateStrategyService().getAll()
  selectedStrategy.value = strategies.value.at(0) ?? null
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <div
        v-for="strategy in strategies"
        :key="strategy.code"
        class="flex items-center gap-2"
    >
      <RadioButton
          v-model="selectedStrategy"
          :inputId="strategy.code"
          :value="strategy.title"
          size="small"
      />
      <my-label :for="strategy.code">{{ strategy.title }}</my-label>
    </div>
  </div>
</template>

<style scoped>

</style>