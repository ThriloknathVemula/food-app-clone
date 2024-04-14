import { FaStar } from "react-icons/fa6"
import {useNavigate} from 'react-router-dom'

export const RestaurantItem=(props)=>{
    const {restaurantDetails} = props;
    const {name,imageUrl,cuisine,userRating,id}=restaurantDetails;
    const {totalReviews,rating} = userRating;

    const navigate = useNavigate();

    const onClickRestaurantItem=()=>{
        navigate(`/hotels/${id}`);
    }

    return(
        <div className="flex items-center gap-2 w-96 p-4 cursor-pointer" onClick={onClickRestaurantItem}>
            <img src={imageUrl} alt={name} className="h-28 w-40 rounded-lg"/>
            <div className="h-28 pt-3">
                <h1 className="font-semibold text-md">{name}</h1>
                <p className="text-gray-400">{cuisine}</p>
                <div className="flex items-center gap-0.5">
                    <FaStar className="text-yellow-400"/>
                    <p className="font-bold">{rating}</p>
                    <p>({totalReviews})</p>
                </div>
            </div>
        </div>
    )
}