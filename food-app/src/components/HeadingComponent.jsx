export const HeadingComponent = (props)=>{
    const {heading} = props
    return(
        <>
            <h1 className="text-orange-600 font-bold text-center text-xl pb-2">{heading}</h1>
        </>
    )
}
