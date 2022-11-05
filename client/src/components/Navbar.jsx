import icon from '../assets/icon.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';

import Sidebar from './Sidebar';
const Navbar = () => {
    return (

        
        <div className=' sticky  top-0 bg-gradient-to-l from-black to-slate-900  sm:container mx-auto flex justify-around items-center '>
             <Sidebar/>
            <div>
                <img src= {icon} className="object-contain w-28 "/>
            </div>

            <div className='hidden sm:flex justify-evenly'>
                <ul className=' sm:flex gap-10'>
                    <li className='font-poppins text-slate-100 hover:underline decoration-red decoration-2 underline-offset-8 text-lg'>
                        <a href="#" >see menu </a>
                    </li>

                    <li className='font-poppins text-slate-100 hover:underline decoration-red decoration-2 underline-offset-8 text-lg'>
                        <a href="#" >How it works </a>
                    </li>

                    <li className='font-poppins text-slate-100 hover:underline decoration-red decoration-2 underline-offset-8 text-lg'>
                        <a href="#" >Location </a>
                    </li>
                </ul>
            </div>
            
         

            
        </div>
      );
}
 
export default Navbar;