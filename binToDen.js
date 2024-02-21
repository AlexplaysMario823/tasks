let num = prompt("Type your number ")
let timesing = 1
let valid = true
console.log(num.length)
for(let i=num.length; i< 1; i--) {
    if (num[i-1] === 1) {
        num += timesing

    }
    else if (num[i-1] === 0) {

    }
    else {
        valid = false
    }
    timesing = timesing * 2
}
if (valid = true) {
    console.log(num)
}
else {
    console.log("non valid")
}