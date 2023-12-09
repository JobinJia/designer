import type { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

export interface BasicSettingsConfig {
  name: string
  width: number
  height: number
}

export default abstract class WidgetBasicSettings<Settings extends BasicSettingsConfig> {
  static widgetType: WidgetTypeEnum
  abstract initSettings: () => Settings
}
