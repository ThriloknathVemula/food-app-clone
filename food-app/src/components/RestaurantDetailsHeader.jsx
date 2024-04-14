import './index.css'
import { InfinitySpin } from 'react-loader-spinner';

const apiStatusConstants = {
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE"
}

export const RestaurantDetailsHeader=(props)=>{
    const {restaurantData,loading} = props;
    const {name,imageUrl,cuisine,location} = restaurantData;

    
    const randomTime = Math.ceil((Math.random()*40))+20;
    let randomClass = randomTime>50 ? 'text-red-600' : 'text-green-600'

    const loaderView = ()=>{
        return(
            <div className='rest-header-bg flex items-center p-5 justify-center gap-12 px-20'>
                <InfinitySpin visible={true} width="200" color="#ffac1c" ariaLabel="infinity-spin-loading"/>
            </div>
        )
    }

    const successView=()=>{
        return(
            <div className='rest-header-bg flex items-center p-5 justify-center gap-12 px-20'>
                <img src={imageUrl} alt={name} className='h-48 w-72 rounded-lg'/>
                <div className='flex flex-col items-center'>
                    <h1 className='text-slate-200 text-2xl font-bold'>{name}</h1>
                    <h2 className='text-slate-300 text-lg font-semibold'>{cuisine}</h2>
                    <h2 className='text-slate-300 text-md'>{location}</h2>
                    <p className='text-slate-500 pt-2'>Delivering to your location in <span className={`${randomClass} font-bold`}>{randomTime} minutes</span></p>
                </div>
            </div>
        )
    }

    switch(loading){
        case apiStatusConstants.loading:
            return loaderView()
        case apiStatusConstants.success:
            return successView()
        default:
            return null
    }
    
}