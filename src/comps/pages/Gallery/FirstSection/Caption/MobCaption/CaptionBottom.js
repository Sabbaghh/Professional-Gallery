import React from 'react';
import './index.css'
import { SimpleFadeLonger } from '../../../../../../Animations/SimpleFade';
import { motion } from 'framer-motion'

const CaptionBottom = () => {
    return (
        <motion.div className='MobCapion' variants={SimpleFadeLonger} initial='initial' animate='animate'>
            <div> <h3>MIND LIKE A</h3> </div>
            <div> <h1>LENS</h1> </div>
        </motion.div>
    );
};

export default CaptionBottom;