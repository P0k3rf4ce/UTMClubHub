// Navbar.js
import React from 'react';
import { FaHome, FaCompass, FaCalendarAlt, FaSearch, FaUser, FaEye } from 'react-icons/fa'; // Add FaEye icon for the toggle
import './Navbar.css'; 
import { FaGear } from 'react-icons/fa6';

// New import
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sidebar">
      <ul className="nav-list">
        <Link className="a"to="/">
        <li className="nav-item">
          <FaHome className="nav-icon" />
          <span className="nav-text">Home</span>
        </li>
        </Link>
        <li className="nav-item">
          <FaCompass className="nav-icon" />
          <span className="nav-text">Explore</span>
        </li>
        <li className="nav-item">
          <FaCalendarAlt className="nav-icon" />
          <span className="nav-text">Calendar</span>
        </li>
        <Link className="a" to="/Search">
        <li className="nav-divider-item">
          <FaSearch className="nav-icon" />
          <span className="nav-text">Search</span>
        </li>
        </Link>
        <li className="nav-user-item">
          <FaGear className="nav-icon" />
          <span className="nav-text">Settings</span>
        </li>
        <li className="nav-user-item">
          <FaUser className="nav-icon" />
          <span className="nav-text">Account</span>
        </li>
      </ul>
    </div>
  );
}
