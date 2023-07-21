import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        fontSize: '28px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        top: -10,
        left: 0,
        width: '100%',
        height: '50px',

        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
    };
    return (
        <>
            <header style={navStyle}>Welcome to recipe app</header>
            <nav style={{ display: 'flex', justifyContent: 'flex-end', top: 10, fontStyle: 'italic' }}>
            <Link to='/home'>Home</Link>
            <Link to='/profile'>User Profile</Link>

            </nav>
        </>
    )
}
