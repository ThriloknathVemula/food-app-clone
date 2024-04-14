import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import { ButtonComponent } from './ButtonComponent'
import { useState,useEffect } from 'react'

export const Header = ()=>{
    const navigate = useNavigate();
    const [activeBtn,setActiveBtn] = useState("");

    useEffect(()=>{
        setActiveBtn('Home')
    },[])

    useEffect(()=>{
        let currentPath = window.location.pathname;
        if(currentPath==='/cart'||currentPath==='/payment'){
            setActiveBtn("Cart")
        }else{
            setActiveBtn("Home")
        }
    },[window.location.pathname])

    const onClickLogout=()=>{
        Cookies.remove("jwt_token");
        localStorage.removeItem("cart_items");
        navigate("/login");
    }

    // const onClickHome=()=>{
    //     setActiveBtn("Home");
    //     navigate('/');
    // }

    // const onClickCart=()=>{
    //     setActiveBtn("Cart");
    //     navigate('/cart');
    // }

    const setActiveButton = (buttonName)=>{
        setActiveBtn(buttonName);
        navigate(buttonName==="Home"?'/':'/cart');
    }

    return(
        <div className="bg-slate-100 flex justify-between items-center px-8 py-3">
            <div className="logo-container">
                <img src={logo} alt="logo-app" className="w-40 cursor-pointer" onClick={()=>{navigate("/")}}/>
            </div>
            <div className='header-container flex gap-4 items-center'>
                <p className={`cursor-pointer font-bold ${activeBtn==='Home'?'text-orange-500':''}`} onClick={()=>{setActiveButton('Home')}}>Home</p>
                <p className={`cursor-pointer font-bold ${activeBtn==='Cart'?'text-orange-500':''}`} onClick={()=>{setActiveButton('Cart')}}>Cart</p>
                <button className='bg-orange-500 p-2 cursor-pointer text-white rounded-md' onClick={onClickLogout}>Logout</button>
            </div>
        </div>
    )
}