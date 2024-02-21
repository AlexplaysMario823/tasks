class Stack {
    maxLength = 7
    top = -1 // index of top-most item
    data = Array(this.maxLength)
  
    isEmpty () {
      return (this.data[0] === null) 
    }
    isFull () {
      return (not(this.data[this.maxLength - 1]===null))
    }
    push (item) {
      this.data += item
    }
    pop () {
      for (let x=0;x<this.data.length;x++) {
        if (this.data[x]===null) {
            this.data[x-1] = null
            break
        }
      }
    }
    peek () {
        for (let x=0;x<this.data.length;i++) {
            if (this.data[x]===null) {
                return this.data[x-1] 
                break
            }
        }
    }
  }
  
  let s = new Stack()
  s.push('Alice')
  s.push('Liz')
  s.push('Carol')
  console.log(s.pop()) // should output 'Carol'
  s.push('Edna')
  console.log(s.data) // should output ['Alice', 'Liz', 'Edna']