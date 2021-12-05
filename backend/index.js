// Imports
const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv')
const connection = require('./db')
const tasks = require('./routes/tasks')
dotenv.config()
//Running Express
const app = express()
// JSON to javascript objects
app.use(express.json())
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.use('/api/tasks', tasks)

app.use(cors())

// Connection Call to Mongo DB
connection()

const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Listening to port: ${port}`) })