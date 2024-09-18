<template>
  <a
    href="https://wa.me/5542999106812"
    target="_blank"
    class="btn btn-accent rounded-full uppercase text-xl btn-lg"
  >
    <font-awesome-icon :icon="['fab', 'whatsapp']" size="2xl" />
    <span class="text-xs sm:text-sm md:text-md">{{ props.text }}</span>
  </a>
</template>
<script
  setup
  lang="ts"
>
const props = defineProps({
  text: { type: String, default: 'Converse diretamente' }
})

</script>


<style scoped>

</style>