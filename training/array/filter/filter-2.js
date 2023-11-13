let Age = [25, 16, 33, 12, 60, 10, 14, 20]

let result = Age.filter(checkAge)
console.log(result)
function checkAge(a){
    return a < 18
}