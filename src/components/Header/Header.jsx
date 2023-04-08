import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">Home</Link >
            <Link to="/friend">Friend</Link >
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            
        </div>
    );
};

export default Header;