import React, { useEffect } from 'react';
import './index.css'
import ExpandArrow from '../../../UI/ExpandArrow/ExpandArrow'
import Lens from '../../../../assests/img/Gallery-FirstSection/lens.png'

const FirstSection = (props) => {
    useEffect(() => {
        console.log('rendered sec1')
    }, [])
    console.log(props)
    return (
        <>
            <div className='FirstSection'>
                <div className='LeftSide'></div>
                <div className='RighSide'></div>
                <div className='Lens'>
                    <img src={Lens}></img>
                </div>
                <ExpandArrow callBackFunction={props.scrollOnclick} />
            </div>

        </>
    );
};

export default FirstSection;