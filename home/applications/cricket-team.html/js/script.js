function clickme(Players){
   var element = document.querySelector("#app")
//    .innerHTML = a

var data = Players.map((val) =>{
    return '<li>' + val + '</li>'  //<li> VIRAT KOHLI </li>
})

element.innerHTML = data.join('');
    
}