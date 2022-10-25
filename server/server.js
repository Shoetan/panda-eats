import express from 'express'
import cors from 'cors'
import axios from 'axios'
const PORT = 5172
const app = express()

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.listen(PORT,   ()=>{
    console.log(`Server listening on port ${PORT}`)
})
