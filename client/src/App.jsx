import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";


const App = () => {

   const [isSignedIn, SetIsSignedIn] = useState(false)
  return ( 

    <>

         {
          !isSignedIn ? (
            <Login/>
          ) : 
          
           (
               <div>
               
                  <Navbar/>
                  <Hero/>
               </div>
              )  
            }
    </>
   );
}
 
export default App;
 