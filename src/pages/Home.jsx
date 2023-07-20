import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Item from '../components/Item';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
export default function Home() {
    const [searchQuery, SetSearchQuery] = useState('');
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [items, setItems] = useState([]);
    const handleSearchChange = (e) => {
        SetSearchQuery(e.target.value);
    }
 
    const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px', // Adjust the gap between cards as needed
    };
    const searchStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: '10',
        left: 0,
        height: 'calc(25vh - 50px)'
    }
    const handleSearchClick = () => {
        if (searchQuery.trim().length > 0) {
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
        }
        console.log('Search for:', searchQuery);
    };
    const handleRecipeClick = () => {
        alert('h');
    }
    useEffect(() => {

        axios.get(url).then((res) => {


            setItems(res.data.meals);


        });
        console.log(items);


    }, [url])

    return (
        <div>
            <Header />

            <div style={searchStyle}>
                <input type='text' placeholder='Search..' value={searchQuery} onChange={handleSearchChange} />
                <button onClick={handleSearchClick}>
                    Search
                </button>
            </div>
            <div style={cardContainerStyle}>
                {items.map((item) => (
                    <Item key={item.idMeal} recipe={item} onClick={handleRecipeClick} />
                ))}

            </div>

        </div>
    )
}
