const express = require('express')
require("dotenv").config()
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3002
const app = express();

// MIDDLEWARE - JSON parsing
app.use(express.json())


const routes = require('./routes')
const corsOptions = {
    // URL to accept requests from
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 204
  }
  
  app.use(cors(corsOptions))
  

// MIDDLEWARE 
app.use(session({
    store: new MongoStore({ url: process.env.MONGODB_URI || "mongodb://localhost:27017/sobvl" }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))


// middleware - passport
app.use(passport.initialize())
app.use(passport.session())


app.use('/api/v1/xips', require('./routes/xips'))
app.use('/api/v1/xipsolos', require('./routes/xipsolos'))
app.use('/api/v1/users', require('./routes/users'))
app.use('/api/v1/auth', require('./routes/auth'))



// connection
app.listen(PORT, () => console.log('Ready to run... port: ', PORT));
