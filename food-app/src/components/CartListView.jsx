import { useContext, useEffect, useState } from "react"
import CartContext from "../context/CartContext"
import { CartItem } from "./CartItem";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const CartListView = ()=>{
    const {cartList,incrementQuantity,decrementQuantity,emptyCartItems} =  useContext(CartContext);
    const [orderTotal,setOrderTotal] = useState(0);
    const navigate = useNavigate();

    const calculateOrderTotal=()=>{
        let total = 0;
        cartList.forEach(item=>{
            total += (item.cost*item.quantity);
        })
        return total
    }
    
    useEffect(()=>{
        setOrderTotal(calculateOrderTotal());
    },[cartList])

    const onClickPlaceOrder=()=>{
        navigate('/payment');
        emptyCartItems();
    }

    return(
        <div className="bg-slate-200 w-4/5 rounded-lg p-5 ml-auto mr-auto my-5">
            <div className="flex gap-56 item-center pl-3 pb-3">
                <p className="font-bold pl-4">Item</p>
                <p className="font-bold pl-3">Quantity</p>
                <p className="font-bold">Price <span className="text-gray-500">(per Item)</span></p>
                <p className="font-bold pl-5">Total Price</p>
            </div>
            {cartList.map(eachItem=>(
                <CartItem details={eachItem} key={eachItem.id} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} setOrderTotal={setOrderTotal}/>
            ))}
            <hr className="border my-3 border-dashed border-gray-500"/>
            <div className="flex justify-between px-5">
                <h1 className="text-lg">Order Total:</h1>
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <FaIndianRupeeSign/>
                        <p className="text-2xl font-bold">{orderTotal}</p>
                    </div>
                    <button className="bg-orange-400 text-slate-100 cursor-pointer px-2 rounded-md mt-5" onClick={onClickPlaceOrder}>Place Order</button>
                </div>
            </div>
        </div>
    )
}