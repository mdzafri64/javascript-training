let arr = [2, 3, 4, 5, 6, 'xafri']

arr.forEach(myFunc)

function myFunc(value, key){
   // console.log(key, value);
   console.log(`${value} index number par hai ${key}`)
    
}

// make above code in such a may that forEach will contain function and arrow 
// function within it self.


// let array = [10, 20, 30 ,40, 50]
// array.forEach(myFunc)

// arr.map(function(value, key){
//    console.log(value, key)
// })

// arr.map((value, key) => console.log(value, key))