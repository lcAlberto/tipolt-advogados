<template>
  <div
    v-if="show"
    class="fixed right-2 bottom-10 lg:right-5 p-10 z-50"
  >
    <button
      class="btn btn-primary btn-circle"
      @click="scrollToTop"
    >
      <font-awesome-icon :icon="['fas', 'chevron-up']" bounce />
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const show = ref(false)
const router = useRouter()

function checkScroll() {
  const firstSection = document.querySelector('section')
  if (firstSection) {
    const firstSectionHeight = firstSection.clientHeight
    show.value = window.scrollY > firstSectionHeight
  } else {
    show.value = window.scrollY > 0
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  router.push('/')

}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>


<style scoped>

</style>