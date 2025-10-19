<script setup lang="ts">
import {Button} from "primevue";
import {computed} from "vue";

interface P {
  outlined?: boolean
  glass?: boolean
}

const p = withDefaults(defineProps<P>(), {
  outlined: false,
  glass: false
})

const styles = computed(() => {
  const result: any = {
    height: '2rem',
  }
  if (p.glass) {
    Object.assign(
        result,
        {
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)', // для Safari
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          color: 'white'
        }
    )
    result['background'] = !p.outlined
        ? 'rgba(255,255,255,0.15)'
        : 'rgba(255,255,255,0)'

  }

  return result
})
</script>

<template>
  <Button
      size="small"
      :style="styles"
  />
</template>

<style scoped>

</style>