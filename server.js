const express = require('express')


const port = process.env.PORT || 3000
const app = express();

// middleware - JSON parsing
app.use(express.json());

// connection
app.listen(port, () =>
    console.log("Ready to run..."));
