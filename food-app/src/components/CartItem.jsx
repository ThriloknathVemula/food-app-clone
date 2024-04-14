import { FaIndianRupeeSign } from "react-icons/fa6";

export const CartItem = (props)=>{
    const {details,incrementQuantity,decrementQuantity} =  props;
    const {cost,foodType,id,imageUrl,name,quantity,rating} = details;
    //console.log(details);

    const totalPrice = cost*quantity;

    

    const renderQuantity=()=>{
        if(quantity>=1){
            return(
                <div className="flex items-center gap-1 pt-1 ml-10 pr-60">
                    <button className="px-1 cursor-pointer rounded-md border border-orange-200" onClick={()=>{decrementQuantity(id)}}>-</button>
                    <p>{quantity}</p>
                    <button className="px-1 cursor-pointer rounded-md border border-orange-200" onClick={()=>{incrementQuantity(id)}}>+</button>
                </div>
            )
        }
    }

    return(
        <div className="flex px-3 pt-2">
            <div className="flex gap-2 items-center w-60 mr-4">
                <img src={imageUrl} alt={name} className="w-16 h-16 rounded-md"/>
                <p className="font-bold">{name}</p>
            </div>
            {renderQuantity()}
            <div className="flex items-center pr-80 text-orange-600">
                <FaIndianRupeeSign/>
                <p className="font-bold">{cost}</p>
            </div>
            <div className="flex items-center text-orange-600">
                <FaIndianRupeeSign/>
                <p className="font-bold">{totalPrice}</p>
            </div>
        </div>
    )
}