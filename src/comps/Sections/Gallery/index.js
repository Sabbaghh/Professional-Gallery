import React, { useRef, useEffect, createContext, useState } from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


const Gallery = () => {
    const FirstSectionRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [TotalPages, setTotalPages] = useState(0)

    useEffect(() => {
        setTotalPages(FirstSectionRef.current.props.children.length);
        console.log('renderd')
    }, [])

    const scrollOnclick = (index) => {
        setCurrentPage(prev => prev + 1)
        if (index >= TotalPages) {
            setCurrentPage(1);
            FirstSectionRef.current.scrollTo(0);
        } else {
            FirstSectionRef.current.scrollTo(currentPage)
        }
    }

    return (

        <Parallax pages={3} scrolling={false} vertical ref={FirstSectionRef}>
            <ParallaxLayer offset={0} speed={0.5}>
                <FirstSection scrollOnclick={scrollOnclick} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.5} onClick={() => scrollOnclick(currentPage)}>
                <SecondSection scrollOnclick={scrollOnclick} />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5} onClick={() => scrollOnclick(currentPage)}>
                <ThirdSection scrollOnclick={scrollOnclick} />
            </ParallaxLayer>
        </Parallax>
    );
};

export default Gallery;