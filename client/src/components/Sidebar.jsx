import { useState } from "react"
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)


    return ( 

        <>
        {
            !isOpen ? ( 
                <div className=" fixed z-30 right-10 top-6  sm:hidden">
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
                This is the side bar
                    <span onClick={()=>{setIsOpen(!isOpen)}} className="top-4 right-4 fixed cursor-pointer text-xl">x</span>
                </div>      
            )
        }
        
        </>
        
        
     );
}
 
export default Sidebar;