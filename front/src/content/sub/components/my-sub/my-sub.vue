<script setup lang="ts">
import MySettings from "../../../../atoms/my-settings.vue";
import {onMounted, ref} from "vue";
import type {Sub} from "../../domain.ts";
import {getSubService} from "../../services.ts";
import MyLabel from "../../../../atoms/my-label.vue";
import GlassButton from "../../../../atoms/glass-button.vue";

const sub = ref<Sub>(null)

onMounted(async () => {
  sub.value = await getSubService().getMySub()
})
</script>

<template>
  <my-settings icon="wallet" title="Subscription">
    <div v-if="sub">
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-1">
          <my-label>Plan</my-label>
          <div>{{ sub.planInfo.title }}</div>
        </div>

        <div class="flex flex-col gap-1">
          <my-label>Price</my-label>
          <div>${{ sub.planInfo.price }}</div>
        </div>

        <div class="flex flex-col gap-1">
          <my-label>Cycle</my-label>
          <div>{{ sub.billingInfo.cycle }}</div>
        </div>


        <div class="flex flex-col gap-1">
          <my-label>Last Billing</my-label>
          <div>{{ sub.billingInfo.lastBilling.toLocaleDateString() }}</div>
        </div>


        <div class="flex flex-col gap-1">
          <my-label>Balance</my-label>
          <div>{{ sub.balance.value }}</div>
        </div>

        <glass-button
            label="Manage Subscription"
            :style="{
              width: 'max-content',
            }"
        />
      </div>
    </div>
  </my-settings>
</template>

<style scoped>

</style>