<template>
  <Navbar />
  <div class="py-4 bg-success">
    <router-view />
    <div style="height: 55px;"></div>
  </div>
  <BottomNav />
</template>

<script setup>
import BottomNav from './components/BottomNav.vue';
import Navbar from './components/Navbar.vue';
</script>

<style>
body {
  user-select: none;
}
</style>