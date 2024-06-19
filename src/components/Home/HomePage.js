import React, { useState }  from 'react';
import './HomePage.css';
import Footer from '../Footer/Footer';
import heroImage1 from './banner3.png'; 
import dressImage from '../../images/dresses/dress1.png';
import accessoryImage from '../../images/Accessories/a12.png';
import beautyImage from '../../images/beauty/b10.png';
import product1 from './product1.png';
import product2 from './product2.png';
import product3 from './product3.png';
import heroImage2 from './banner2.png';
import heroImage3 from './banner1.jpg';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroImage1, heroImage2, heroImage3];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };
  return (
    <div className="home-page">
      <header className="hero-section" style={{ backgroundImage: `url(${slides[currentSlide]})` }}>
        <div className="hero-content">
          <h1>Discover Unbeatable Deals!</h1>
          <p>Step into the latest trends with our exclusive collections.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <button className="prev-slide" onClick={handlePrevSlide}>&#8249;</button>
        <button className="next-slide" onClick={handleNextSlide}>&#8250;</button>
      </header>
      
      <section className="categories-section">
        <h2>Explore Our Categories</h2>
        <div className="categories">
        <Link to="/dress" className="category" style={{ textDecoration: 'none' }}>
            <img src={dressImage} alt="Dresses" />
            <p>Elegant Dresses</p>
            <p>Unleash your style with our chic and fashionable dresses.</p>
            </Link>
          
          <Link to="/accessories" className="category" style={{ textDecoration: 'none' }}>
      <img src={accessoryImage} alt="Accessories" />
      <p>Stylish Accessories</p>
      <p>Complete your look with our stunning accessories.</p>
    </Link>
    <Link to="/beauty" className="category" style={{ textDecoration: 'none' }}>
  
        <img src={beautyImage} alt="Beauty" />
        <p>Beauty Essentials</p>
        <p>Enhance your natural beauty with our premium products.</p>
   
    </Link>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          <div className="product-card">
            <img src={product1} alt="Product 1" />
            <p>Elegant Evening Gown</p>
            <p>$25.00</p>
            <p>Turn heads with this stunning evening gown, perfect for any occasion.</p>
          </div>
          <div className="product-card">
            <img src={product2} alt="Product 2" />
            <p>Luxury Handbag</p>
            <p>$30.00</p>
            <p>Carry your essentials in style with this elegant handbag.</p>
          </div>
          <div className="product-card">
            <img src={product3} alt="Product 3" />
            <p>Radiant Skin Serum</p>
            <p>$45.00</p>
            <p>Achieve glowing skin with our advanced skin serum.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
