import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'
import { getName } from '@/antv-x6/widgets/utils'
import type { BasicSettingsConfig } from '@/antv-x6/widgets/WidgetBasicSettings'
import WidgetBasicSettings from '@/antv-x6/widgets/WidgetBasicSettings'

export interface TextSettingsConfig extends BasicSettingsConfig {

}

export default class TextSettings extends WidgetBasicSettings<TextSettingsConfig> {
  static widgetType = WidgetTypeEnum.Text
  initSettings = (): TextSettingsConfig => ({
    width: 50,
    height: 20,
    name: getName('文本'),
  })
}
