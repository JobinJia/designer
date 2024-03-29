/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/vue" />
import type { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

declare module 'vue' {
  interface ComponentCustomOptions {
    widgetType: WidgetTypeEnum
  }
  interface CSSProperties {
    [key: `--${string}`]: string
  }
}
