import { useNavigate } from 'react-router-dom'
import notfound from '../assets/notfound.png'

export const NotFound = ()=>{
    const navigate = useNavigate();
    return(
        <div className='flex flex-col justify-center items-center mt-24'>
            <img src={notfound} alt="not-found-img"/>
            <h1 className='font-bold text-2xl'>Page Not Found</h1>
            <p className='text-gray-400'>We are sorry, the page you requested could not be found.</p>
            <p className='text-gray-400'>Please go back to Home Page</p>
            <button className="bg-orange-400 text-slate-100 cursor-pointer p-2  rounded-md mt-5" onClick={()=>{navigate('/')}}>Go to Home Page</button>
        </div>
    )
}