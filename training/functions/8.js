function callMe (param1, param2, param3, ...rest){
    console.log(...rest);
    console.log(param1);
    console.log(param2);
    console.log(param3)
    
}

callMe(1,2,3,4,5)


function callAnothere(...rest){
console.log(...rest)
}

callAnothere('safeer', 'intekhab', 'zeeshan')