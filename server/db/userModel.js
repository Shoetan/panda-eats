import mongoose from "mongoose"

const {Schema} = mongoose

const userSchema =  new Schema({
    email : {
        type: 'string',
        required : [true, "Please enter a valid email address"],
        unique : [true, "Email already exists"]
    },
    password : {
        type: 'string',
        required : [true, "Please enter a valid password"],
        unique:false
    },
})

//This code will create a user collection if the collection is not available in the mongodb database.
export const User = mongoose.model.Users || mongoose.model("Users", userSchema)
