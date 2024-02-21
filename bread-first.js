class Graph {
    adjacencyList = {
      A: ['D', 'E'],
      B: ['E'],
      C: ['E', 'F'],
      D: ['A', 'E', 'G', 'H'],
      E: ['A', 'B', 'C', 'D'],
      F: ['C', 'H'],
      G: ['D'],
      H: ['D', 'F']
    }
    traverse (startNode) {
      let queue = []
      let visited = []
      queue.push(startNode) // enQueue
      visited.push(startNode)
      while (queue.length) {
        let node = queue.shift() // deQueue
        for (let neighbour of this.adjacencyList[node]) {
          if (!visited.includes(neighbour)) {
            visited.push(neighbour)
            queue.push(neighbour)
          }
        }
      }
      return visited
    }
  }
  let g = new Graph()
  for (let node of Object.keys(g.adjacencyList)) {
    console.log(`Traversing from ${node}:`, g.traverse(node))
  }