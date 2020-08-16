import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => (
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className='navbar-brand'>Github API</div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <NavLink exact to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/about" className='nav-link'>About</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;