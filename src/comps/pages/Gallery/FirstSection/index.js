import React, { useEffect, useContext } from 'react';
//comps
import ExpandArrow from '../../../UI/ExpandArrow/ExpandArrow'
import Lens from '../../../../assests/img/Gallery-FirstSection/lens.png';
import Caption from './Caption';
import CaptionTop from './Caption/MobCaption/Captiontop';
import CaptionBottom from './Caption/MobCaption/CaptionBottom';
//context 
import { ScrollToContext } from '..'
//animation and styling
import { LensRotate } from '../../../../Animations/LensRotate'
import { motion } from 'framer-motion'
import './index.css'

const FirstSection = (props) => {
    const ScrollTo = useContext(ScrollToContext);

    useEffect(() => {
    }, [])

    const DragToNextPage = (info) => {
        if (info >= 500) {
            ScrollTo('SectionTwo');
        }
    }
    return (
        <>
            <section ref={props.createRef} className='FirstSection'>
                <div className='LeftSide'>
                    <Caption />
                    <CaptionTop />
                </div>

                <div className='RighSide'>
                    <CaptionBottom />
                </div>
                <motion.div className='Lens' variants={LensRotate} initial='initial' animate='animate'>
                    <motion.img src={Lens} alt='LENS' drag
                        dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        onDragEnd={(e, info) => DragToNextPage(info.point.y)} />
                </motion.div>
                <ExpandArrow callBackFunction={() => ScrollTo('SectionTwo')} />
            </section>

        </>
    );
};

export default FirstSection;