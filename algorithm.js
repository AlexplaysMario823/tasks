
let linkedList = {
    headPointer: 3,
    nextFree: 4,
    nodes: {
      0: ['Dave', 2],
      1: ['John', 0],
      2: ['Phil', -1],
      3: ['Brian', 1],
      4: [null, 5],
      5: [null, 6],
      6: [null, -1]
    },
    insert (pos, item) {
      let node = nodes[this.headPointer]
      this.nodes[this.nextFree][0]

      for (let i=1;i<pos-1;i++) {
        node = this.nodes[node[1]]
      }
      // your code here
    }
  }
  
  linkedList.insert(3, 'Eric')
  console.log(linkedList)
    