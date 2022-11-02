import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Register from "./components/Register";



const App = () => {

   const [isSignedIn, SetIsSignedIn] = useState(false)
  return ( 

    <>

         {
          !isSignedIn ? (
            <Register/>
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
 