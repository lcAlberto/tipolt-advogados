<template>
  <div class="bg-base-200" data-theme="dark">
    <navbar />
    <div class="w-full">
      <main class="">
        <RouterView />
      </main>
    </div>
    <Footer/>
    <scrool-to-top-button/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarContent.vue'
import Footer from '@/components/FooterComponent.vue'
import ScroolToTopButton from '@/ScroolToTopButton.vue'
</script>

<style scoped>

</style>
