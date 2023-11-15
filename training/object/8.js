let obj = {
    id: '12Ab',
    score: 23,
    batting_average: 56,
    centuries: [
        {
            where: 'New Delhi',
            against: 'Bangladesh',
            runs: 121,
            isNotOut: false
        },
        {
            where: 'Lords',
            against: 'Australia',
            runs: 101,
            isNotOut: true
        },
        {
            where: 'Lahore',
            against: 'Pakistan',
            runs: 184,
            isNotOut: true
        }
    ]
}

// console.log(obj.centuries[1]);
// console.log(obj.centuries)

obj.centuries.map((info) => {
    console.log(info.runs)
})


