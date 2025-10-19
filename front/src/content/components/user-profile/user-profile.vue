<script setup lang="ts">
import MySettings from "../../atoms/my-settings.vue";
import AuthUser from "./auth-user.vue";
import UnauthUser from "./unauth-user.vue";

const isAuthenticated = true

function getComponent() {
  return isAuthenticated
      ? AuthUser
      : UnauthUser
}
</script>

<template>
  <component :is="getComponent()"/>
</template>

<style scoped>

</style>