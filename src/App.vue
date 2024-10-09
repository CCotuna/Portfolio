<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>
<template>
  <NavBar />
  <div class="">
    <RouterView />
  </div>
</template>
<style scoped></style>