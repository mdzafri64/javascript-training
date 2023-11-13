let shop = {
    shekhana: 'Bharat Kirana Store',
    imadpur: 'Shadab Kirana Store',
    chajju: 'Affan Store'
}

let garhpar = 'aaa store'

shop.chajju = 'Amanat Store'

garhpar = shop.imadpur

console.log(shop)  // {shekhana: 'bharat kirana store, imadpur: 'shadab kirana store', chajju: 'amanat store'}
console.log(garhpar)  // imadpur: 'shadab kirana store'