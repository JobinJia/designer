<script setup lang="ts">
import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'
import TomJpg from '@/assets/tom.jpg'

defineOptions({
  widgetType: WidgetTypeEnum.Image,
})
</script>

<template>
  <img :src="TomJpg" alt="图片" class="x6-image">
</template>

<style scoped lang="scss">
.x6-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
