import React from 'react';
import '../Home/HomePage.css';
import logo from './logo.png'; 
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/home">
          <img src={logo} alt="Daisy Deals" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><a href="#">MEN</a></li>
        <li><a href="#">WOMEN</a></li>
        <li><a href="#">FOOTWEAR</a></li>
        <li><a href="#">BEAUTY</a></li>
        <li><Link to="/accessories">ACCESSORIES</Link></li>
        <li><a href="#" className="new">STUDIO <span>NEW</span></a></li>
      </ul>
      <div className="nav-icons">
        <div className="search-box">
          <input type="text" placeholder="Search for products, brands and more" />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>
        <a href="#"><i className="fas fa-user"></i> Profile</a>
        <a href="#"><i className="fas fa-heart"></i> Wishlist</a>
        <a href="#"><i className="fas fa-shopping-bag"></i> Bag</a>
      </div>
    </nav>
  );
}

export default Navbar;
