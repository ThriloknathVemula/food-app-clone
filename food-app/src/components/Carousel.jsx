import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel(props){
    const settings={
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000
    };

    const {offers} = props;

    return(
        <div className="flex justify-center">
            <div className="react-slider py-10 pt-6 w-4/5">
                <Slider {...settings}>
                    {offers.map(eachOffer=>(
                        <div key={eachOffer.id}>
                            <img src={eachOffer.imageUrl} alt={eachOffer.id}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel