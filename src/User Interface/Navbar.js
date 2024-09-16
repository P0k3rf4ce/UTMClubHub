// Navbar.js
import React from 'react';
import { FaHome, FaCompass, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file for styling

export default function Navbar(){
  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li className="nav-item">
          <FaHome className="nav-icon" />
          <span className="nav-text">Home</span>
        </li>
        <li className="nav-item">
          <FaCompass className="nav-icon" />
          <span className="nav-text">Explore</span>
        </li>
        <li className="nav-item">
          <FaCalendarAlt className="nav-icon" />
          <span className="nav-text">Calendar</span>
        </li>
        <li className="nav-item">
          <FaSearch className="nav-icon" />
          <span className="nav-text">Search</span>
        </li>
      </ul>
    </div>
  );
};
