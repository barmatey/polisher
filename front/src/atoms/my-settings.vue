<script setup lang="ts">
import {WINDOW_PADDING, WINDOW_WIDTH} from "../content/config.ts";
import {ref} from "vue";
import {Dialog} from "primevue";
import IconCog from "../assets/icons/icon-cog.vue";
import IconUser from "../assets/icons/icon-user.vue";

interface P {
  title: string
  icon?: "cog" | "user"
}

const p = withDefaults(defineProps<P>(), {
  icon: "cog",
})

const showWindow = ref(false)

function getIcon() {
  return {
    "cog": IconCog,
    "user": IconUser,
  }[p.icon]
}

const pt = {
  root: {
    style: {
      background: 'var(--second-background)',
      color: 'white',
      border: "none",
    }
  },
}
</script>

<template>
  <div>
    <component
        :is="getIcon()"
        @click="() => showWindow = !showWindow"
        stroke-width="1"
        class="cursor-pointer"
    />
    <Dialog
        :header="p.title"
        v-model:visible="showWindow"
        position="topright"
        modal
        :style="{
          'width': `${WINDOW_WIDTH - WINDOW_PADDING}rem`
        }"
        :pt="pt"
    >
      <slot>
        <div>Hello</div>
      </slot>
    </Dialog>
  </div>
</template>

<style scoped>

</style>