import { set } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { store } from '@/stores'
import type { BasicSettingsConfig } from '@/antv-x6/widgets/WidgetBasicSettings'

export const useWidgetStore = defineStore('widgetStore', () => {
  const widgetMap = ref<any>({})

  function addWidget(id: string, widget: BasicSettingsConfig) {
    set(widgetMap, id, { ...widget, id })
  }

  return {
    widgetMap,
    addWidget,
  }
})

export function useWidgetStoreOutSide() {
  return useWidgetStore(store)
}
