import type { Node } from '@antv/x6'
import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Scroller } from '@antv/x6-plugin-scroller'
import { useWidgetStoreOutSide } from '@/stores/antvx6/widget'
import { WIDGET_PREFIX, settingMap } from '@/antv-x6/register'
import type { SideConfig } from '@/antv-x6/components/DesignerLayout/LeftSide/sideConfig'

export class X6Designer {
  graph: Graph | null = null
  dnd: Dnd | null = null
  scroller: Scroller | null = null
  constructor(dom: HTMLElement | null) {
    this.#initX6(dom)
  }

  #initX6(dom: HTMLElement | null) {
    if (dom) {
      const graphIns = new Graph({
        container: dom,
        autoResize: true,
        background: {
          color: '#65acd9',
        },
      })
      graphIns.use(new Scroller({
        enabled: true,
      }))
      this.graph = graphIns

      this.usePlugin()
    }
  }

  usePlugin() {
    this.useDnd()
    this.useScroller()
  }

  useDnd() {
    const graph = this.graph
    if (graph) {
      this.dnd = new Dnd({
        target: graph,
        getDropNode: this.getDropNode,
      })
    }
  }

  useScroller() {
    this.scroller = new Scroller({
      enabled: true,
    })
  }

  getDropNode(draggingNode: Node): Node {
    const bindData = draggingNode.data.sideConfig
    const widgetStore = useWidgetStoreOutSide()
    const settingInstance = settingMap[`${WIDGET_PREFIX}${bindData.type}`]
    const itemSettings = settingInstance.initSettings()
    widgetStore.addWidget(draggingNode.id, itemSettings)
    return draggingNode.clone({ keepId: true })
  }

  startDrag(sideConfig: SideConfig, e: MouseEvent) {
    const node = this.graph?.createNode({
      shape: 'x6-designer-vue-view',
      width: 100,
      height: 40,
      data: {
        sideConfig,
      },
    })
    if (node) {
      this.dnd?.start(node, e)
    }
  }
}
