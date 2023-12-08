<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { unref } from 'vue'
import type { SideConfig } from './sideConfig'
import { sideConfigs } from './sideConfig'
import { useDesignerStore } from '@/stores/antvx6/designer'

const designerStore = useDesignerStore()

const { designer } = storeToRefs(designerStore)

function startDrag(item: SideConfig, e: MouseEvent) {
  // 该 node 为拖拽的节点，默认也是放置到画布上的节点，可以自定义任何属性
  unref(designer)?.startDrag(item, e)
}
</script>

<template>
  <div class="left-side">
    <div class="left-side-list">
      <div v-for="(group, idx) in sideConfigs" :key="`widget-group-${idx}`" class="widget-group">
        <div v-for="(item, cIdx) in group.children" :key="`widget-item-${idx}-${cIdx}`" class="widget-item" @mousedown="startDrag(item, $event)">
          {{ item.name }}
        </div>
      </div>
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
