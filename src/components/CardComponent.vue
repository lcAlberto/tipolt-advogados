<template>
  <div class="card bg-base-100 mx-auto p-0 shadow-xl relative m-5">

    <div class="flex flex-row absolute gap-4 top--5 right-3">
      <label
        class="swap btn btn-active hover:btn-primary rounded-full btn-sm"
      >
        <input
          v-model="test"
          type="checkbox"
          @change="emits('selected', item)"
        />
        <font-awesome-icon :icon="['fas', 'bookmark']" class="swap-on"/>
        <font-awesome-icon :icon="['far', 'bookmark']" class="swap-off"/>
      </label>
      <button
        v-if="enableEdit"
        class="btn btn-active hover:btn-danger rounded-full btn-sm tooltip"
      >
        <font-awesome-icon :icon="['fas', 'trash']" />
      </button>
    </div>
    <div class="grid grid-cols-2">
      <div class="p-5">
        <ul v-if="props.item">
          <li class="flex flex-col">
            <span class="font-bold">Nome</span>
            <span class="">{{props.item.name}}</span>
          </li>
          <li class="flex flex-col my-2">
            <span class="font-bold">Tipo de infração detectada</span>
            <span class="">{{props.item.type}}</span>
          </li>
          <li class="flex flex-col my-2">
            <span class="font-bold">Empresa</span>
            <span class="">{{props.item.company}}</span>
          </li>
          <li class="flex flex-col my-2">
            <span class="font-bold">Data</span>
            <span class="">{{props.item.date}}</span>
          </li>
          <li class="flex flex-col my-2">
            <span class="font-bold">Hora</span>
            <span class="">{{props.item.time}}</span>
          </li>

        </ul>
      </div>
      <figure class="p-0 min-w-44 rounded-r-lg">
        <img
          :src="props.item.avatar"
          class="w-auto"
          alt="teste"
        />
      </figure>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
import { useCounterStore } from '@/stores/counter'

const props = defineProps({
  item: { type: Object, required: true },
  enableEdit: { type: Boolean, required: false },
})

const store = useCounterStore()
const emits = defineEmits(['selected'])

const test = (() => {
  return store.selecteds.includes(props.item)
})
</script>


<style scoped>

</style>