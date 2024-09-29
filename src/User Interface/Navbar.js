// Navbar.js
import React from 'react';
import { FaHome, FaCompass, FaCalendarAlt, FaSearch, FaUsernp} from 'react-icons/fa'; // Add FaEye icon for the toggle
import './Navbar.css'; 
import { FaGear } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate(); // useNavigate for navigation

  const handleClickHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  const handleClickExplore = () => {
    navigate('/explore'); // Navigate to the Explore page
  };

  const handleClickCalendar = () => {
    navigate('/calendar'); // Navigate to the Calendar page
  };

  const handleClickSearch = () => {
    navigate('/search'); // Navigate to the Search page
  };
  
  const handleClickSettings = () => {
    navigate('/settings'); // Navigate to the Settings page
  };

  const handleClickUser = () => {
    navigate('/account'); // Navigate to the Account page
  };

  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li className="nav-item" onClick={handleClickHome}>
          <FaHome className="nav-icon" />
          <span className="nav-text">Home</span>
        </li>
        <li className="nav-item" onClick={handleClickExplore}>
          <FaCompass className="nav-icon" />
          <span className="nav-text">Explore</span>
        </li>
        <li className="nav-item" onClick={handleClickCalendar}>
          <FaCalendarAlt className="nav-icon" />
          <span className="nav-text">Calendar</span>
        </li>
        <li className="nav-item" onClick={handleClickSearch}>
          <FaSearch className="nav-icon" />
          <span className="nav-text">Search</span>
        </li>
        <li className="nav-item" onClick={handleClickSettings}>
          <FaGear className="nav-icon" />
          <span className="nav-text">Settings</span>
        </li>
        <li className="nav-item" onClick={handleClickUser}>
          <FaUser className="nav-icon" />
          <span className="nav-text">Account</span>
        </li>
      </ul>
    </div>
  );
}