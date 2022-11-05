import { useState } from "react";
import axios from "axios";

import icon from '../assets/icon.png'

const Register = () => {

    // create three pieces of state to store the name, email and password of the user
    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    //Register function to be called when the submit button on the form is clicked this will add the user credentials to the mongoDB 
    const registerUser =  async () =>{

        try {
         const res =   await axios.post("http://localhost:5172/register",{
            name:name,
            email:email,
            password:password
         })
            console.log('User added successfully');
            console.log(res.status)
        } 
        
        catch (error)
         {
            console.log(`User not added successfully ${error.message}`)
        }

        //Clear the input field of any entry
        setEmail('')
        setPassword('')
        setName('')

    }


    return ( 
        <div>
        <h1 className="text-center text-slate-100 font-poppins text-4xl mt-20 font-medium">
        Sign up
        </h1>
            <div className="w-10/12 flex flex-col bg-gray-700 bg-opacity-20 rounded-md p-3 mt-28 sm:w-96 mx-auto">
            <div  className=" mt-8 mb-8 font-poppins text-slate-100 text-lg flex flex-col" >
                <label>Name</label>
                <input type="text" name="" id="" className=" p-1 shadow-sm mt-1 mb-4 outline-none bg-transparent border-b-2" placeholder="your name" value={name} onChange={ (e) => {setName(e.target.value)}}/>

                <label>Email</label>
                <input type="Email" name="" id="" className="p-1 shadow-sm outline-none mb-4 bg-transparent border-b-2" placeholder="you@gmail.com" value={email} onChange={ (e) => {setEmail(e.target.value)}}/>

                <label>Password</label>
                <input type="password" name="" id="" className="p-1 shadow-sm mt-1 outline-none bg-transparent border-b-2" placeholder="*******" value = {password} onChange= { (e) => {setPassword(e.target.value)}}/>

                <button className="bg-green rounded-md mt-8 cursor-pointer hover:opacity-70" onClick={registerUser}> Submit </button>

            </div>

            <div className="flex justify-between font-poppins">
                <p className=" text-slate-100 text-xs">Already have an account
                </p>
                <span className="text-blue-600 text-xs hover:underline underline-offset-4"><a href="">sign in</a></span>
            </div>

            </div>

        </div>
     );
}
 
export default Register;