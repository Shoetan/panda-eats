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

/* Configuring all necessary middleware for the server */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())


/* Run the dbConnect function to make a connection to the database */

dbConnect()

/* Endpoint 1 this endpoint returns the string hello word */
app.get('/', (req, res) =>{
    res.json({message : 'This is your server response'})
})




/* Create register endpoint here to receive data from the body of the frontend and store them in the mongoDB I have created.
*/

app.post('/register', async (req, res) =>{
    //get email and password from the body and hash the password 10 salt times using the bcrpyt library
     
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
     try {
        const hashedPassword =  await bcrypt.hash(password, 10)
        const user = new User({
            name : name.toLowerCase(),
            email : email.toLowerCase(),
            password : hashedPassword
        })

        const response = await user.save()
        res.send(response)
     }
      catch (error) {
        console.log(error.message);
     } 

    })

// Create a login end point to receive data from a form and compare it to data in  database

app.post('/login', async(req, res) =>{
    //get email and password from the user 

    const email = req.body.email
    const password = req.body.password

    //get the user object from the database using the User model and the findOne function

    const user =  await User.findOne({email})

    //if user object is not found i.e the user email is not found in the database dsiplay this error

    if (!user) {
        res.status(400).send({error: 'User not found'})
    }

    //else if the email is found in the database compare the password returned from the user object and the password entered in the login form

    else {
        const matchedPassword = await bcrypt.compare(password, user.password)

        if(!matchedPassword) {
            res.status(400).send({error: 'Invalid password'})
        }

        else{
            res.send({
                message:'Loggedin Successfully'
            })
        }
    }
}) 

app.listen(PORT,   ()=>{
    console.log(`Server listening on port ${PORT}`)
})
