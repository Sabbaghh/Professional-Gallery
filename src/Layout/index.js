import React, { useEffect } from 'react';
import NavBar from '../comps/Navbar';
import Gallery from '../comps/pages/Gallery';
import About from '../comps/pages/About'
import { Route } from 'react-router-dom';

const Layout = () => {

    useEffect(() => {
    }, [])
    return (
        <>
            <NavBar />
            <Route exact path='/Professional-Gallery/' component={Gallery} />
            <Route path='/Professional-Gallery/about' component={About} />
        </>
    );
};

export default Layout;