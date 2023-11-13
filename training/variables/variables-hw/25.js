let movies = {
    Arjun: 'Half girlfriend',
    Varun: 'Badri ki duhania',
    Aamir: 'Dil'
}

console.log('I want to watch ' + movies.Aamir);  // Dil
movies.Varun = 'Badri ki dulhania'
let actors = ['Arbaz Khan', 'Siddarth Malhotra', 'Abhishek Bacchan']
actors[2] = movies.Aamir

console.log(actors)  // ['Arbaz Khan', 'Siddarth Malhotra', 'Dil']
console.log(movies)  // {Arjun: 'Half girlfriend', Varun: 'Badri ki dulhania', Aamir: 'Dil'} 