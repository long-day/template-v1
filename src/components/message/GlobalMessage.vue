<template>
    <RouterView/>
</template>

<script setup lang="ts">
    import { useMessage } from 'naive-ui'
    import { RouterView } from 'vue-router';
    window._nMessage = useMessage()
</script>
