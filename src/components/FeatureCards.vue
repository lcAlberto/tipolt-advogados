<template>
  <div class="w-full xl:w-11/12">
    <div
      class="card bg-white hover:shadow-primary md:w-11/12 lg:w-7/12 shadow-2xl rounded-3xl relative"
      :class="{'ml-auto': index % 2 == 0}"
    >
      <div class="card-body flex flex-row justify-evenly items-center my-auto text-center py-2 px-5 w-full">
        <div class="w-1/2 mx-auto">
          <button
            type="button"
            class="px-5 cursor-default lg:text-2xl mb-5 -mt-14 xl:-mt-10 md:-mt-24"
          >
            <font-awesome-icon :icon="['fas', props.icon]" size="2xl"/>
            <span class="card-title mt-2">Direito <br> {{ props.title}}</span>
          </button>
        </div>
        <p class="leading-relaxed text-start text-wrap">
          {{props.description}}
        </p>
      </div>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  index: { type: Number, required: true },
})
</script>

<style scoped>

</style>