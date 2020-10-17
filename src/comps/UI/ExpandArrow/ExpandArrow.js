import React from 'react';
import './ExpandArrow.css'
import { motion } from 'framer-motion';
import { ArrowToBottom } from '../../../Animations/ArrowToBottom'

const ExpandArrow = ({ callBackFunction }) => {

    return (
        <div className='ExpandArrow'>
            <motion.i
                variants={ArrowToBottom} initial='initial'
                animate='animate' onClick={callBackFunction}
                className="fas fa-angle-double-down" />
        </div>
    );
};

export default ExpandArrow;