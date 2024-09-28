// Navbar.js
import React from 'react';
import { FaHome, FaCompass, FaCalendarAlt, FaSearch, FaUser, FaEye } from 'react-icons/fa'; // Add FaEye icon for the toggle
import './Navbar.css'; 
import { FaGear } from 'react-icons/fa6';

export default function Navbar({ togglePosts }) {
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
        <li className="nav-item toggle-button" onClick={togglePosts}>
          <FaEye className="nav-icon" /> {/* Eye icon to represent show/hide */}
          <span className="nav-text">Toggle Posts</span>
        </li>
        <li className="nav-divider-item">
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
