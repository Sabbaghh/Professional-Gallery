import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { motion } from 'framer-motion';
import { WhileHover } from '../../Animations/SacaleOnHover';
import { Showcontext } from '../../comps/Navbar';
const NavElements = () => {
    const Show = useContext(Showcontext);

    const Hide = () => {
        Show.setShow(false);
    }
    return (
        <>
            <motion.li variants={WhileHover} whileHover='hover'>
                <NavLink exact to='/' onClick={Hide}>GALLERY</NavLink>
            </motion.li>
            <motion.li variants={WhileHover} whileHover='hover'>
                <NavLink to='/ABOUT' onClick={Hide}>ABOUT</NavLink>
            </motion.li>
            <motion.li variants={WhileHover} whileHover='hover'>
                <NavLink to='/CONTACT' onClick={Hide}> CONTACT </NavLink>
            </motion.li>
        </>
    )
};


export default NavElements;