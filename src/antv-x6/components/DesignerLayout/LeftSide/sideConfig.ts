import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

export interface SideConfig {
  name: string
  type: WidgetTypeEnum
}

export interface SideConfigGroup {
  name: string
  isGroup: true
  children: SideConfig[]
}

export const sideConfigs: Array<SideConfigGroup> = [
  {
    name: '基础组件',
    isGroup: true,
    children: [
      {
        name: '文本',
        type: WidgetTypeEnum.Text,
      },
      {
        name: '图片',
        type: WidgetTypeEnum.Image,
      },
      {
        name: '图表',
        type: WidgetTypeEnum.Chart,
      },
    ],
  },
]
