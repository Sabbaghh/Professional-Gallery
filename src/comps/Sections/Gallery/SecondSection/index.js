import React from 'react';
import './index.css'

const SecondSection = (props) => {
    return (
        <div ref={props.createRef} className='SecondSection'>
            Second SECTION
        </div>
    );
};

export default SecondSection;