<script setup lang="ts">
import { ref } from 'vue'
import { WidgetTypeEnum } from '@/antv-x6/enum/WidgetType'

defineOptions({
  widgetType: WidgetTypeEnum.Text,
})

const text = ref('文本')
</script>

<template>
  <div class="x6-text">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
  .x6-text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
