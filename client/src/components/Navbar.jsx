import icon from '../assets/icon.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';

import Sidebar from './Sidebar';
const Navbar = () => {
    return (

        
        <div className='sm:container mx-auto flex justify-between items-center '>
             <Sidebar/>
            <div>
                <img src= {icon} className="object-contain w-28 "/>
            </div>

            <div className='hidden sm:flex justify-evenly'>
                <ul className=' sm:flex gap-10'>
                    <li className='font-poppins text-slate-100 hover:underline decoration-red decoration-2 underline-offset-8'>
                        <a href="#" >see menu </a>
                    </li>

                    <li className='font-poppins text-slate-100 hover:underline decoration-red decoration-2 underline-offset-8'>
                        <a href="#" >How it works </a>
                    </li>

                    <li className='font-poppins text-slate-100 hover:underline decoration-red decoration-2 underline-offset-8'>
                        <a href="#" >Location </a>
                    </li>
                </ul>
            </div>
            
            <div className=' hidden sm:flex gap-4 text-slate-100 sm:gap-2'>
                <span className='p-2'><LocalMallIcon/></span>
                <a  href="http://" className='font-poppins p-2'>sign in</a>
                <a href="" className='font-poppins bg-green p-2 rounded hover:scale-90'>sign up</a>
            </div>

            
        </div>
      );
}
 
export default Navbar;