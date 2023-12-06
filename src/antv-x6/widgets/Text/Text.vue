<script setup lang="ts">
import { ref } from 'vue'
import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

defineOptions({
  widgetType: WidgetTypeEnum.Text,
})
const a = ref(0)
</script>

<template>
  <div class="x6-text">
    Text{{ a }}
  </div>
</template>

<style scoped lang="scss">
  .x6-text {
    width: 100%;
    height: 100%;
  }
</style>
