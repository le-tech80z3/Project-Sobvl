const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/sobvl'
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    
    Xipsolo: require('./xipsolo'),
    Xip: require('./xip')
}