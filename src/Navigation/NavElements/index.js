import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

import { Showcontext } from '../../comps/Navbar';
const NavElements = () => {
    const hide = useContext(Showcontext);

    const Hide = () => {
        hide(false);
    }
    return (
        <>
            <li> <NavLink exact to='/' onClick={Hide}>GALLERY</NavLink> </li>
            <li> <NavLink to='/ABOUT' onClick={Hide}>ABOUT</NavLink> </li>
            <li> <NavLink to='/CONTACT' onClick={Hide}> CONTACT </NavLink> </li>
        </>
    )
};


export default NavElements;