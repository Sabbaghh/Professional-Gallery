import React, { useState, createContext } from 'react';
import './index.css';
//comps
import Logo from '../UI/logo'
import Navigation from '../../Navigation'
import MobNav from '../../Navigation/MobNav';
import NavModal from '../../Navigation/MobNav/NavModal';
import { NavLink } from 'react-router-dom';
export const Showcontext = createContext();
const NavBar = () => {
    const [Show, setShow] = useState(false);
    return (
        <>
            <Showcontext.Provider value={{ setShow, Show }}>
                {Show && <NavModal />}
                <div className='NavBar'>
                    <div className='logo'>
                        <NavLink exact to='/'>
                            <Logo width='2.5rem' />
                        </NavLink>
                    </div>
                    <div className='navigation'>
                        <MobNav />
                        <Navigation />
                    </div>
                </div>
            </Showcontext.Provider>
        </>
    );
};

export default NavBar;