const Register = () => {
    return ( 
        <div>
        <h1 className="text-center text-slate-100 font-poppins text-4xl mt-20 font-medium">
        Sign up
        </h1>
            <div className="w-10/12 flex flex-col bg-gray-700 bg-opacity-20 rounded-md p-3 mt-28 sm:w-96 mx-auto">
            <form action="" method="post"className=" mt-8 mb-8 font-poppins text-slate-100 text-lg flex flex-col" >
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" className=" p-1 shadow-sm mt-1 mb-4 outline-none bg-transparent border-b-2" placeholder="Chris"/>
                <label htmlFor="">Email</label>
                <input type="Email" name="" id="" className="p-1 shadow-sm outline-none mb-4 bg-transparent border-b-2" placeholder="you@gmail.com"/>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" className="p-1 shadow-sm mt-1 outline-none bg-transparent border-b-2" placeholder="*******"/>
                <input type="submit" value="submit"  className="bg-green rounded-md mt-8 cursor-pointer hover:opacity-70"/>
            </form>
            </div>
        </div>
     );
}
 
export default Register;