
<template>
  <div class="flex items-start w-1/2">
    <h2>Direito </h2>{{currentIndex}}
    <div class="flex justify-center items-center w-full bg-lime-200">
      <div class="relative h-12 overflow-hidden text-center w-full bg-pink-500">
        <div
          class="absolute inset-0 flex flex-col items-center justify-center bg-blue-400"
          :style="{ transform: `translateY(-${currentIndex * 100}%`, transition: 'transform 1s' }"
        >
          <div
            v-for="(word, index) in words"
            :key="index"
            class="h-12 flex items-center justify-center text-2xl font-bold bg-orange-500"
          >
            {{ word }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { onMounted, ref } from 'vue'

const words = ref(["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"])
const currentIndex = ref(0)

onMounted(() => {
  startScroll()
})

function startScroll() {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.value.length;
  }, 2000); // 2 segundos de intervalo para cada palavra
}
</script>
<style scoped>

</style>