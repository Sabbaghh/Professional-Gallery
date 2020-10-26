import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { motion } from 'framer-motion';
import { WhileHover } from '../../../Animations/SacaleOnHover';
import { Showcontext } from '../../Navbar';
const NavElements = () => {
    const Show = useContext(Showcontext);

    const Hide = () => {
        Show.setShow(false);
    }
    return (
        <>
            <motion.li variants={WhileHover} whileHover='hover'>
                <NavLink exact to='Professional-Gallery/' onClick={Hide}>GALLERY</NavLink>
            </motion.li>
            <motion.li variants={WhileHover} whileHover='hover'>
                <NavLink to='Professional-Gallery/ABOUT' onClick={Hide}>ABOUT</NavLink>
            </motion.li>
        </>
    )
};


export default NavElements;