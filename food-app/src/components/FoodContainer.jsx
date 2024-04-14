import { FoodItem } from "./FoodItem";
import { InfinitySpin } from "react-loader-spinner";

const apiStatusConstants = {
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE"
}

export const FoodContainer=(props)=>{
    const {restaurantData,loading} = props;

    const loaderView = ()=>{
        return(
            <div className='flex items-center p-5 justify-center gap-12 px-20'>
                <InfinitySpin visible={true} width="200" color="#ffac1c" ariaLabel="infinity-spin-loading"/>
            </div>
        )
    }

    const successView = ()=>{
        return(
            <div className="flex flex-wrap items-center gap-10 p-10 px-32 justify-between text-center">
                {restaurantData.foodItems.map(eachItem=>(
                    <FoodItem itemDetails = {eachItem} key={eachItem.id}/>
                ))}
            </div>
        )
    }

    switch (loading) {
        case apiStatusConstants.loading:
            return loaderView();
        case apiStatusConstants.success:
            return successView();
        default:
            return null;
    }
}