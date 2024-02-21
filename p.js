class sortedLinkedList {
  
    headPointer = false // no items in the list yet
    nodes = {}
  
    nextFree () {
      return crypto.randomUUID()
    }
  
    insert (item) {
      // your code here
    }
  }
  
  let list = new sortedLinkedList()
  list.insert('cake')
  list.insert('banana')
  list.insert('cherry')
  list.insert('apple')
  list.insert('doughnut')
  list.insert('fish')
  console.log(list)