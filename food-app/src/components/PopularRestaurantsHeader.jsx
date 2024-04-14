import { useEffect } from "react";
import { BsSortUp } from "react-icons/bs"

export const PopularRestaurantsHeader=(props)=>{
    const {onChangeDropdown} = props;

    useEffect(()=>{
        onChangeDropdown({ target: { value: 'Lowest' } })
    },[])

    return(
        <>
            <div className="popular-restaurants-header">
                    <h1 className="text-gray-900 text-2xl px-8 font-bold">Popular Restaurants</h1>
                    <div className="flex justify-between px-8">
                        <p className="text-gray-600 py-2">Order your favorite food from popular restaurants</p>
                        <div className="sort-by-container flex items-center">
                            <BsSortUp className="h-6 w-8"/>
                            <p className="font-bold">Sort By</p>
                            <select className="text-gray-400 outline-none py-2 pl-2 cursor-pointer" id="price-range" onChange={onChangeDropdown}>
                                <option name="lowest" value="Lowest" default>Lowest</option>
                                <option name="highest" value="Highest">Highest</option>
                            </select>
                        </div>
                    </div>
                </div>
        </>
    )
}