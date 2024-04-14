import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import Cookies from 'js-cookie'
import Carousel from "../components/Carousel";
import { PopularRestaurantsHeader } from "../components/PopularRestaurantsHeader";
import { ActivePageFooter } from "../components/ActivePageFooter";
import { PopularRestaurantsComponent } from "../components/PopularRestaurantsComponent";
import { HomePageFooter } from "../components/HomePageFooter";

const apiStatusConstants = {
    loading:"LOADING",
    success:"SUCCESS",
    failure:"FAILURE"
}

function Home(){
    const [offers,setOffers] = useState([]);
    const [activePage,setActivePage]=useState(1);
    const [popularRestaurants,setPopularRestaurants]=useState([]);
    const [popularApiStatus,setPopularApiStatus]=useState(apiStatusConstants.loading);
    const [sortBy,setSortBy] = useState("");
    const jwtToken = Cookies.get('jwt_token');
    const limit = 9;

    

    const incrementActPage=(e)=>{
        setActivePage(prevNo=>{
            if(prevNo<4){
                return prevNo+1;
            }else{
                return prevNo;
            }
        })
    }

    const decrementActPage=()=>{
        setActivePage(prevNo=>{
            if(prevNo>1){
                return prevNo-1
            }else{
                return 1;
            }
        })
    }

    const onChangeDropdown=(e)=>{
        setSortBy(e.target.value);
        // console.log(e.target.value)
    }

    useEffect(()=>{
        const fetchOffers = async()=>{
            const url='https://apis.ccbp.in/restaurants-list/offers'
            const options = {
                method:'GET',
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            }
            const response = await fetch(url,options);
            const data = await response.json();
            // console.log(data.offers);
            const offersList = data.offers.map(eachItem=>({
                id: eachItem.id,
                imageUrl: eachItem.image_url
        }))
            setOffers(offersList);
        }

        fetchOffers();
    },[]);

    useEffect(()=>{
        const fetchPopularRestaurants = async()=>{
            try{
                const offset = (activePage-1)*limit;
                const url=`https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortBy}`;
                const options = {
                    method:'GET',
                    headers:{
                        Authorization:`Bearer ${jwtToken}`
                    }
                }
                const response = await fetch(url,options);
                const data = await response.json();
                // console.log(data);
                let newData = data.restaurants.map(eachItem=>({
                    hasOnlineDelivery:eachItem.has_online_delivery,
                    userRating: {
                        ratingText: eachItem.user_rating.rating_text,
                        ratingColor: eachItem.user_rating.rating_color,
                        totalReviews: eachItem.user_rating.total_reviews,
                        rating:eachItem.user_rating.rating
                    },
                    name: eachItem.name,
                    hasTableBooking: eachItem.has_table_booking,
                    isDeliveringNow: eachItem.has_delivery_now,
                    costForTwo: eachItem.cost_for_two,
                    cuisine:eachItem.cuisine,
                    imageUrl:eachItem.image_url,
                    id:eachItem.id,
                    menuType:eachItem.menu_type,
                    location:eachItem.location,
                    opensAt:eachItem.opens_at,
                    groupByTime:eachItem.group_by_time
                }))
                setPopularRestaurants(newData);
                setPopularApiStatus(apiStatusConstants.success);
            }catch(error){
                setPopularApiStatus(apiStatusConstants.failure);
            }
        }
        fetchPopularRestaurants();
    },[activePage,sortBy]);

    return(
        <>
            <Header/>
            <div className="p-5 mx-auto">
                <Carousel offers = {offers}/>
            </div>
            <div className="popular-restaurants-container">
                <PopularRestaurantsHeader onChangeDropdown={onChangeDropdown}/>
                <PopularRestaurantsComponent popularApiStatus={popularApiStatus} popularRestaurants={popularRestaurants}/>
                <ActivePageFooter incrementActPage={incrementActPage} decrementActPage={decrementActPage} activePage={activePage}/>
                <HomePageFooter/>
            </div>
        </>
    )
}

export default Home