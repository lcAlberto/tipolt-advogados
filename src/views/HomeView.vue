<template>
  <div class="relative bg-base-100">
    <div class="bg-primary w-full absolute left-0"></div>
    <section
      id="home"
      class="lg:h-[80vh] flex flex-col items-center justify-evenly mx-auto px-5"
    >
      <div class="flex flex-col items-center justify-center gap-0 w-10/12">
        <img
          src="@/assets/images/logo-white.png"
          alt="main-logo"
          class="max-w-24"
        >
        <div>
          <h1 class="text-white">João Tipolt</h1>
          <h3 class="text-5xl uppercase">
            ADVOCACIA
          </h3>
        </div>
      </div>
      <p class="flex flex-col text-center">
        <span class="text-2xl mt-5"> Compromisso com a Justiça e Excelência Jurídica</span>
        <span class="text-xl mb-5"> Aqui, sua tranquilidade é a nossa prioridade</span>
      </p>
      <whatsapp-button />
      <small class="my-5">Atendimento 100% online | Advogados altamente capacitados para te atender</small>
    </section>


    <section
      id="how-help"
      class="md:min-h-[80vh] xl:min-h-[50vh] px-5 bg-neutral"
    >
      <div class="md:w-10/12 w-full flex flex-col items-center justify-evenly pt-10 mx-auto text-secondary-content">
        <h2 class="text-5xl">Como posso te ajudar?</h2>
        <div class="flex items-center justify-evenly gap-10 flex-wrap my-10">

          <div class="flex flex-col items-center">
            <p class="text-lg w-11/12 lg:w-1/2 text-justify">
              No nosso escritório de advocacia, estamos comprometidos em fornecer soluções jurídicas eficazes e
              personalizadas para atender às suas necessidades. Atuamos nas áreas de <span class="italic">Direito Previdenciário, Trabalhista,
              Civil e Agro.</span>
            </p>

            <div class="flex items-center justify-center gap-10 md:gap-5 lg:gap-8 xl:gap-10 flex-wrap my-10 px-5 md:px-0">
              <feature-cards
                v-for="(item, index) in featureCards"
                :key="index"
                :title="item.title"
                :description="item.description"
                :icon="item.icon"
                :index="index"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="md:min-h-[80vh] xl:min-h-[50vh] bg-secondary px-5"
    >
      <div class="w-full md:w-10/12 flex flex-col items-center justify-evenly pt-10 mx-auto text-secondary-content">
        <h2 class="text-5xl">Quem somos?</h2>
        <div class="flex flex-col md:flex-row items-center justify-evenly gap-10 mt-5">

          <div class="w-full md:w-1/2 text-lg">
            <p>
              Nosso time é liderado por João Vitor Tipolt, um profissional com vasta experiência e profundo
              conhecimento das leis brasileiras, especialmente nas áreas em que atuamos. Com uma abordagem clara e
              objetiva, buscamos não apenas resolver problemas, mas também prevenir futuros conflitos, oferecendo
              consultoria e orientação jurídica proativa.
            </p>
            <div class="divider"/>
            <h2 class="text-3xl font-bold my-5">
              Nossos Valores
            </h2>
            <carroussel-component/>
          </div>

          <div class="flex flex-col text-center pb-5">
            <div class="avatar">
              <div class="mask mask-squircle">
                <img
                  src="@assets/images/ilustrations/jtipolt.webp"
                  alt="joao tipolt"
                  class="w-96 max-w-[50vw]"
                />
              </div>
            </div>
            <small class="font-playfair text-sm">João Vitor Tipolt, OAB/PR 123.313</small>
          </div>
        </div>
      </div>
    </section>

    <section
      id="why"
      class="md:min-h-[80vh] xl:min-h-[50vh] px-5"
    >
      <div class="w-full md:w-10/12 flex flex-col items-center justify-evenly pt-10 mx-auto text-base-content">
        <div class="flex md:flex-row items-center justify-evenly flex-wrap my-10 w-full">

          <div class="lg:w-1/3 text-justify">
            <h2 class="text-4xl my-5">
              Por que escolher<br/>
              <span class="font-playfair">João Tipolt </span>
              <span class="">Advocacia</span>
              ?
            </h2>
            <p class="leading-loose">
              Porque acreditamos que cada cliente merece uma atenção especial e personalizada. Com anos de experiência e dedicação, somos um escritório especializado em Direito Civil, Trabalhista, Agrário e Previdenciário, comprometido em oferecer soluções jurídicas de alta qualidade, sempre priorizando a ética e a eficiência.
            </p>
            <p class="leading-relaxed">
              No João Tipolt Advocacia, você encontra mais que advogados – encontra parceiros dedicados a lutar pela sua justiça e tranquilidade. Estamos aqui para defender seus direitos e proporcionar segurança jurídica em cada decisão.
            </p>
            <p class="leading-relaxed">
              Venha nos conhecer e descubra como podemos ajudar você a encontrar soluções jurídicas assertivas e eficazes.
            </p>
            <div class="my-5">
              <whatsapp-button text="Converse agora!"/>
            </div>
          </div>
          <div class="w-auto">
            <div class="avatar">
                <img
                  src="@assets/images/ilustrations/tipolt-3.webp"
                  alt="joao vitor tipolt"
                  class="rounded-3xl w-96"
                />
            </div>
          </div>

        </div>
      </div>
    </section>

    <section
      id="questions"
      class="md:min-h-[40vh] px-5 bg-neutral text-secondary-content"
    >
      <div class="w-10/12 flex flex-col items-center justify-evenly pt-10 mx-auto">
        <h2 class="text-5xl">
          Perguntas Frequentes
        </h2>

        <div class="flex flex-col-reverse md:flex-row justify-center items-center flex-wrap my-10 w-full">

          <div class="md:w-1/2 hidden lg:block">
            <img
              src="@assets/images/ilustrations/question.png"
              alt="imagem de uma mulher em frente a uma parede branca pensando"
              class="w-full"
            />
          </div>
          <div class="lg:w-1/2 w-full">
            <accordion-component :items="frequentlyAskedQuestions"/>
            <div class="lg:my-10">
              <p class="my-5">Ainda tem dúvidas?</p>
              <whatsapp-button text="Converse agora mesmo!"/>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section
      id="contact"
      class="lg:min-h-[20vh] bg-primary text-primary-content"
    >
      <div class="w-10/12 flex flex-col items-center justify-evenly pt-10 mx-auto">

        <div class="flex items-center justify-center flex-wrap gap-5 my-10 w-full">

          <div class="">
            <h2 class="text-5xl">
              Entre em contato!
            </h2>
            <p>optando pelo atendimento via WhatsApp, o atendimento é imediato</p>
          </div>
          <div class="">
            <ul class="p-5">
              <li class="flex gap-5 my-3">
                <span class="text-secondary">
                  <font-awesome-icon :icon="['fas', 'envelope']" size="xl"/>
                </span>
                <span>joao@tipoltadvogados.com.br</span>
              </li>
              <li class="flex gap-5 my-3">
                <span class="text-secondary">
                  <font-awesome-icon :icon="['fas', 'phone']" size="xl" />
                </span>
                <span>(42) 9 9910-6812 </span>
              </li>
              <li class="flex gap-5 my-3">
                <span class="text-secondary">
                  <font-awesome-icon :icon="['fas', 'location-dot']" size="xl"/>
                </span>
                <span>Guarapuava - PR</span>
              </li>
              <li class="flex gap-5 my-3">
                <whatsapp-button size="sm" contrast/>
              </li>
              <li class="flex gap-5 my-3">
                Atendimento online em todo Brasil!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

