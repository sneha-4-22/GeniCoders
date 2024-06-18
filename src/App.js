import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import HomePage from './components/Home/HomePage';
import Accessories from './components/Accessories/Accessories';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </Router>
  );
}

export default App;
