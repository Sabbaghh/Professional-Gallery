import React from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { SimpleFade } from '../../../../../Animations/SimpleFade'
import { transaleFromLeft } from '../../../../../Animations/Translate';

const Caption = () => {
    return (
        <motion.div className='Caption' variants={SimpleFade} initial='initial' animate='animate'>
            <div>
                <h3>EYES LIKE A</h3>
            </div>

            <motion.div variants={transaleFromLeft}>
                <h2>SHUTTER</h2>
            </motion.div>

            <div>
                <h3>MIND LIKE A</h3>
            </div>

            <motion.div variants={transaleFromLeft}>
                <h1>LENS</h1>
            </motion.div>
        </motion.div>
    );
};

export default Caption;