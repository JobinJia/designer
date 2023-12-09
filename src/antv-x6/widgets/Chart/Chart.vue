<script setup lang="ts">
import { onMounted } from 'vue'
import { Chart } from '@antv/g2'
import { useDefaultSettings } from '@/antv-x6/hooks/defaultSettings'
import ChartSettings from '@/antv-x6/widgets/Chart/settings'
import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

defineOptions({
  widgetType: WidgetTypeEnum.Chart,
})

const { options } = useDefaultSettings(ChartSettings)
console.log(options)

onMounted(() => {
  const chart = new Chart({
    container: 'g2Container',
    autoFit: true,
    insetRight: 10,
  })

  chart
    .line()
    .data({
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/indices.json',
    })
    .transform({ type: 'normalizeY', basis: 'first', groupBy: 'color' })
    .encode('x', (d: any) => new Date(d.Date))
    .encode('y', 'Close')
    .encode('color', 'Symbol')
    .scale('y', { type: 'log' })
    .axis('y', { title: '↑ Change in price (%)' })
    .label({
      text: 'Symbol',
      selector: 'last',
      fontSize: 10,
    })
    .tooltip({ channel: 'y', valueFormatter: '.1f' })
  chart.render()
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
