<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
  <BottomNav />
</template>

<script setup>
import BottomNav from './components/BottomNav.vue';
import Navbar from './components/Navbar.vue';
</script>