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
    ],
    league_part: [
        {
            league_name: 'Ipl',
            team_part: 'kkr',
            team_owner: 'Sharukh Khan'
        },
        {
            league_name: 'big bash',
            team_part: 'canberra',
            team_owner: 'John'
        },
        {
            league_name: 'Ranji',
            team_part: 'Punjab',
            team_owner: 'Harbajan Singh'
        }
    ]
}

// console.log(obj.centuries[1]);
// console.log(obj.centuries)

// obj.centuries.map((info) => {
//     console.log(info.runs)
// })

obj.league_part.map((info)=>{
    console.log(info.league_name)

})
