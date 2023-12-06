<script setup lang="ts">
import { Graph } from '@antv/x6'
import { Scroller } from '@antv/x6-plugin-scroller'
import { onMounted, ref } from 'vue'
import { getTeleport, register } from '@antv/x6-vue-shape'
import { useGraphStore } from '@/stores/antvx6/graph'
import RenderEntrance from '@/antv-x6/components/RenderEntrance/RenderEntrance.vue'

register({
  shape: 'custom-vue-node',
  width: 100,
  height: 100,
  component: RenderEntrance,
})
const TeleportContainer = getTeleport()

const { setGraph } = useGraphStore()

const x6ContainerRefEl = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!x6ContainerRefEl.value) {
    console.warn(`初始化antv/x6失败，未找到dom`, dom)
    return
  }
  const graphIns = new Graph({
    container: x6ContainerRefEl.value,
    autoResize: true,
    background: {
      color: '#F2F7FA',
    },
  })
  graphIns.use(new Scroller({
    enabled: true,
  }))
  graphIns.addNode({
    shape: 'custom-vue-node',
    x: 100,
    y: 60,
  })
  setGraph(graphIns)
})
</script>

<template>
  <div ref="x6ContainerRefEl" class="antv-x6-container" />
  <TeleportContainer />
</template>

<style scoped lang="css">
  .antv-x6-container {
    width: 100%;
    height: 100%;
  }
</style>
