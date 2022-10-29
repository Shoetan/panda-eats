import { useState } from "react"
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {

    {/* state to track if the hamburger menu clicked or not */}
    const [isOpen, setIsOpen] = useState(false)


    return ( 

        <>

        {

            /* The use of a tenary opeartion will render two different kind of ui depending if the hamburger is not clicked or not */
            !isOpen ? ( 
                <div className=" fixed right-10 top-6  sm:hidden">
                        <Button onClick={()=>{setIsOpen(!isOpen)}} className=""   >
                        <MenuIcon
                        style={{
                            color: 'white',
                            fontSize: '35px'
                        }}
                        />
                    </Button>
                </div>
               ) :

            (
                <div className="top-0 right-0 fixed bg-red w-[45vw] h-full p-10 sm:hidden">
                <span onClick={()=>{setIsOpen(!isOpen)}} className="top-4 right-4 fixed cursor-pointer text-2xl animate-bounce w-6 h-6 text-black">x</span>
                   
                {/* users order here */}
                <div className="flex gap-3 cursor-pointer text-lg font-poppins text-black p-2">
                    <LocalMallIcon/>
                    <span>checkout</span>
                 </div>

                    {/* Logout function here */}
                 <div className="flex gap-3 cursor-pointer text-lg font-poppins text-black p-2">
                    <ExitToAppIcon/>
                    <span>Logout</span>
                 </div>
                  
                </div>      
            )
        }
        
        </>
        
        
     );
}
 
export default Sidebar;