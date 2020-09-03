const db = require('./models')
const { Xip } = require('./models')


db.Xip.create ({
                    
    name: 'test',
    publisher: 'Brock',
    coverArtUrl: 'https://placekitten.com',
    comments: 'Good job yesterday',
    completed: true,
}).then(xip => {
    console.log(xip)
    
})
.catch(err=>console.log(err))

// db.Xipsolos.create ({
//     name: 'Study Notes'

// }) .then(xip => {
    
// })
// let xipsolos = [{
    
//     ,
//     {
//     name: 'Adventure',
//     xips: {

//         name: 'test',
//         publisher: 'Gamerx',
//         coverArtUrl: 'https://placekitten.com',
//         comments: 'New levels',
//         completed: true,

//     }
// }]


// db.Xipsolo.deleteMany({}, (err, deletedXipsolos) => {
//     db.Xipsolo.create(xipsolos, (err, seededXipsolos) => {
//         if (err) console.log(err);

//         console.log(xipsolos.length, 'xipsolos created successfully')

//         process.exit()
//     })
// })