import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
// create an export a database connection function that can be used anywhere

 export const dbConnect = async()  =>{

    mongoose.connect(
        process.env.DB_URI
    )
    .then(()=>{
        console.log("Connection to Mongo was successful");
    })
    .catch( err => {
        console.log(`Connection to Mongo failed: ${err}`);
    })



}

