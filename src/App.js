import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import HomePage from './components/Home/HomePage';
import Accessories from './components/Accessories/Accessories';
import Navbar from './components/navbar/Navbar';
import Beauty from './components/Beauty/Beauty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route element={<MainLayout />}>
          {/* Nested Routes inside MainLayout */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/beauty" element={<Beauty />} />
        </Route>
      </Routes>
    </Router>
  );
}

// MainLayout component to include Navbar for nested routes
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet /> {/* Renders the nested routes */}
  </>
);

export default App;
