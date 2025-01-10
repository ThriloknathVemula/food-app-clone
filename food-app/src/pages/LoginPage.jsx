import logo from '../assets/logo.png'
import Cookies from "js-cookie"
import {HeadingComponent} from "../components/HeadingComponent"
import { InputComponent } from "../components/InputComponent"
import { ButtonComponent } from "../components/ButtonComponent"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ErrorMsg } from "../components/ErrorMsg"
import { LoginPopup } from "../components/LoginPopup"

function LoginPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errorMsg,setErrorMsg] = useState("");
    const navigate=useNavigate();

    const onClickLogin = async(e)=>{
        e.preventDefault();

        const userDetails = {
            username,
            password
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
          }
        
        const response = await fetch("https://apis.ccbp.in/login",options);
        if(response.ok){
            const data = await response.json();
            const jwtToken = data.jwt_token;
            Cookies.set("jwt_token",jwtToken,{expires:30});
            setErrorMsg("");
            navigate("/");
        }else{
            setErrorMsg("*Invalid username or password")
        }
        
        
        
    }

    return(
        <>
            <div className="h-screen bg-cover flex flex-col justify-center items-center bg-[url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                    <div className="flex justify-center">
                        <img src={logo} alt="logo-app" className="w-[250px] pb-4"/>
                    </div>
                <div className="bg-slate-100 rounded-xl w-[300px] items-center flex flex-col p-4">
                    
                    <HeadingComponent heading={"Log In"}/>
                    <InputComponent labelName={"Username"} type={"text"} placeholder={"Enter your Username"} onChange={e=>setUsername(e.target.value)}/>
                    <InputComponent labelName={"Password"} type={"password"} placeholder={"Enter your password"} onChange={e=>setPassword(e.target.value)}/>
                    <ButtonComponent buttonName={"Log In"} onClickLogin={onClickLogin}/>
                    <ErrorMsg message={errorMsg}/>
                </div>
                <div className="flex justify-end bg-slate-200 p-2 m-2 mt-3 rounded-lg">
                    <LoginPopup/>
                </div>
            </div>
        </>
    )   
}

export default LoginPage