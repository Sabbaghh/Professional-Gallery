import React from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { SimpleFade } from '../../../../../Animations/SimpleFade'

const Caption = () => {
    return (
        <motion.div className='Caption' variants={SimpleFade} initial='initial' animate='animate'>
            <div><h3>EYES LIKE</h3></div>
            <div> <h2>SHUTTER</h2> </div>
            <div> <h3>MIND LIKE A</h3> </div>
            <div> <h1>LENS</h1> </div>
        </motion.div>
    );
};

export default Caption;