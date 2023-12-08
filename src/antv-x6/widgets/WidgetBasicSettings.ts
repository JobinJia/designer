import type { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

export interface BasicSettingsConfig {
  name: string
  width: number
  height: number
  id: string
}

export default abstract class WidgetBasicSettings<Settings extends BasicSettingsConfig> {
  abstract static readonly widgetType: WidgetTypeEnum
  abstract initSettings: () => Settings
}
