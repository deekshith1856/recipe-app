import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const navStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'fixed',
        top: -10,
        left: -20,
        width: '100%',
        height: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
    };
    return (
        <header style={navStyle}>
            <Link to='/home'>Home</Link>
            <Link to='/profile'>User Profile</Link>
        </header>
    )
}
