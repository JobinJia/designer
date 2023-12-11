<script setup lang="ts">
import { onMounted } from 'vue'
import { Flow } from '@antv/l7plot'
import { useDefaultSettings } from '@/antv-x6/hooks/defaultSettings'
import ChartSettings from '@/antv-x6/widgets/L7Plot/settings'
import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

defineOptions({
  widgetType: WidgetTypeEnum.L7PLOT,
})

const { options } = useDefaultSettings(ChartSettings)
console.log(options)

onMounted(() => {
  fetch('https://gw.alipayobjects.com/os/antfincdn/SIybYh6xr1/arc.json')
    .then(response => response.json())
    .then((data) => {
      // eslint-disable-next-line no-new
      new Flow('l7Container', {
        map: {
          type: 'amap',
          style: 'dark',
          center: [116.3956, 39.9392],
          pitch: 0,
          zoom: 10,
        },
        source: {
          data,
          parser: {
            type: 'json',
            x: 'x1',
            y: 'y1',
            x1: 'x',
            y1: 'y',
          },
        },
        autoFit: true,
        shape: 'arc',
        size: 1.5,
        color: {
          field: 'count',
          value: ['rgba(1,124,247,0.9)', 'rgba(230,129,28,0.9)'],
          scale: { type: 'quantize' },
        },
        style: {
          opacity: 0.8,
          segmentNumber: 60,
        },
        animate: {
          interval: 2,
          trailLength: 1,
          duration: 2,
        },
        radiation: {
          color: 'white',
          size: 30,
        },
        label: {
          visible: true,
          field: 'count',
          style: {
            fill: '#000',
            opacity: 0.8,
            fontSize: 10,
            stroke: '#fff',
            strokeWidth: 2,
            textAllowOverlap: false,
            padding: [5, 5],
            textOffset: [0, 35],
          },
        },
        zoom: {
          position: 'bottomright',
        },
        scale: {
          position: 'bottomright',
        },
        layerMenu: {
          position: 'topright',
        },
        legend: {
          position: 'bottomleft',
        },
      })
    })
})
</script>

<template>
  <div id="l7Container" class="x6-g2-wrapper" />
</template>

<style scoped lang="css">
  .x6-g2-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
