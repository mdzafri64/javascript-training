// var players = [
//     {
//         value: 'India'
//     },

//     {
//         value: 'Pakistan'
//     },

//     {
//         value: 'England'
//     },

//     {
//         value: 'New Zealand'
//     },
// ]
function clickme(players){
    // document.getElementById("empty").innerHTML = a
    var element = document.querySelector('#app')
    // element.innerHTML = a
    

var data = players.map((val) =>{
    return '<li>' + val + '</li>'
})
element.innerHTML = data.join('');
}