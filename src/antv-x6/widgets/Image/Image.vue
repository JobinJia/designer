<script setup lang="ts">
import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

defineOptions({
  widgetType: WidgetTypeEnum.Image,
})
</script>

<template>
  <div class="x6-text">
    <img src="@/assets/tom.jpg" alt="">
  </div>
</template>

<style scoped lang="scss">
  .x6-text {
    width: 100%;
    height: 100%;
  }
</style>
