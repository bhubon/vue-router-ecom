<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="container  mt-50 mb-50">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
