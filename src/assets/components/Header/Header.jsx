import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header'>
            <ActiveLink className='link' to="/">Home</ActiveLink>
            <ActiveLink className='link' to="/friends">Friends</ActiveLink>
            <ActiveLink className='link' to="/posts">Posts</ActiveLink>
            <ActiveLink className='link' to="/about">About</ActiveLink>
            <ActiveLink className='link' to="/contact">Contact</ActiveLink>
        </div>
    );
};

export default Header;