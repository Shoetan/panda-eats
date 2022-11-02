import express from 'express'
import cors from 'cors'
import axios from 'axios'
import bodyParser from 'body-parser'

import { dbConnect } from './dbconnect.js'

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


/* Endpoint 2 this endpoint will be called images 
   this endpoint will retun images blob from cloudinary server
*/


app.listen(PORT,   ()=>{
    console.log(`Server listening on port ${PORT}`)
})
