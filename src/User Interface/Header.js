import React from 'react';
import './Header.css'; // Import the CSS file for styling
import UTMClubHubLogo from './UTMClubHubLogo.png'; // Make sure to import the logo

export default function Header() {
    return (
      <div className="header">
        <img src={UTMClubHubLogo} alt="Website Logo" className="logo" />
        <h1 className="site-name">UTM Club Hub</h1>
      </div>
    );
  }