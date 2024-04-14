import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

export const ProtectedRoute = ({children})=>{
    const jwtToken = Cookies.get("jwt_token");

    if(jwtToken===undefined){
        return <Navigate to="/login"/>
    }else{
        return(
            <>{children}</>
        )
    }
}