<script setup lang="ts">
import {ref} from "vue";
import {Button} from "primevue";
import {Menu} from "primevue";
import IconVdots from "../assets/icons/icon-vdots.vue";
import type {MenuItem} from "primevue/menuitem";

const e = defineEmits(["edit", "delete"])

const menu = ref();
const items = ref<MenuItem[]>([
  {
    label: "Edit",
    command: () => e("edit")
  },
  {
    label: "Delete",
  }
])

const toggle = (event: any) => {
  menu.value.toggle(event);
};
</script>


<template>
  <div class="card flex justify-center">
    <Button
        type="button"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        :style="{
          margin: 0,
          padding: 0,
          background: 'none',
          border: 'none',
        }"
    >
      <icon-vdots :style="{color: 'var(--text-secondary)'}"/>
    </Button>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true"/>
  </div>
</template>

