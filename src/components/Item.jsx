import React from 'react'
import { Link } from 'react-router-dom';

export default function Item({ recipe }) {
    const cardStyle = {
        width: '250px',
        height: '250px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center',
    };

    const imageStyle = {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        marginBottom: '10px',
        border: '2px solid #ccc',
    };

    const textStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
    };
    return (
        <Link to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={cardStyle}>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    style={imageStyle}
                />
                <div style={textStyle}>{recipe.strMeal}
                </div>
            </div>
        </Link>
    )
}
