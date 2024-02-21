class Queue {
    maxLength = 7
    next = 0 // where to put next enQueue()'d item
    // circular queues need to keep track of back of queue too
    data = Array(this.maxLength)
  
    isEmpty () {
      return (this.next === 0)
    }
    isFull () {
      return (this.next === this.maxLength)
    }
    enQueue (item) {
      q.data += item
    }
    deQueue () {
      q.data[this.next] = null
    }
  }
  
  let q = new Queue()
  q.enQueue('Alice')
  q.enQueue('Liz')
  q.enQueue('Carol')
  console.log(q.deQueue()) // should output 'Alice'
  q.enQueue('Edna')
  console.log(q.data) // should output ['Liz', 'Carol', 'Edna']
  // .... then make sure it handles isFull() correctly etc