import type { Graph } from '@antv/x6'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useGraphStore = defineStore('graphStore', () => {
  const graph = shallowRef<Graph | null>(null)
  function setGraph(graphInstance: Graph) {
    graph.value = graphInstance
  }
  return {
    graph,
    setGraph,
  }
})
