import React from 'react';
import './index.css'
import BackDrop from '../backdrop/BackDrop';
import { SimpleFade } from '../../../Animations/SimpleFade'
import { motion } from 'framer-motion'

const ImgModal = ({ setShowModal, URL }) => {
    return (
        <>
            <BackDrop Hide={setShowModal} />
            <motion.div
                className='IMG-MODAL'
                variants={SimpleFade}
                initial='initial'
                animate='animate'>
                <img
                    src={URL}
                    alt="IMG"
                />
            </motion.div>
        </>
    );
};

export default ImgModal;