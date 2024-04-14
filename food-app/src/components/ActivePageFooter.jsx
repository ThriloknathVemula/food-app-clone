import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const ActivePageFooter = (props)=>{
    const {incrementActPage,decrementActPage,activePage} = props;
    return(
        <>
            <div className="active-page-container flex items-center justify-center gap-1 pb-5">
                    <button className="cursor-pointer border-black border-2 border-orange-200 rounded-md p-1 text-orange-400" onClick={decrementActPage}><MdKeyboardArrowLeft/></button>
                    <p className="text-lg font-bold text-orange-300">{activePage}</p>
                    <button className="cursor-pointer border-black border-2 border-orange-200 rounded-md p-1 text-orange-400" onClick={incrementActPage}><MdKeyboardArrowRight/></button>
                </div>
        </>
    )
}