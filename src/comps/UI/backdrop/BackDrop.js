import React, { useContext } from 'react';
import './BackDrop.css'
import { Showcontext } from '../../Navbar';
const BackDrop = () => {
    const hide = useContext(Showcontext);
    return (
        <div onClick={() => hide(false)}
            className='BackDrop'>
        </div>
    )
}


export default BackDrop;