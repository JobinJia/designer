import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'
import { getName } from '@/antv-x6/widgets/utils'
import type { BasicSettingsConfig } from '@/antv-x6/widgets/WidgetBasicSettings'
import WidgetBasicSettings from '@/antv-x6/widgets/WidgetBasicSettings'

export interface ChartSettingsConfig extends BasicSettingsConfig {

}

export default class ChartSettings extends WidgetBasicSettings<ChartSettingsConfig> {
  static widgetType = WidgetTypeEnum.Chart
  initSettings = (): ChartSettingsConfig => ({
    width: 500,
    height: 300,
    name: getName('图表'),
  })
}
