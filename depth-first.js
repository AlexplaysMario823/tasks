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
      let stack = []
      let visited = []
      stack.push(startNode)
      visited.push(startNode)
      while (stack.length) {
        let node = stack[stack.length - 1] // stack peek
        let visitedNeighbour = false
        for (let neighbour of this.adjacencyList[node]) {
          if (!visited.includes(neighbour)) {
            visitedNeighbour = true
            stack.push(neighbour)
            visited.push(neighbour)
            break
          }
        }
        if (!visitedNeighbour) stack.pop()
      }
      return visited
    }
  }
  let g = new Graph()
  for (let node of Object.keys(g.adjacencyList)) {
    console.log(`Traversing from ${node}:`, g.traverse(node))
  }