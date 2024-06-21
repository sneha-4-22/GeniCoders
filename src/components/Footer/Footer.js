import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/sellwithus">Sell With Us</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
         
          </ul>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Sign up for our newsletter</p>
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Daisy Deals. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/sneha-4-22"><i className="fab fa-github gi"></i></a>
          <a href="#"><i className="fab fa-instagram ii"></i></a>
          <a href="#"><i className="fab fa-pinterest-p pi"></i></a>
          <a href="#"><i className="fab fa-twitter ti"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
