export const ErrorMsg = (props)=>{
    const {message} = props;
    
    return(
        <>
            <p className="text-red-700">{message}</p>
        </>
    )
}