import React from 'react';
import LOGO from '../../../assests/img/logo.png'

const Logo = ({ width }) =>
    (
        <img src={LOGO} alt='Logo' style={{ width }} ></img>
    )

export default Logo;