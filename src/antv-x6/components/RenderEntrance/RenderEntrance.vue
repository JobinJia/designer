<script lang="tsx">
import type { VueShape } from '@antv/x6-vue-shape'
import { computed, defineComponent, h, inject } from 'vue'

export default defineComponent({
  name: 'RenderEntrance',
  setup() {
    const getNode = inject('getNode') as () => VueShape
    // const getGraph = inject('getGraph') as () => Graph
    const widgetId = computed(() => getNode().id)
    console.log('widgets =', widgetId)
    // const componet = widgets[]
    // const RenderComponent = resolveComponent()
    return () => {
      return h('div', widgetId)
    }
  },
})
</script>

<style scoped lang="css">

</style>
