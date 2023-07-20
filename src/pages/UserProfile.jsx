import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function UserProfile() {
    const savedRecipes = ['recipe 1', 'recipe 2', 'recipe 3',]
    const userCardStyle = {
        maxWidth: '300px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        margin: '0 auto',
    };
    const recipeListStyle = {
        listStyle: 'none',
        padding: '0',
    };
    const recipeItemStyle = {
        fontSize: '18px',
        marginBottom: '10px',
    };
    const avatarStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
        border: '2px solid #ccc',
    };

    const nameStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const emailStyle = {
        fontSize: '16px',
        color: '#555',
    };

    // Replace these with actual user details
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/100', // URL to user's avatar image
    };

    return (<div >
        <Header />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px' }}>
            <div style={userCardStyle}>
                <img src={user.avatar} alt={user.name} style={avatarStyle} />
                <div style={nameStyle}>{user.name}</div>
                <div style={emailStyle}>{user.email}</div>
            </div>
            <div style={userCardStyle}>
                <h2>Saved Recipes</h2>
                <ul style={recipeListStyle}>
                    {savedRecipes.map((recipe, index) => (
                        <li key={index} style={recipeItemStyle}>
                            <Link to={`/recipe/${encodeURIComponent(recipe)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {recipe}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
}
