import React from 'react';
import './ExpandArrow.css'

const ExpandArrow = ({ callBackFunction }) => {
    return (
        <div className='ExpandArrow'>
            <i onClick={callBackFunction} className="fas fa-angle-double-down"></i>
        </div>
    );
};

export default ExpandArrow;