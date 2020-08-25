const express = require('express')
require("dotenv").config()
const cookieParser = require('cookie-parser')
const session = require('express-session')


const PORT = process.env.PORT || 3000
const app = express();

// middleware - JSON parsing
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: 'nine',
    resave: false,
    saveUninitialized: true
}));
app.use('/xip', require('./routes/xip'))




// connection
app.listen(PORT, () => console.log("Ready to run..."));
