import { IoIosCheckmarkCircle } from "react-icons/io";
import { Header } from "./Header";
import { HomePageFooter } from "./HomePageFooter";
import { useNavigate } from "react-router-dom";

export const PaymentSuccess = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <Header/>
            <div className="flex flex-col justify-center items-center py-32">
                <IoIosCheckmarkCircle className="text-green-600 w-12 h-12"/>
                <h1 className="font-bold text-2xl pb-2">Payment Successful</h1>
                <p className="text-gray-400">Thank you for ordering</p>
                <p className="text-gray-400">Your payment is successfully completed</p>
                <button className="bg-orange-400 text-slate-100 cursor-pointer p-2 rounded-md mt-5" onClick={()=>{navigate('/')}}>Go to Home Page</button>
            </div>    
        </>
    )
}