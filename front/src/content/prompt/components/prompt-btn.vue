<script setup lang="ts">
import GlassButton from "../../../atoms/glass-button.vue";
import {addTextToInputComponent, useSelectedTextStore} from "../../text/store.ts";

interface P {
  label: string
}

const p = withDefaults(defineProps<P>(), {})

const store = useSelectedTextStore()


async function handleClick() {
  console.log(store.component)
  if (store.component) {
    addTextToInputComponent(store.component, "Added text")
  }

}
</script>

<template>
  <glass-button :label="p.label" @click="handleClick"/>
</template>

<style scoped>

</style>