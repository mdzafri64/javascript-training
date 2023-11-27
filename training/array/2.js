let arr = [5, 7, 3, 2, 10]

// print the following result

// 10
// 14
// 6
// 4
// 20
let number = arr.map(multiplyNumber)
function multiplyNumber(number){
    console.log(number*2)
}

// arr.map(function(multiply){
//    console.log(multiply*2)
//})
