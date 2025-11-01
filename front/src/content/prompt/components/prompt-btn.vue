<script setup lang="ts">
import GlassButton from "../../../atoms/glass-button.vue";
import {addTextToInputComponent, useSelectedTextStore} from "../../text/store.ts";

interface P {
  label: string
}

const p = withDefaults(defineProps<P>(), {})

const store = useSelectedTextStore()


async function handleClick() {
  if (store.textComponent) {
    addTextToInputComponent(store.textComponent, "Added text")
  }

}
</script>

<template>
  <glass-button :label="p.label" @click="handleClick"/>
</template>

<style scoped>

</style>