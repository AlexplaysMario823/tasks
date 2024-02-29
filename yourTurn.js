// We're going to start with some unsorted words
let words = "apple carrot banana dog elephant ant"
let tree = new BinarySearchTree(words.split(' '))
console.log(tree.nodes)
// console.log('Sorted:', tree.sorted().map(v => v.value))
// console.log('Looking for "carrot":', tree.search('carrot'))

class BinarySearchTree {
  nodes = []

  // create a tree of the words in the input
  constructor (input = []) {
    // TODO: loop through items in input, adding each one in turn
  }

  // add a node, putting it in the correct place in the tree
  addNode (value) {
    let k = 0
    // TODO: make a node which has keys for: value, left and right
    // TODO: add it to this.nodes (by pushing or via index)
    // TODO: if not the root node, place it in the tree correctly
    if (tree.charCodeAt(k) > tree.charCodeAt(k+1)) {
      tree.charCodeAt(k).right = tree.charCodeAt(k+1)
    }
    else {
      tree.charCodeAt(k).left = tree.charCodeAt(k+1)
    }

  }

  // *recursively* place the node with currentId into the tree starting from checkId
  // checkId is which node to test against; currentId is the node we're trying to place
  placeInTree (checkId, currentId) {
    // TODO: find the value of the node we're trying to place
    // TODO: choose to place it left vs right of the checkId node
    // TODO: if there's already a node there, recursively call this function again for that node
    // TODO: else update the checkId node's left or right to be the id of the node we're placing
  }

  // sort nodes by traversing the binary tree with inorder (underneath) selection
  sorted () {
    // TODO: a method to return a sorted array of nodes via recursive in-order traversal
  }

  // search for a term in the tree
  search (term) {
    // TODO: recursively traverse the tree to find if a node with the term/value exists
  }
}