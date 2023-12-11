<script setup lang="ts">
import { onMounted } from 'vue'
import { Line } from '@antv/g2plot'
import { useDefaultSettings } from '@/antv-x6/hooks/defaultSettings'
import ChartSettings from '@/antv-x6/widgets/Chart/settings'
import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

defineOptions({
  widgetType: WidgetTypeEnum.Chart,
})

const { options } = useDefaultSettings(ChartSettings)
console.log(options)

onMounted(() => {
  const seriesKey = 'series'
  const valueKey = 'value'
  function processData(data: any, yFields: any, seriesField: any, meta: any) {
    const result: any = []
    data.forEach((d: any) => {
      yFields.forEach((yField: any) => {
        const name = meta?.[yField]?.alias || yField
        result.push({ ...d, date: d.date, [seriesKey]: `${d[seriesField]}:${name}`, [valueKey]: d[yField] })
      })
    })
    return result
  }

  fetch('https://gw.alipayobjects.com/os/antfincdn/UjzkGj7yin/multiple-measures-line-data.json')
    .then(data => data.json())
    .then((data) => {
      const meta = {
        date: {
          alias: '销售日期',
        },
        price: {
          alias: '单价',
        },
        discount_price: {
          alias: '折扣单价',
        },
      }
      const line = new Line('g2Container', {
        data: processData(data, ['price', 'discount_price'], 'channel', meta),
        padding: 'auto',
        xField: 'date',
        yField: valueKey,
        seriesField: seriesKey,
        appendPadding: [0, 8, 0, 0],
      })

      line.render()
    })
})
</script>

<template>
  <div id="g2Container" class="x6-g2-wrapper" />
</template>

<style scoped lang="css">
  .x6-g2-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
