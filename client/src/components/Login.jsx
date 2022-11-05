import { useState } from "react";

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            
            <h1 className="text-center text-slate-100 font-poppins text-4xl mt-20 font-medium">
                 Sign up
            </h1>
            
            <div className="w-10/12 flex flex-col bg-gray-700 bg-opacity-20 rounded-md p-3 mt-28 sm:w-96 mx-auto">

                <div  className=" mt-8 mb-8 font-poppins text-slate-100 text-lg flex flex-col" >
            
                    <label>Email</label>
                    <input type="Email" name="" id="" className="p-1 shadow-sm outline-none mb-4 bg-transparent border-b-2" placeholder="you@gmail.com" value={email} onChange={ (e) => {setEmail(e.target.value)}}/>

                    <label>Password</label>
                    <input type="password" name="" id="" className="p-1 shadow-sm mt-1 outline-none bg-transparent border-b-2" placeholder="*******" value = {password} onChange= { (e) => {setPassword(e.target.value)}}/>

                    <button className="bg-green rounded-md mt-8 cursor-pointer hover:opacity-70" > Login </button>

                </div>

            </div>
        
        
        </div>
     );
}
 
export default Login;