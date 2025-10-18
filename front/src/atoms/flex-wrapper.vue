<script setup lang="ts">

interface P {
  direction?: "row" | "column"
  rowGap?: number
  colGap?: number
}

const p = withDefaults(defineProps<P>(), {
  direction: "row",
  rowGap: 1,
  colGap: 1,
})

const getGap = (num: number) => {
  return {
    1: "3px",
    2: "6px",
    3: "12px",
    4: "24px",
    5: "48px",
    6: "72px",
  }[num]
}


</script>

<template>
  <div
      :style="{
      'display': 'flex',
      'flex-direction': p.direction,
      'row-gap': getGap(p.rowGap),
      'column-gap': getGap(p.colGap),
    }"
  >
    <slot>

    </slot>
  </div>
</template>

<style scoped>

</style>