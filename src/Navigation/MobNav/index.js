import React, { useContext, useEffect } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Showcontext } from '../../comps/Navbar';
import { HamShow, HamSlices } from '../../Animations/HamAnimation';



const MobNav = () => {
    const Show = useContext(Showcontext);
    useEffect(() => {
    }, [])
    return (
        <AnimatePresence exitBeforeEnter>
            {!Show.Show &&
                <motion.div className='MobNav'
                    variants={HamShow}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    onClick={() => Show.setShow(prev => !prev)}>
                    <motion.div
                        variants={HamSlices}
                        initial='initial'
                        animate='animate'></motion.div>
                    <div></div>
                    <motion.div
                        variants={HamSlices}
                        initial='initial'
                        animate='animate'></motion.div>
                </motion.div >}
        </AnimatePresence>

    );
};

export default MobNav;