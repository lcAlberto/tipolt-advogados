import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const selecteds = ref([])
  function setSelecteds(item:object) {
    if (!item) return
    const i = selecteds.value.indexOf(item)
    if (i === -1) {
      selecteds.value.push(item)
    } else {
      selecteds.value.splice(i)
    }
  }

  return { selecteds, setSelecteds }
})
