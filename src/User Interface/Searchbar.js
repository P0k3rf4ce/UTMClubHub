import React from 'react';
import { useState } from "react";
import './Searchbar.css';


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
    <form onSubmit={handleSubmit}>
        <div className='searchbox'>
        <div>
            <label htmlFor="textInput">What are you looking for?</label>
            <input
            id="textInput"
            type="text"
            value={inputValue}
            onChange={handleChange}
            />
        </div>
    <button type="submit">Submit</button>
    </div>
    </form>)
          
}