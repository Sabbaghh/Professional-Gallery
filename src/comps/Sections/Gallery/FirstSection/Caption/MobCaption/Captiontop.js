import React from 'react';
import './index.css'
import { motion } from 'framer-motion'
import { SimpleFade } from '../../../../../../Animations/SimpleFade'

const Captiontop = () => {
    return (
        <motion.div className='MobCapion'
            variants={SimpleFade}
            initial='initial'
            animate='animate'>
            <motion.div>
                <h3>EYES LIKE</h3>
            </motion.div>
            <div> <h2>SHUTTER</h2> </div>
        </motion.div>
    );
};

export default Captiontop;