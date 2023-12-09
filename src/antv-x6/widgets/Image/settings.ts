import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'
import { getName } from '@/antv-x6/widgets/utils'
import type { BasicSettingsConfig } from '@/antv-x6/widgets/WidgetBasicSettings'
import WidgetBasicSettings from '@/antv-x6/widgets/WidgetBasicSettings'

export interface ImageSettingsConfig extends BasicSettingsConfig {

}

export default class ImageSettings extends WidgetBasicSettings<ImageSettingsConfig> {
  static widgetType = WidgetTypeEnum.Image
  initSettings = (): ImageSettingsConfig => ({
    width: 100,
    height: 100,
    name: getName('图片'),
  })
}
