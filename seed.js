const db = require('./models')

let xipsolos = [{
    name: 'Study Notes',
    xips: []
},
{
    name: 'Adventure',
    xips: []
}]


db.Xipsolo.deleteMany({}, (err, deletedXipsolos) => {
    db.Xipsolo.create(xipsolos, (err, seededXipsolos) => {
        if (err) console.log(err);

        console.log(xipsolos.length, 'xipsolos created successfully')

        process.exit()
    })
})