import CarrousselComponent from '@/components/carroussel/CarrousselComponent.vue'
import AccordionComponent from '@/components/AccordionComponent.vue'
import { ref } from 'vue'
import WhatsappButton from '@/components/WhatsappButton.vue'
import FeatureCards from '@/components/FeatureCards.vue'

const featureCards = ref([
  {
    title: 'Civil ',
    description: 'Resolvemos disputas contratuais, questões de herança e danos morais. Soluções eficazes para questões contratuais, indenizações, e disputas familiares',
    icon: 'people-group'
  },
  {
    title: 'Trabalhista',
    description: 'Defendemos seus direitos trabalhistas, seja como empregador ou empregado, em casos de demissão, assédio no trabalho e questões de horas extras',
    icon: 'hammer'
  },
  {
    title: 'Agrário',
    description: 'Protegemos o patrimônio rural e auxiliamos em questões legais relacionadas à terra. Assessoramos contratos agrários, regularização fundiária e questões ambientais',
    icon: 'wheat-awn'
  },
  {
    title: 'Previdenciário',
    description: 'Acompanhamento completo em processos de aposentadoria, auxílio-doença, benefícios por incapacidade e revisões desses benefícios do INSS',
    icon: 'people-roof'
  },
  {
    title: 'Criminal',
    description: 'Defendemos seus direitos em investigações criminais, processos judiciais e inquéritos policiais. Oferecemos uma defesa robusta em casos de crimes contra a pessoa, patrimônio, dignidade sexual, entre outros.',
    icon: 'handcuffs'
  },

])

const frequentlyAskedQuestions = ref([
  {
    title: '1. Como funciona o atendimento no escritório?',
    text: 'Oferecemos atendimento personalizado, tanto presencial quanto online. Após o agendamento da consulta, analisamos o seu caso detalhadamente e apresentamos as melhores soluções jurídicas.'
  },
  {
    title: '2. Quais documentos devo levar para a primeira consulta?',
    text: 'Isso depende da natureza do seu caso. No geral, solicitamos documentos pessoais (RG, CPF), contratos, recibos, provas documentais e qualquer material relevante para a questão jurídica. Para uma orientação mais específica, entre em contato antes da consulta.'
  },
  {
    title: '3. O escritório atua em processos fora da minha cidade/estado?',
    text: 'Sim, atuamos em todo o território nacional. Dependendo do caso, podemos oferecer representação direta ou trabalhar em parceria com advogados locais.'
  },
  {
    title: '4. O escritório também oferece consultoria preventiva?',
    text: 'Sim, oferecemos serviços de consultoria jurídica preventiva para evitar que nossos clientes enfrentem problemas futuros, especialmente em áreas como direito civil, trabalhista, agrário e previdenciário.'
  },
  {
    title: '5. Posso acompanhar meu processo online?',
    text: 'Sim, disponibilizamos acesso ao acompanhamento do seu processo via sistemas digitais dos tribunais, além de mantermos contato constante para atualizações sobre o andamento'
  },
])
</script>

<style scoped>
/* Tailwind classes handle the majority of the styling */
</style>
