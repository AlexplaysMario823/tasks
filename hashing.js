class HashTable {
    data = Array(10)
    add (key) {
      let index = this.hash(key)
      this.data[index] = key
    }
    get (key) {
      let index = this.hash(key)
      return this.data[index]
    }
    hash (key) {
      let total = 0
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
      }
      let index = total % this.data.length
      while (this.data[key] != null && this.data[index] != key) {
                index+=1
            if (index >= this.data.length) {
                index = 0
            }


      }
      // linear probe if necessary in case of collisions
      // YOU: a while loop to find a new index if there's something already there that isn't the key
      return index
    }
  }
  let d = new HashTable()
  let itemsToAdd = [
    'apples',
    'words',
    'isGreat'
  ]
  itemsToAdd.forEach(item => d.add(item))
  console.log(d.data)
  itemsToAdd.forEach(item => {
    let val = d.get(item)
    if (val === item) console.log(`Value "${item}" is stored correctly.`)
    else console.error(`Value "${item}" instead gave "${val}"`)
  })