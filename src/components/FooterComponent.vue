<template>
  <footer class="footer bg-base-100 text-base-content p-10 flex justify-evenly">
    <div class="flex items-center">
      <img
        src="@assets/images/logo-white.png"
        class="w-14"
      />
      <p>
        <span class="font-playfair text-3xl">João Tipolt</span>
        <br />
        <span class="uppercase">Advocacia</span>
      </p>
    </div>
    <nav>
      <h6 class="footer-title">Services</h6>
      <a class="link link-hover">Consultoria</a>
      <a class="link link-hover">Direito Agrário</a>
      <a class="link link-hover">Direito Civil</a>
      <a class="link link-hover">Direito Previdenciário</a>
      <a class="link link-hover">Direito Trabalhista</a>
    </nav>
    <nav>
      <h6 class="footer-title">Contato</h6>
      <span class="flex gap-2 items-center">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
        <span>joao@tipoltadvogados.com.br</span>
      </span>
      <span class="flex gap-2 items-center">
        <font-awesome-icon :icon="['fas', 'phone']" size="xl" />
        <span>(42) 9 9910-6812</span>
      </span>
    </nav>
  </footer>
</template>
<script
  setup
  lang="ts"
>

</script>


<style scoped>

</style>