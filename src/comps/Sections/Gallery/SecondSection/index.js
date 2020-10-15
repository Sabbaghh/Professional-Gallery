import React, { useEffect } from 'react';
import './index.css'

const SecondSection = () => {
    useEffect(() => {
        console.log('rendered sec2')
    })
    return (
        <div className='SecondSection'>
            Second SECTION
            <span> <i>HELLO</i></span>
        </div>
    );
};

export default SecondSection;