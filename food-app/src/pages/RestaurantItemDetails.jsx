import {useNavigate, useParams} from 'react-router-dom'
import { Header } from '../components/Header';
import { useState,useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios'
import { RestaurantDetailsHeader } from '../components/RestaurantDetailsHeader';
import { FoodContainer } from '../components/FoodContainer';
import { HomePageFooter } from '../components/HomePageFooter';


const apiStatusConstants = {
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE"
}

export const RestaurantItemDetails=()=>{
    const {id} = useParams();
    const jwtToken = Cookies.get('jwt_token');
    const navigate = useNavigate();

    const [loading,setLoading] = useState(apiStatusConstants.loading);
    const [restaurantData,setRestaurantData] = useState({});

    useEffect(()=>{
        const fetchRestaurantData = async()=>{
        try{ 
            const options = {
                method:'GET',
                url:`https://apis.ccbp.in/restaurants-list/${id}`,
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            }
            const response = await axios.request(options);
            // console.log(response.data);
            let foodItems = response.data.food_items.map(eachItem=>({
                name:eachItem.name,
                cost:eachItem.cost,
                foodType:eachItem.food_type,
                imageUrl:eachItem.image_url,
                id:eachItem.id,
                rating:eachItem.rating
            }));
            // console.log(foodItems);
            let newData = {
                costForTwo: response.data.cost_for_two,
                cuisine:response.data.cuisine,
                foodItems,
                id:response.data.id,
                imageUrl:response.data.image_url,
                location:response.data.location,
                name:response.data.name,
                opensAt:response.data.opens_at,
                rating:response.data.rating,
                reviewsCount:response.data.reviews_count
            }
            // console.log(newData);
            setRestaurantData(newData);
            setLoading(apiStatusConstants.success);
        }catch(e){
            navigate('/not-found');
        }
    }
        setTimeout(()=>{fetchRestaurantData()},2000);
    },[id])

    return(
        <>
            <Header/>
            <RestaurantDetailsHeader restaurantData={restaurantData} loading={loading}/>
            <FoodContainer restaurantData={restaurantData} loading={loading}/>
            <HomePageFooter/>
        </>
    )
}

