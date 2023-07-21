import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuthContext } from '../context/LoginProvider';
import { Link } from 'react-router-dom';
export default function Signup() {
    const { handleSignup, handleLogin } = useAuthContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform form validation here if needed
        console.log('Form Data:', formData);
        handleSignup(formData);
        // Replace the console.log with your form submission logic
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const formContainerStyle = {
        maxWidth: '400px',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle = {
        fontSize: '16px',
        marginBottom: '5px',
    };
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
    const inputStyle = {
        padding: '8px',
        fontSize: '16px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    return (<>
        <header style={navStyle}>Welcome to recipe app Signup to continue<br />
        </header>
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h2 style={{ fontWeight: 'bold' }}>Signup</h2>
                <form style={formStyle} onSubmit={handleSubmit}>
                    <label style={labelStyle}>Name:</label>
                    <input required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label style={labelStyle}>Email:</label>
                    <input required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <label style={labelStyle}>Password:</label>
                    <input required
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={inputStyle}
                    />


                    <button type="submit" style={{ ...inputStyle, backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
                        Sign Up
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </div>
        </div>
    </>
    );
}
