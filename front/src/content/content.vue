<script setup lang="ts">
import {LOGO} from "../logo.ts";
import MyH1 from "./atoms/my-h1.vue";
import MyH2 from "./atoms/my-h2.vue";
import PromptBtn from "./components/prompt-btn.vue";
import ManageLang from "./components/manage-lang/manage-lang.vue";
import {WINDOW_PADDING} from "./config.ts";
import TranslateStrategySelector from "./components/translate-strategy-selector.vue";
import MyH3 from "./atoms/my-h3.vue";

</script>

<template>
  <div
      class="my-app-dark"
      :style="{
        'background': 'oklch(29.3% 0.066 243.157)',
        'color': 'white',
        'padding': `${WINDOW_PADDING}rem`,
        'height': '100%',
        'border-top-left-radius': '1rem',
        'border-bottom-left-radius': '1rem',
      }"
  >
    <div class="flex flex-col gap-6">
      <my-h1>{{ LOGO }}</my-h1>

      <div>
        <my-h2>Translate</my-h2>
        <div class="flex flex-wrap gap-2 mt-3">
          <prompt-btn label="English"/>
          <prompt-btn label="Russian"/>
          <prompt-btn label="Chinese"/>
          <manage-lang/>
        </div>

        <div class="mt-4">
          <my-h3>Strategy:</my-h3>
          <translate-strategy-selector class="mt-2"/>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>

</style>