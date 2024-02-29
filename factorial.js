console.log('Iterative', factorialIterative(8))
console.log('Iterative', factorialRecursive(8))

function factorialIterative (n) {
    let k = n

}

function factorialRecursive (n) {
    if (n === 1) {
        return 1
    }
    return (n * factorialRecursive(n-1))

}