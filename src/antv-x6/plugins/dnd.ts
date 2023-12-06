import type { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'

export function useX6Dnd(graph: Graph) {
  const dnd = new Dnd({
    target: graph,
  })

  function startDrag(e: MouseEvent) {
    console.log('e => ', e)
  }

  return {
    dnd,
    startDrag,
  }
}
