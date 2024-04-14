import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartList,setCartList] = useState([]);

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem("cart_items"));
        setCartList(storedCart);
    },[])

    const updateLocalStorage = (updatedCart)=>{
        localStorage.setItem('cart_items', JSON.stringify(updatedCart));
        setCartList(updatedCart);
    }

    const addCartItem = (itemDetails)=>{
        const list=[];
        const cartList = JSON.parse(localStorage.getItem('cart_items'));
        if(cartList===null){
            list.push(itemDetails);
            //console.log(list);
            updateLocalStorage(list);
        }else{
            const existingItem = cartList.find(item => item.id === itemDetails.id);
            if(existingItem){
                const updatedCart = cartList.map(item => item.id === itemDetails.id ? itemDetails : item);
                updateLocalStorage(updatedCart);
            }else{
                const updatedCart = [...cartList, itemDetails];
                updateLocalStorage(updatedCart);
            }
        }
    }

    const removeItem = (id)=>{
        // setCartList(cartList.filter(eachItem=>{eachItem.id!==id}))
        const cartList = JSON.parse(localStorage.getItem("cart_items"));
        const updatedList = cartList.filter(eachItem=>{eachItem.id!==id});
        updateLocalStorage(updatedList);
    }

    const incrementQuantity = (id)=>{
        const updatedCart = cartList.map(item =>
            item.id === id ? {...item, quantity: item.quantity + 1} : item
        );
        updateLocalStorage(updatedCart);
    }

    const decrementQuantity = (id)=>{
        const filterItem = cartList.filter(item=>item.id===id);
        if (!filterItem) {
            return; 
        }

        // console.log(filterItem);
        // console.log(filterItem[0].quantity);

        if(filterItem[0].quantity===1){
            const updatedCart = cartList.filter(item=>item.id!==id);
            //console.log(updatedCart);
            updateLocalStorage(updatedCart);
        }else{
            const updatedCart = cartList.map(item =>
                item.id === id ? {...item, quantity: item.quantity - 1} : item
            );
            //console.log(updatedCart);
            updateLocalStorage(updatedCart);
        }    
    }

    const emptyCartItems = ()=>{
        localStorage.removeItem("cart_items");
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{cartList,addCartItem,removeItem,incrementQuantity,decrementQuantity,emptyCartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext