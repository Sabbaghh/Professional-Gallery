import React, { useEffect, useRef, createContext } from 'react';
import { motion } from 'framer-motion'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

export const ScrollToContext = createContext();
const Gallery = () => {
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    useEffect(() => {
    }, [])

    const scrollTo = (To) => {
        if (To === 'SectionTwo') {
            window.scrollTo({
                top: secondSectionRef.current.offsetTop,
                behavior: "smooth"
            })
        }
        else {
            window.scrollTo({
                top: firstSectionRef.current.offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (
        <ScrollToContext.Provider value={scrollTo}>
            <motion.div className='Gallery-Container'>
                <FirstSection createRef={firstSectionRef} />
                <SecondSection createRef={secondSectionRef} />
            </motion.div>
        </ScrollToContext.Provider>
    );
};

export default Gallery;