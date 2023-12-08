import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'
import { getName } from '@/antv-x6/widgets/utils'
import type { BasicSettingsConfig } from '@/antv-x6/widgets/WidgetBasicSettings'
import WidgetBasicSettings from '@/antv-x6/widgets/WidgetBasicSettings'

export interface TextSettingsConfig extends BasicSettingsConfig {

}

export default class TextSettings extends WidgetBasicSettings<TextSettingsConfig> {
  static widgetType = WidgetTypeEnum.Image
  initSettings(): TextSettingsConfig {
    return {
      width: 100,
      height: 50,
      name: getName('文本'),
    }
  }
}
