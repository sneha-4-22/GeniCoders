import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sell With Us</a></li>
            <li><a href="#">Shipping</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
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
          <a href="#"><i className="fab fa-facebook-f fi"></i></a>
          <a href="#"><i className="fab fa-instagram ii"></i></a>
          <a href="#"><i className="fab fa-pinterest-p pi"></i></a>
          <a href="#"><i className="fab fa-twitter ti"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
