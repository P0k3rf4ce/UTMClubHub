// Navbar.js
import React from 'react';
import { FaHome, FaCompass, FaCalendarAlt, FaSearch, FaUser, FaEye } from 'react-icons/fa'; // Add FaEye icon for the toggle
import './Navbar.css'; 
import { FaGear } from 'react-icons/fa6';

export default function Navbar({post2search, search2post}) {
  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li className="nav-item" onClick={search2post}>
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
        <li className="nav-divider-item" onClick={post2search}>
          <FaSearch className="nav-icon" />
          <span className="nav-text">Search</span>
        </li>
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
