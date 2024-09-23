<template>
  <a
    href="https://wa.me/5542999106812"
    target="_blank"
    class="btn rounded-full uppercase"
    :class="{
      'btn-accent': !props.contrast,
      'btn-secondary': props.contrast,
      'btn-sm text-sm': props.size === 'sm',
      'btn-lg text-xl': props.size === 'md'
     }"
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
  text: { type: String, default: 'Converse diretamente' },
  size: { type: String, default: 'md' },
  contrast: { type: Boolean, default: false },
})

</script>


<style scoped>

</style>