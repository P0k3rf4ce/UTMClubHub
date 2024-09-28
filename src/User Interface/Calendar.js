import React from 'react';
import myImage from './test/calendar-1847346_1280-3556400453.png'; 
import './Calendar.css';

export default function Calendar(){
    return (
        <div className="image-container">
        <img src={myImage} alt="Description of the image" className="image" />
      </div>
    );
};
