import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Scroller } from '@antv/x6-plugin-scroller'

export class X6Designer {
  #graph: Graph | null = null
  #dnd: Dnd | null = null
  constructor(dom: HTMLElement | null) {
    this.#initX6(dom)
  }

  #initX6(dom: HTMLElement | null) {
    if (dom) {
      const graphIns = new Graph({
        container: dom,
        autoResize: true,
        background: {
          color: '#F2F7FA',
        },
      })
      graphIns.use(new Scroller({
        enabled: true,
      }))
      graphIns.addNode({
        shape: 'custom-vue-node',
        x: 100,
        y: 60,
      })
      this.#graph = graphIns
    }
  }

  useDnd() {
    const graph = this.#graph
    if (this.#graph) {
      this.#dnd = new Dnd({
        target: graph,
      })
    }
  }

  useScroller() {
    const scroller = new Scroller({
      enabled: true,
    })
    console.log(scroller)
  }
}
