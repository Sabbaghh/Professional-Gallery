import React from 'react';
import './index.css'
//comps
import NavElements from '../../NavElements';
import BackDrop from '../../../comps/UI/backdrop/BackDrop'


const NavModal = () => {
    return (
        <>
            <BackDrop />
            <ul className='NavModal'>
                <NavElements />
            </ul>
        </>
    );
};

export default NavModal;