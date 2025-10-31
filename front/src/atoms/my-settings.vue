<script setup lang="ts">
import {ref} from "vue";
import IconCog from "../assets/icons/icon-cog.vue";
import IconUser from "../assets/icons/icon-user.vue";
import IconWallet from "../assets/icons/icon-wallet.vue";
import IconClose from "../assets/icons/icon-close.vue";
import MyH2 from "./my-h2.vue";

interface P {
  title: string
  icon?: "cog" | "user" | "wallet"
}

const p = withDefaults(defineProps<P>(), {
  icon: "cog",
})

const e = defineEmits(["dialogClosed"])

function handleHide() {
  showWindow.value = false
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


</script>

<template>
  <div>
    <component
        :is="getIcon()"
        @click="() => showWindow = !showWindow"
        stroke-width="1"
        class="cursor-pointer"
    />
    <transition>
      <div
          v-if="showWindow"
          :style="{
          position: 'absolute',
          top: '1rem',
          right: 0,
          background: 'var(--second-background)',
          width: 'calc(100% - 2rem)',
          padding:'2rem',
          zIndex: 10,
          borderRadius: '12px'
        }"
      >
        <div class="flex justify-between items-center mb-6">
          <my-h2>{{ p.title }}</my-h2>
          <icon-close
              class="cursor-pointer"
              @click="handleHide"
          />
        </div>
        <slot>
          <div>My Settings Slot</div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>

</style>