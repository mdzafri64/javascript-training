let b = 'apple'  // b = apple
let c = ''      // c = ''
let d = 'united' // d = united
let a
c = b           // c = apple
b = c           // b = apple
c = a           // a = ''
a = 'united'    // united
b = 'orange'    // b = orange
c = 'apple'     // c = apple
b = a           // b = united
c = d           // c = united
d = a           // d = united
console.log(a); // united
console.log(b)   // united
console.log(c)  // united