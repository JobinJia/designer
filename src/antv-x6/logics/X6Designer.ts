import type { Node } from '@antv/x6'
import { Graph } from '@antv/x6'
import { Clipboard } from '@antv/x6-plugin-clipboard'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Scroller } from '@antv/x6-plugin-scroller'
import { Snapline } from '@antv/x6-plugin-snapline'
import { Transform } from '@antv/x6-plugin-transform'
import { Keyboard } from '@antv/x6-plugin-keyboard'
import { History } from '@antv/x6-plugin-history'
import { Selection } from '@antv/x6-plugin-selection'
import { Export } from '@antv/x6-plugin-export'
import { useWidgetStoreOutSide } from '@/stores/antvx6/widget'
import { WIDGET_PREFIX, settingMap } from '@/antv-x6/register'
import type { SideConfig } from '@/antv-x6/components/DesignerLayout/LeftSide/sideConfig'

export class X6Designer {
  graph: Graph | null = null
  dnd: Dnd | null = null
  scroller: Scroller | null = null
  transform: Transform | null = null
  snapline: Snapline | null = null
  clipbooard: Clipboard | null = null
  keyborad: Keyboard | null = null
  history: History | null = null
  selection: Selection | null = null
  export: Export | null = null
  constructor(dom: HTMLElement | null) {
    this.#initX6(dom)
  }

  #initX6(dom: HTMLElement | null) {
    if (dom) {
      this.graph = new Graph({
        container: dom,
        autoResize: true,
        background: {
          color: '#65acd9',
        },
        connecting: {
          snap: true,
        },
      })
      this.usePlugin()
    }
  }

  usePlugin() {
    this.useDnd()
    this.useScroller()
    this.useTransform()
    this.useSnapline()
    this.useClipboard()
    this.useKeyboard()
    this.useHistory()
    this.useSelection()
    this.useExport()
  }

  useDnd() {
    if (this.graph) {
      this.dnd = new Dnd({
        target: this.graph,
        getDropNode: this.getDropNode,
      })
    }
  }

  useScroller() {
    if (this.graph) {
      this.scroller = new Scroller({
        enabled: true,
      })
      this.graph.use(this.scroller)
    }
  }

  useTransform() {
    if (this.graph) {
      this.transform = new Transform({
        resizing: {
          enabled: true,
          orthogonal: true,
          restrict: false,
          preserveAspectRatio: false,
        },
        rotating: {
          enabled: false,
        },
      })
      this.graph.use(this.transform)
    }
  }

  useSnapline() {
    if (this.graph) {
      this.snapline = new Snapline({
        enabled: true,
      })
      this.graph.use(this.snapline)
    }
  }

  useClipboard() {
    if (this.graph) {
      this.clipbooard = new Clipboard({
        enabled: true,
      })
      this.graph.use(this.clipbooard)
    }
  }

  useKeyboard() {
    if (this.graph) {
      this.keyborad = new Keyboard({
        enabled: true,
      })
      this.graph.use(this.keyborad)
    }
  }

  useHistory() {
    if (this.graph) {
      this.history = new History({
        enabled: true,
      })
      this.graph.use(this.history)
    }
  }

  useSelection() {
    if (this.graph) {
      this.selection = new Selection({
        enabled: true,
      })
      this.graph.use(this.selection)
    }
  }

  useExport() {
    if (this.graph) {
      this.export = new Export()
      this.graph.use(this.export)
    }
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
    const settingInstance = settingMap[`${WIDGET_PREFIX}${sideConfig.type}`]
    const initSettings = settingInstance.initSettings()
    const node = this.graph?.createNode({
      shape: 'x6-designer-vue-view',
      width: initSettings.width,
      height: initSettings.height,
      data: {
        sideConfig,
      },
    })
    if (node) {
      this.dnd?.start(node, e)
    }
  }
}
