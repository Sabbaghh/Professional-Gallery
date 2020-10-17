import React from 'react';
import './index.css'

const ThirdSection = (props) => {
    return (
        <div ref={props.createRef} className='ThirdSection'>
            Third SECTION
        </div>
    );
};

export default ThirdSection;