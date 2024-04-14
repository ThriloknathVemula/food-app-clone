import { useContext } from 'react'
import {Header} from '../components/Header'
import {HomePageFooter} from '../components/HomePageFooter'

import { EmptyCartView } from '../components/EmptyCartView'
import CartContext from '../context/CartContext'
import { CartListView } from '../components/CartListView'

export const Cart = ()=>{
    const {cartList} = useContext(CartContext);
    //console.log(cartList);
    let showEmptyView  = cartList===null || cartList.length===0;


    return(
        <>
            <Header/>
            {showEmptyView ? <EmptyCartView/> : <CartListView/>}
            <HomePageFooter/>
        </>
    )
}