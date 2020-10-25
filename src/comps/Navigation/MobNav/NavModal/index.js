import React, { useContext } from 'react';
import './index.css'
//comps
import NavElements from '../../NavElements';
import BackDrop from '../../../../comps/UI/backdrop/BackDrop'
//context
import { Showcontext } from '../../../../comps/Navbar'
//animation
import { motion } from 'framer-motion';
import { transaleFromRight } from '../../../../Animations/Translate'

const NavModal = () => {
    const Show = useContext(Showcontext)
    return (
        <>
            <BackDrop Hide={Show.setShow} />
            <motion.ul
                variants={transaleFromRight}
                initial='initial' animate='animate'
                exit='exit' className='NavModal'>
                <NavElements />
            </motion.ul>
        </>
    );
};

export default NavModal;