import express from 'express'
import cors from 'cors'
import axios from 'axios'
import bodyParser from 'body-parser'
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()



const PORT = 5172
const app = express()

app.use(cors())

/* Configuring the body parser */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Before anything happens check if cloudinary config is up and running */

if(typeof(process.env.CLOUDINARY_URL) === 'undefined'){
    console.warn('!! cloudinary config is not defined check dotenv file make sure it is exported')
}

let img = []

/* Endpoint 1 this endpoint returns the string hello word */
app.get('/', (req, res) =>{
    res.send(img)
})


/* Endpoint 2 this endpoint will be called images 
   this endpoint will retun images blob from cloudinary server

*/


app.listen(PORT,   ()=>{
    console.log(`Server listening on port ${PORT}`)
})
