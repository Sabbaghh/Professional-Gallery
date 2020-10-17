import React, { useEffect } from 'react';
import './index.css'

//comps
import ExpandArrow from '../../../UI/ExpandArrow/ExpandArrow'
import Lens from '../../../../assests/img/Gallery-FirstSection/lens.png';
import Caption from './Caption';
import CaptionTop from './Caption/MobCaption/Captiontop';
import CaptionBottom from './Caption/MobCaption/CaptionBottom';

import { LensRotate } from '../../../../Animations/LensRotate'
import { motion } from 'framer-motion'

const FirstSection = () => {
    useEffect(() => {
    }, [])

    return (
        <>
            <section className='FirstSection'>
                <div className='LeftSide'>
                    <Caption />
                    <CaptionTop />
                </div>
                <div className='RighSide'>
                    <CaptionBottom />
                </div>
                <motion.div className='Lens' variants={LensRotate} initial='initial' animate='animate'>
                    <motion.img src={Lens} alt='LENS'
                        drag
                        dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        drag />
                </motion.div>
                <ExpandArrow />
            </section>

        </>
    );
};

export default FirstSection;