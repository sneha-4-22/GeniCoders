import React, { useState }  from 'react';
import './Navbar.css';
import logo from './logo.png'; 
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
const Navbar = () => {
 
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/home">
          <img src={logo} alt="Daisy Deals" />
        </Link>
      </div>
      <ul className="nav-links menu">
      <Dropdown label="Men" items={['Shirts', 'Jeans']} />
      <Dropdown label="Women" items={['Dress', 'Tops']} />
      <Dropdown label="Footwear" items={['Slippers', 'Shoes', 'Sandal']} />
        <li><Link to="/beauty">Beauty</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><a href="/designstudio" className="new">Design &nbsp;Studio <span>NEW</span></a></li>
        <li><a href="https://shivani-sharma-23.github.io/Myntra_hackthon/Themes/">Shop by Themes</a></li>
        <li><Link to="/chatbot">Fashion Chatbot</Link></li>
        <li><a href="https://myntra-virtual-trial-room.my.canva.site/">Try On</a></li>
      </ul>
      <div className="nav-icons">
        <div className="search-box">
          <input type="text" placeholder="Search for products, brands and more" />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>
        <a href="#"><i className="fas fa-user"></i>  <Dropdown label="" items={['Login', 'Register']} /></a>
      
      
        <Link to="/cart"><i className="fas fa-shopping-bag"></i> Bag</Link>
      </div>
    </nav>
  );
}

export default Navbar;
