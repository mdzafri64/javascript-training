// let family = ['aiman', 'saiman']
// let family = {
//     aiman: {
//         name: 'Aiman Ahuja',
//         age: 20
//     },
//     saiman: {
//         name: 'Saiman Taneja',
//         age: 22
//     }
// }

// let family = {
//     aiman: {
//         name: 'Aiman Ahuja',
//         age: 20,
//         child1: {
//             name: 'Qari Varma',
//             age: 5
//         }
//     },
//     saiman: {
//         name: 'Saiman Taneja',
//         age: 22,
//         child1: {
//             name: 'Qari Varma',
//             age: 5
//         }
//     }
          let family = {
              brother1: {
                name: 'Safeer',
                age: 24,
                qualification: 'graduation',
                child1: {
                    name: 'Basi Ali',
                    age: 2,
                },
                child2: {
                    name: 'Samad',
                    age: '9months'
                }  
              },
              brother2: {
                name: 'Sameer',
                age: 25,
                qualification: 'inter',
              
                child1: {
                    name: 'Mufassil',
                    age: 2,
                },
                child2: {
                    name: 'afridi',
                    age: '6months'
                }
              }    

    }
    console.log(family.brother2.child1.age)