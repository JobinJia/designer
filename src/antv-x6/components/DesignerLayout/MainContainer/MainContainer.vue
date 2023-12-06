<script setup lang="ts">
import TopNav from '@/antv-x6/components/DesignerLayout/TopNav/TopNav.vue'
import Render from '@/antv-x6/components/Render/Render.vue'
import LeftSide from '@/antv-x6/components/DesignerLayout/LeftSide/LeftSide.vue'
</script>

<template>
  <div class="designer-layout">
    <TopNav />
    <div class="designer-layout-main">
      <LeftSide />
      <Render />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .designer-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &-main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }
  }
</style>
