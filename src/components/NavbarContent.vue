<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <ul class="menu menu-horizontal px-1">
        <li @click="scrollToSection('how-help')">
          <a>Como posso ajudar?</a>
        </li>
        <li @click="scrollToSection('about')">
          <a>Quem somos</a>
        </li>
        <li @click="scrollToSection('contact')">
          <a>Contato</a>
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <a class="btn btn-ghost text-md">
        <span class="font-medium">OAB/PR</span>
        <span class="">123.313</span>
      </a>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
function scrollToSection(anchor:string) {
  const element = document.getElementById(`${anchor}`)
  console.log(element)
  if (element)
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
}
</script>


<style scoped>

</style>