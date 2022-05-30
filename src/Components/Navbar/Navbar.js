import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink className='nav-item' to='/'>Home</NavLink>
            <NavLink className='nav-item' to='/blog'>Blog</NavLink>
            <NavLink className='nav-item' to='/contact'>Contact</NavLink>
        </nav>
    );
};

export default Navbar;