<script setup lang="ts">
import useUserStore from '../stores/modules/user'
const userStore = useUserStore()
console.log(userStore.firstName);

</script>

<template>
  <h1>Hello World</h1>
  <h1>{{ userStore.fullName }}</h1>
  <n-button type="tertiary" @click="userStore.updateLastName('HJ')">改名</n-button>
</template>

<style scoped>

</style>
