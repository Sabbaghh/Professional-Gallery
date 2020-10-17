import React, { useEffect } from 'react';
import NavBar from '../comps/Navbar';
import Gallery from '../comps/Sections/Gallery';
import { Route } from 'react-router-dom';

const Layout = () => {
    useEffect(() => {
    }, [])
    return (
        <>
            <NavBar />
            <Route exact path='/'> <Gallery /> </Route>
        </>
    );
};

export default Layout;