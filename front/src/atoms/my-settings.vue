<script setup lang="ts">
import {WINDOW_PADDING, WINDOW_WIDTH} from "../content/config.ts";
import {ref} from "vue";
import {Dialog} from "primevue";
import IconCog from "../assets/icons/icon-cog.vue";
import IconUser from "../assets/icons/icon-user.vue";
import IconWallet from "../assets/icons/icon-wallet.vue";
import IconClose from "../assets/icons/icon-close.vue";

interface P {
  title: string
  icon?: "cog" | "user" | "wallet"
}

const p = withDefaults(defineProps<P>(), {
  icon: "cog",
})

const e = defineEmits(["dialogClosed"])

function handleHide() {
  e("dialogClosed")
}

const showWindow = ref(false)

function getIcon() {
  return {
    "cog": IconCog,
    "user": IconUser,
    "wallet": IconWallet,
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
        @hide="handleHide"
        :header="p.title"
        v-model:visible="showWindow"
        position="topright"
        modal
        :style="{
          'width': `${WINDOW_WIDTH - WINDOW_PADDING}rem`,
        }"
        :pt="pt"
    >
      <template #closebutton>
        <div class="flex justify-center items-center">
          <icon-close
              class="cursor-pointer"
              @click="() => showWindow = false"
          />
        </div>
      </template>
      <slot>
        <div>My Settings Slot</div>
      </slot>
    </Dialog>
  </div>
</template>

<style scoped>

</style>