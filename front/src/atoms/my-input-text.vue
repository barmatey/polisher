<script setup lang="ts">
import {InputText} from "primevue";

interface P {
  fluid?: boolean
}

const p = withDefaults(defineProps<P>(), {
  fluid: false
})

const modelValue = defineModel({default: ""})
</script>

<template>
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
          }
        }
      }"
      security="secondary"
  />
</template>

<style>

</style>