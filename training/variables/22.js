let arr = [5, 9, 10, 4, 1]
let a = 'apple'   // a = apple  
let c = 17        // c = 17  
arr[3] = c        // arr [3] = 17
c = 'apple'       // c = apple  
arr[3] = c        // arr[3] = apple  
console.log(arr); // 5, 9, 10, apple, 1
console.log(a)    // a = apple  
console.log(c)    // c = apple