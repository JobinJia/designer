<script setup lang="ts">
import { Dnd } from '@antv/x6-plugin-dnd'
import { onMounted } from 'vue'
import { useGraphStore } from '@/stores/antvx6/graph'

const { graph } = useGraphStore()

let dnd: Dnd | null = null

onMounted(() => {
  dnd = new Dnd({
    target: graph.value,
  })
})
function startDrag(e: MouseEvent<HTMLDivElement, MouseEvent>) {
  // 该 node 为拖拽的节点，默认也是放置到画布上的节点，可以自定义任何属性
  const node = graph.value.createNode({
    shape: 'rect',
    width: 100,
    height: 40,
  })
  dnd?.start(node, e.nativeEvent)
}
</script>

<template>
  <div class="left-side">
    <div class="left-side-list">
      <div @click="startDrag">
        文本
      </div>
      <div>图片</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .left-side {
    width: 270px;
    height: 100%;
    &-list {}
  }
</style>
