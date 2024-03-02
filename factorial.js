console.log('Iterative', factorialIterative(8))
console.log('Iterative', factorialRecursive(8))

function factorialIterative (n) {
    let total = n
    let next = n
    while (true){
        next -= 1
        if (next > 1) {
            total = total * next
        }
        else {
            return total
        }
         

    }

}

function factorialRecursive (n) {
    if (n === 1) {
        return 1
    }
    return (n * factorialRecursive(n-1))

}