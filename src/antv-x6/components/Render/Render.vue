<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTeleport, register } from '@antv/x6-vue-shape'
import { X6Designer } from '@/antv-x6/logics/X6Designer'
import { useDesignerStore } from '@/stores/antvx6/designer'
import RenderEntrance from '@/antv-x6/components/RenderEntrance/RenderEntrance.vue'

register({
  shape: 'x6-designer-vue-view',
  width: 100,
  height: 100,
  component: RenderEntrance,
})
const TeleportContainer = getTeleport()

const { setDesigner } = useDesignerStore()

const x6ContainerRefEl = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const designerInstance = new X6Designer(x6ContainerRefEl.value!)
  setDesigner(designerInstance)
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
