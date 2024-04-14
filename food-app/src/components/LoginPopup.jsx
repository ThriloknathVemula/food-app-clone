import Popup from 'reactjs-popup';

export const LoginPopup=()=>{
    return(
        <Popup trigger={<button>Sample credentials</button>} modal>
            {close=>(
                <div className='modal bg-slate-200 p-10 rounded-lg'>
                    <button className='close bg-red-400 px-1 rounded-lg absolute top-2 right-6' onClick={close}>&times;</button>
                    <div className='header font-bold text-xl pb-2'>Sample Credentials</div>
                    <div className='content font-semibold'>
                        {' '}
                        <p>username: rahul</p>
                        <p>password: rahul@2021</p>
                        <br/>
                        <p>username: saira</p>
                        <p>password: princess@9</p>
                        <br/>
                        <p>username: advika</p>
                        <p>password: world@5</p>
                        <br/>
                        <p>username: aakash</p>
                        <p>password: sky@007</p>
                    </div>
                </div>
            )}
        </Popup>
    )
}