<script lang="tsx">
import type { VueShape } from '@antv/x6-vue-shape'
import { defineComponent, h, inject } from 'vue'
import type { SideConfig } from '@/antv-x6/components/DesignerLayout/LeftSide/sideConfig'
import { WIDGET_PREFIX, widgetMap } from '@/antv-x6/register'

// const Empty = h('span', '未找到组件引用')

export default defineComponent({
  name: 'RenderEntrance',
  components: {
    ...widgetMap,
  },
  setup() {
    const getNode = inject('getNode') as () => VueShape
    function getRender() {
      const bindDataConfig = getNode().data.sideConfig as unknown as SideConfig
      const key = `${WIDGET_PREFIX}${bindDataConfig.type}`
      return widgetMap[key] || null
    }
    return () => {
      const Render = getRender()
      return Render ? h(Render) : h('span', '没有啊')
    }
  },
})
</script>

<style scoped lang="css">

</style>
