import React, { useEffect, useRef, createContext } from 'react';
import { motion } from 'framer-motion'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

export const ScrollToContext = createContext();
const Gallery = () => {
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    useEffect(() => {
    }, [])

    const scrollTo = (To) => {
        if (To === 'SectionOne') {
            window.scrollTo({
                top: firstSectionRef.current.offsetTop,
                behavior: "smooth"
            })
        }
        else if (To === 'SectionTwo') {
            window.scrollTo({
                top: secondSectionRef.current.offsetTop,
                behavior: "smooth"
            })

        } else {
            window.scrollTo({
                top: secondSectionRef.current.offsetTop,
                behavior: "smooth"
            })
        }
    }

    return (
        <ScrollToContext.Provider value={scrollTo}>
            <motion.div className='Gallery-Container'>
                <FirstSection createRef={firstSectionRef} />
                <SecondSection createRef={secondSectionRef} />
                <ThirdSection createRef={thirdSectionRef} />
            </motion.div>
        </ScrollToContext.Provider>

    );
};

export default Gallery;