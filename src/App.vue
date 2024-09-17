<template>
  <div class="bg-base-200" data-theme="dark">
    <navbar />
    <div class="w-full">
      <main class="">
        <RouterView />
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<style scoped>

</style>
