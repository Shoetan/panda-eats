import express from 'express'
import cors from 'cors'
import axios from 'axios'
import bodyParser from 'body-parser'
import { dbConnect } from './db/dbconnect.js'
import bcrypt from 'bcrypt'
import { User } from './db/userModel.js'

const PORT = 5172
const app = express()

app.use(cors())

/* Configuring the body parser */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/* Run the dbConnect function to make a connection to the database */

dbConnect()

/* Endpoint 1 this endpoint returns the string hello word */
app.get('/', (req, res) =>{
    res.json({message : 'This is your server response'})
})




/* Create register endpoint here to receive data from the body of the frontend and store them in the mongoDB I have created.
*/

app.post('/register', (req, res) =>{
    //get email and password from the body and first is to hash the password 10 salt times using the bcrpyt library
    const user = new User ({
        email : req.body.email,
        password : req.body.password
    })

    user.save()
    .then(() =>{
        console.log("User added successfully");
    })
    .catch(err => console.log(`User not added ${err}`))


})


app.listen(PORT,   ()=>{
    console.log(`Server listening on port ${PORT}`)
})
