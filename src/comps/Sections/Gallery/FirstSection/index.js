import React, { useEffect } from 'react';
import './index.css'

//comps
import ExpandArrow from '../../../UI/ExpandArrow/ExpandArrow'
import Lens from '../../../../assests/img/Gallery-FirstSection/lens.png';
import Caption from './Caption';
import CaptionTop from './Caption/MobCaption/Captiontop';
import CaptionBottom from './Caption/MobCaption/CaptionBottom';

const FirstSection = (props) => {
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
                <div className='Lens'>
                    <img src={Lens} alt='LENS' />
                </div>
                <ExpandArrow />
            </section>

        </>
    );
};

export default FirstSection;