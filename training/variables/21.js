let a = 2.5        // a = 2.5
let b = 3          // b = 3 
let c = 9          // c = 9 
b = Math.ceil(a)   // b = 3 
c = Math.floor(a)  // c = 3
a = 5.1            // a = 5.1 
c = 4.9            // c = 4.9 
a = Math.floor(a)  // a = 5 
a = b              // a = 3 
b = a              // b = 3 
a = b              // a = 3 
b = c              // b = 4.9 
c = a              // c = 3 
a = a + c          // a = 6
console.log(a);    // a = 6 
console.log(b)     // b = 4.9 
console.log(c)     // c = 3 