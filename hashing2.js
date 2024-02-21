class Dictionary {
    data = Array(10)
    add (key, value) {
      let hash = this.hash(key)
      this.data[hash] = [key, value]
    }
    get (key) {
      let hash = this.hash(key)
      return this.data[hash][1]
    }
    hash (key) {
      let total = 0
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
      }
      let index = total % this.data.length

      //
      while (this.data[index] && this.data[index] !== key) {

        key = (key+1) % 10
      }
    
      return total % this.data.length
    }
  }
  let d = new Dictionary()
  let itemsToAdd = [
    ['apples', 5],
    ['words', 'This is great'],
    ['isGreat', true]
  ]
  itemsToAdd.forEach(item => d.add(item[0], item[1]))
  console.log(d.data)
  itemsToAdd.forEach(item => {
    let val = d.get(item[0])
    if (val === item[1]) {
      console.log(`Key "${item[0]}" does store "${item[1]}" correctly.`)
    } else {
      console.error(`Key "${item[0]}" should store "${item[1]}" but actually stores "${d.get(item[0])}"`)
    }
  })