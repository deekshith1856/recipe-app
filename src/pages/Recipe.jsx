import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';

export default function Recipe() {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        try {
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((data) => {

                setRecipeDetails(data.data.meals[0])
                console.log(data.data.meals[0]);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])
    if (!recipeDetails)
        return <div>Loading ....</div>;

    const ingredients = [];
    const measures = [];
    for (let i = 0; i <= 20; i++) {
        const data = recipeDetails[`strIngredient${i}`];
        const measure = recipeDetails[`strMeasure${i}`];
        if (data && measure) {
            measures.push(measure);
            ingredients.push(data);
        }
    }
    const handleCollection = () => {
        const user = {

        }
        const obj = { name: id }
    }
    console.log(measures);
    return (
        <div>
            <Header />

            <h2 style={{ textAlign: 'center', padding: '10px' }}>{recipeDetails.strMeal}</h2>
            <div style={{ display: 'flex', justifyContent: "space-between", flexWrap: 'wrap' }}>

                <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} style={{ width: '250px', height: '250px', borderRadius: '20px', margin: '2px' }} />
                <h3>Category: {recipeDetails.strCategory}</h3>
                <div style={{ marginLeft: '15px', border: '2px solid black' }}>
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index} >{`${ingredient} -- ${measures[index]}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ margin: '15px', border: '2px solid  black', padding: '6px' }}>
                <h3>Instructions:</h3>
                <p>{recipeDetails.strInstructions}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="button" onClick={handleCollection}>Add to collection</Button>
            </div>

        </div>
    )
}
