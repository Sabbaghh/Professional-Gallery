import React from 'react';
import './BackDrop.css'
const BackDrop = ({ Hide }) => {
    return (
        <div onClick={() => Hide(false)}
            className='BackDrop'>
        </div>
    )
}


export default BackDrop;