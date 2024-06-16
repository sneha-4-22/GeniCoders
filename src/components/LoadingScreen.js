import React from 'react';
import './LoadingScreen.css';
import logo from './daisy_deals.png'; // Make sure to place your logo in the assets folder

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
          <div className="heart glowing-heart" style={{ top: '10%', left: '93%' }}></div>
          <div className="heart glowing-heart" style={{ top: '90%', left: '93%' }}></div>
          <div className="heart glowing-heart" style={{ top: '10%', left: '0%' }}></div>
          <div className="heart glowing-heart .flip-vertical" style={{ top: '90%', left: '0%' }}></div>

          <img src={logo} alt="Daisy Deals" className="loading-logo" />
        </div>
      );
};

export default LoadingScreen;
