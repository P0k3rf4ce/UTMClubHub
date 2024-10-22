// Navbar.js
import React from 'react';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import "./Login.css"
import { useState } from 'react';

export default function Login(){
    const [inputValue_user, setInputValue_user] = useState('');
    const [inputValue_password, setInputValue_password] = useState('');
      
     // Handle change in username input field
    const handleUserChange = (event) => {
    setInputValue_user(event.target.value);
    };

    // Handle change in password input field
    const handlePasswordChange = (event) => {
    setInputValue_password(event.target.value);
    };
  
    // Optional: Handle form submission or other actions
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const userData = {
          username: inputValue_user,
          password: inputValue_password
        };
    
        fetch("https://link.com", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          alert('Login successful!');
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error with your login. Please try again.');
        });
    };

return(
<div>
    <div>
        <Navbar></Navbar>
    </div>
    <div className="container">
    <form onSubmit={handleSubmit}>
        
        <div className='searchbox'>
        <h1>Account Registration</h1>
            <label className="item yap" htmlFor="textInput">Username</label>
            <input className="inputbox item"
            id="textInput"
            type="text"
            value={inputValue_user}
            onChange={handleUserChange}
            />
            
            
            
            <label className="item yap" htmlFor="textInput"> Password</label>
            <input className="inputbox item"
            id="textInput"
            type="text"
            value={inputValue_password}
            onChange={handlePasswordChange}
            />
            <button type="submit">Search</button>
            {/* Link to Forgot Password page */}
            <Link to="/reset-password">
                <button type="button" className="button-password">Forgot Password?</button>
            </Link>
    </div>
    </form>
    <p>Tips: Please make an account, and for support please email email@support.com.</p>
    </div>
</div>
)
}