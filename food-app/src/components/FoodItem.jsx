import { useContext,useEffect,useRef,useState } from "react";
import { FaStar } from "react-icons/fa6"
import { FaIndianRupeeSign } from "react-icons/fa6";
import CartContext from "../context/CartContext";

export const FoodItem = (props)=>{
    let {itemDetails} = props;
    const [item,setItem] = useState({...itemDetails,quantity:0})
    let {name,cost,foodType,imageUrl,id,rating} = itemDetails;
    const {cartList,addCartItem,incrementQuantity,decrementQuantity} = useContext(CartContext);

    // console.log(cartList);

    useEffect(() => {
        if(cartList!==null){
            const updatedItem = cartList.find(cartItem => cartItem.id === id);
            if (updatedItem) {
                setItem(updatedItem);
            }else{
                setItem(prev => ({ ...prev, quantity: 0 }))
            }
        }
    }, [cartList, id])

    // console.log(item);


    const onClickAdd = () => {
        let newItem = {...item,quantity:item.quantity+1};
        addCartItem(newItem);
        setItem(prev=>({...prev,quantity:prev.quantity+1}));    
    }

    const addBtn = ()=>{
        if(item.quantity===0){
            return(
                <button className="border-amber-400 border-2 outline-none cursor-pointer p-1 px-2 rounded-md mt-2 text-amber-400 text-sm" onClick={onClickAdd}>Add</button>
            )
        }else{
            return(
                <div className="flex items-center gap-1 pt-1">
                    <button className="px-1 cursor-pointer rounded-md border border-orange-200" onClick={()=>{decrementQuantity(id)}}>-</button>
                    <p>{item.quantity}</p>
                    <button className="px-1 cursor-pointer rounded-md border border-orange-200" onClick={()=>{incrementQuantity(id)}}>+</button>
                </div>
            )
        }
    }
    


    return(
        <div className="flex gap-2 h-40">
            <img src={imageUrl} alt={name} className="rounded-md h-36 w-28"/>
            <div className="flex flex-col items-center justify-start pt-3">
                <p className="font-semibold text-lg">{name}</p>
                <div className="flex gap-1 items-center">
                    <FaIndianRupeeSign/>
                    <p className="font-semibold">{cost}</p>
                </div>
                
                <div className="flex gap-1 items-center">
                    <FaStar className="text-yellow-400"/>
                    <p className="font-semibold">{rating}</p>
                </div>
                {addBtn()}
            </div>
        </div>
    )
}