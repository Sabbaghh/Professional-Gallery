import React from 'react';
import './index.css'
import jacobImg from '../../../assests/img/about/Jacob.jpg'
import { SimpleFade } from '../../../Animations/SimpleFade';
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            variants={SimpleFade}
            initial='initial'
            animate='animate'
            className='about'>
            <div className='JacobVector'>
                <img src={jacobImg} alt="Jacob" />
            </div>
            <div
                className='bio'>
                <h1>BIO</h1>
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat Lorem ipsum dolor sit amet, qui minim labore
                adipisicing minim sint cillum sint consectetur cupidatat.</p>
            </div>
        </motion.div>
    );
};

export default About;