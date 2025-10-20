<script setup lang="ts">
import {Textarea} from "primevue";
import MyLabel from "./my-label.vue";


interface P {
  label: string
  fluid?: boolean
  autoResize?: boolean
  rows?: string | number
}

const p = withDefaults(defineProps<P>(), {
  fluid: false
})

const modelValue = defineModel({default: ""})
</script>

<template>
  <div class="flex flex-col">
    <my-label>{{ p.label }}</my-label>
    <Textarea
        :fluid="p.fluid"
        :auto-resize="p.autoResize"
        :rows="p.rows"
        v-model="modelValue"
        :pt="{
        root: {
          style: {
            background: 'none',
            color: 'white',
            borderLeft: 'none',
            borderRight: 'none',
            borderTop: 'none',
            borderRadius: 0,
            paddingLeft: 0,
            paddingRight: 0,
          }
        }
      }"
        security="secondary"
    />
  </div>
</template>

<style scoped>

</style>