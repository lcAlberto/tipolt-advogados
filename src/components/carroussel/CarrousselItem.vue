<template>
  <div class="card rounded-none carousel-item border border-x-0 border-primary flex-shrink-0 w-full">
    <div class="card-body">
      <h3 class="mx-auto card-title">
        {{ props.title }}
      </h3>
      <p class="text-center my-5">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>


<style scoped>

</style>