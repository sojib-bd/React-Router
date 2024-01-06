import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
const Navbar = ()=> {
    return (
        <>
        <nav>
            <ui className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ui>
        </nav>
        <Outlet />
        </>

    )
}

export default Navbar;