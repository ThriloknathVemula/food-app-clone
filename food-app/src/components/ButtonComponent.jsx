export const ButtonComponent = (props)=>{
    const {buttonName,onClickLogin} = props
    return(
        <>
            <button className="rounded-md p-1.5 mt-2 cursor-pointer bg-orange-600 text-white" onClick={onClickLogin}>{buttonName}</button>
        </>
    )
}