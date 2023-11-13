let num = [5, -2, 1, 8, 0, 4, -1]

let result = num.filter(checkNum)
console.log(result);

function checkNum(n){
    return n < 0
}