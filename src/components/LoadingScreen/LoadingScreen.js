import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';
import logo from './logo.png'; 
const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 3500); 

    return () => clearTimeout(timer); 
  }, [navigate]);
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
