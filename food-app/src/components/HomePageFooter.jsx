import logo from '../assets/logo.png';
import { FaInstagram } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"

export const HomePageFooter = ()=>{
    return(
        <div className="bg-blue-950 p-10 flex flex-col justify-center items-center">
            <img src={logo} alt="footer-logo" className='h-20 w-50'/>
            <p className='text-slate-100 text-md'>The only thing we are serious about is food</p>
            <p className='text-slate-100 font-medium text-lg pt-3'>Contact Us</p>
            <div className='flex justify-between items-center gap-2 p-2'>
                <FaInstagram className='h-6 w-6 text-slate-200 cursor-pointer'/>
                <FaXTwitter className='h-6 w-6 text-slate-200 cursor-pointer'/>
                <FaFacebook className='h-6 w-6 text-slate-200 cursor-pointer'/>
            </div>
        </div>
    )
}