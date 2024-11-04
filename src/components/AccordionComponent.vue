<template>
  <div class="join join-vertical bg-base-200 w-full my-auto">
    <div
      v-for="(item, index) in props.items"
      :key="index"
      :class="{ 'bg-secondary border border-base-200': open[0] == index }"
      class="collapse collapse-arrow join-item border-white"
    >
      <input
        v-model="open"
        type="radio"
        name="my-accordion"
        :value="`${index || 0}`"
      />
      <div class="collapse-title text-xl font-medium">
        {{ item.title }}
      </div>
      <div class="collapse-content">
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
import { ref } from 'vue'

const props = defineProps({
  items: { type: Object, required: true }
})
const open = ref([])
</script>


<style scoped>

</style>