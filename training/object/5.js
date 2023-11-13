let fruits = {
    red: 'apple',
    green: 'guvava',
    yellow: 'papaya'
}

let name = 'Ram'
console.log(fruits.green)  // guvava
fruits.green = 'grapes'    // grapes
name = fruits.red          // apple 
if(name == 'Ram'){
    fruits.yellow = 'yellow guava'
} else {
    name = 'Major Ram'
}
console.log(fruits)  //{red: 'apple', green: 'grapes', yellow: 'papaya'}
console.log(name)    // Major Ram