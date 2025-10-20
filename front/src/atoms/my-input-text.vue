<script setup lang="ts">
import {InputText} from "primevue";
import MyLabel from "./my-label.vue";

interface P {
  label: string
  fluid?: boolean
}

const p = withDefaults(defineProps<P>(), {
  fluid: false
})

const modelValue = defineModel({default: ""})
</script>

<template>
  <div class="flex flex-col">
    <my-label>{{ p.label }}</my-label>
    <InputText
        :fluid="p.fluid"
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
            fontWeight: 'lighter',
          }
        }
      }"
        security="secondary"
    />
  </div>
</template>

<style>

</style>