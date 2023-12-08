import { defineStore } from 'pinia'
import { shallowRef } from 'vue'
import type { X6Designer } from '@/antv-x6/logics/X6Designer'

export const useDesignerStore = defineStore('designerStore', () => {
  const designer = shallowRef<X6Designer | null>(null)
  function setDesigner(graphInstance: X6Designer) {
    designer.value = graphInstance
  }
  return {
    designer,
    setDesigner,
  }
})
