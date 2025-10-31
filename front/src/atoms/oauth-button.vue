<script setup lang="ts">
import {ref} from "vue";
import {axiosInstance} from "../content/shared/utils/axios-instance.ts";
import {Button} from "primevue";
import IconGoog from "../assets/icons/icon-goog.vue";

const loading = ref(false)

async function loginWithGoogle() {
  if (loading.value) {
    return
  }

  try {
    // Получаем URL авторизации от бекенда
    loading.value = true
    const url = "/auth/google/authorize"
    const response = await axiosInstance.get(url) // твой endpoint на бекенде
    const data = await response.data
    console.log(response.data)
    if (data.authorizationUrl) {
      // редиректим браузер на Google OAuth
      window.location.href = data.authorizationUrl
    } else {
      console.error('No authorization_url returned')
    }
  } catch (err) {
    console.error('Failed to fetch Google auth URL', err)
    loading.value = false
  }
}
</script>

<template>
  <button
      :class="{
        'glass-btn': true,
        'outlined-glass-btn': true,
      }"
      @click="loginWithGoogle"
  >
    <div class="flex gap-2 justify-center items-center">
      <icon-goog/>
      <div> Login with Google</div>
    </div>

  </button>
</template>

<style scoped>

</style>