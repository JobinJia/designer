import { shallowRef } from 'vue'
import type WidgetBasicSettings from '@/antv-x6/widgets/WidgetBasicSettings'

export function useDefaultSettings<T extends WidgetBasicSettings<any>>(Clazz: new (...args: any[]) => T) {
  const options = shallowRef<T>({} as T)
  const setting = new Clazz()
  options.value = setting.initSettings()
  return {
    options,
  }
}
