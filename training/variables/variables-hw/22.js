let arr = [10, 13, 17, 20, 23]
let a = 'mango'
let b = 55       // 'mango'
arr[2] = b       // arr[2] = 55   
b = 'mango'      // b = apple   
arr[2] = b       // arr[2] = 'mango'   
console.log(arr) // 10, 13, mango, 20, 23
console.log(a)   // 'mango'
console.log(b)   // 'mango'
