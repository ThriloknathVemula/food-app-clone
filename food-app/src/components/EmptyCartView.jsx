import cooking from '../assets/cooking.png'
import {useNavigate} from 'react-router-dom'

export const EmptyCartView = ()=>{
    const navigate = useNavigate();

    const onClickOrderNow=()=>{
        navigate('/')
    }

    return(
        <div className='flex flex-col items-center p-10 gap-2'>
            <img src={cooking} alt="cooking" className='h-72 w-72'/>
            <h1 className='text-2xl text-black-100 font-bold'>No Orders Yet</h1>
            <p className='text-gray-600'>Your cart is empty. Order food from your favorite restaurants</p>
            <button className='bg-orange-400 text-white rounded-md p-2 cursor-pointer' onClick={onClickOrderNow}>Order Now</button>
        </div>
    )

}