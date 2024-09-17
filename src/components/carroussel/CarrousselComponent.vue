<template>
  <div class="carousel-container overflow-hidden relative">
    <div class="carousel-content flex transition-transform duration-1000" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item flex-shrink-0 w-full" v-for="(item, index) in content" :key="index">
        <carroussel-item
          :title="item.title"
          :text="item.text"
          />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CarrousselItem from '@/components/carroussel/CarrousselItem.vue'

const content:IContent[] = [
  // {
  //   id: 1,
  //   title: 'Experiência e Conhecimento',
  //   text: 'Nosso time é liderado por [Nome do Advogado], um profissional com vasta experiência e profundo conhecimento das leis brasileiras, especialmente nas áreas em que atuamos. Isso garante que você tenha o suporte de quem realmente entende do assunto.'
  // },
  {
    id: 2,
    title: 'Transparência',
    text: 'Mantemos nossos clientes informados sobre cada etapa dos processos, garantindo segurança e confiança'
  },
  {
    id: 3,
    title: 'Dedicação',
    text: 'Cada caso é tratado com o máximo de empenho e atenção aos detalhes, pois entendemos que os direitos dos nossos clientes são únicos e valiosos'
  },
  {
    id: 4,
    title: 'Excelência',
    text: 'Atuamos com rigor técnico e uma visão estratégica para obter os melhores resultados possíveis'
  },
];

const currentIndex = ref(0);

onMounted(() => {
  startCarousel();
});

function startCarousel():void {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % content.length;
  }, 4000);
}

interface IContent {
  id: number,
  title: string,
  text: string
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-content {
  display: flex;
  transition: transform 1s ease;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
}
</style>
