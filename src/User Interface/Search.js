import React from 'react';
import { useState } from "react";
import './Search.css';


export default function Search(){
    
        const [inputValue, setInputValue] = useState('');
      
        // Handle change in input field
        const handleChange = (event) => {
          setInputValue(event.target.value);
        };
      
        // Optional: Handle form submission or other actions
        const handleSubmit = (event) => {
          event.preventDefault();
          alert(`Input submitted: ${inputValue}`);
        };
    
    return(
    <div className="container">
    <form onSubmit={handleSubmit}>
        <div className='searchbox'>
            <label className="item yap" htmlFor="textInput">What are you looking for?</label>
            <input className="inputbox item"
            id="textInput"
            type="text"
            value={inputValue}
            onChange={handleChange}
            />
            <button type="submit">Search</button>
    </div>
    </form>
    <p>Tips: Try to search using keywords such as activity name, time, location, event holder etc.</p>
    </div>
    )
          
}