let num = prompt("type your number ")
let place = Math.floor(Math.log2(num)) 
let binary = ""
while (place >= 0) {
    if (num >= 2**place) {
        num = num - 2**place
        binary = binary + "1"
    }
    else {
        binary = binary + "0"
    }
    place -= 1

}
console.log(binary)