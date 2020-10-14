import React, { useContext } from 'react';
import './index.css';

import { Showcontext } from '../../comps/Navbar'
const MobNav = () => {
    const setShow = useContext(Showcontext);
    return (
        <div className='MobNav'
            onClick={() => setShow(prev => !prev)}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default MobNav;