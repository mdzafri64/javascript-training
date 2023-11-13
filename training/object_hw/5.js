let brands = {
    Nerolac: 'very good',
    Asian: 'good',
    Berger: 'worse'
}
let name = 'Yash'
console.log(brands.Asian);  // good
brands.Berger = 'bad'       // bad
name = 'brands.Nerolac'     // very good
if(name == 'Yash'){
    brands.Asian = 'good color'
} else{
    name = 'Yash Chopda'
}
console.log(brands)  // {Nerolac = 'very good', Asian = 'good', Berger = 'bad' }
console.log(name)    // name = 'yash chopda'
