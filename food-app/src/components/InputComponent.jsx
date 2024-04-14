export const InputComponent = props =>{
    const {labelName,type,placeholder,onChange}=props;

    return(
        <div className="flex flex-col items-start">
            <label className="text-orange-600 p-1 pl-0">{labelName}</label>
            <input className="outline-none p-1 mb-2 w-60" type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}