import express from 'express'
import cors from 'cors'
import axios from 'axios'
import bodyParser from 'body-parser'
import { dbConnect } from './db/dbconnect.js'
import bcrypt from 'bcrpyt'

const PORT = 5172
const app = express()

app.use(cors())

/* Configuring the body parser */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



/* Endpoint 1 this endpoint returns the string hello word */
app.get('/', (req, res) =>{
    res.json({message : 'This is your server response'})
    dbConnect()
})


/* Create register endpoint here to receive data from the body of the frontend and store them in the mongoDB I have created.
*/

app.post('/register', (req, res) =>{
    //do something here
})


app.listen(PORT,   ()=>{
    console.log(`Server listening on port ${PORT}`)
})
