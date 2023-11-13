function name(a, b, c){
    let statement = 'my name is ' + a.slice(0,3) + ' and my age is ' + b + ' and i am a ' + c.slice(0,-5)
    
    return statement.replaceAll('and', '&') 
}
console.log(name('Zafri', 24, 'student'));