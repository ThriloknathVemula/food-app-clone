import {InfinitySpin} from 'react-loader-spinner'
import { RestaurantItem } from './RestaurantItem';

export const PopularRestaurantsComponent = (props)=>{
    const {popularApiStatus,popularRestaurants} = props;

    const apiStatusConstants = {
        loading:"LOADING",
        success:"SUCCESS",
        failure:"FAILURE"
    }

    const loaderView = ()=>{
        return(
            <div className='flex justify-center items-center'>
                <InfinitySpin visible={true} width="200" color="#ffac1c" ariaLabel="infinity-spin-loading"/>
            </div>
        )
    }

    const successView = ()=>{
        return(
            <div className='flex flex-wrap justify-between p-4 px-10'>
                {popularRestaurants.map(eachRest=>(
                    <RestaurantItem restaurantDetails = {eachRest} key={eachRest.id}/>
                ))}
            </div>
        )
    }

    switch (popularApiStatus) {
        case apiStatusConstants.loading:
            return loaderView()    
        case apiStatusConstants.success:
            return successView()
        default:
            return null
            
    }
}