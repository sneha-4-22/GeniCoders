import React from 'react';
import './HomePage.css';
import Footer from '../Footer/Footer';
import heroImage from './freestocks-_3Q3tsJ01nc-unsplash.jpg'; 
import dressImage from '../../images/dresses/dress1.png';
import accessoryImage from '../../images/Accessories/a12.png';
import beautyImage from '../../images/beauty/b10.png';
import product1 from '../../images/men/mc1.png';
import product2 from '../../images/tshirts/top2.png';
import product3 from '../../images/tshirts/top3.png';
const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Discover Unbeatable Deals!</h1>
          <p>Step into the latest trends with our exclusive collections.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </header>
      
      <section className="categories-section">
        <h2>Explore Our Categories</h2>
        <div className="categories">
          <div className="category">
            <img src={dressImage} alt="Dresses" />
            <p>Elegant Dresses</p>
            <p>Unleash your style with our chic and fashionable dresses.</p>
          </div>
          <div className="category">
            <img src={accessoryImage} alt="Accessories" />
            <p>Stylish Accessories</p>
            <p>Complete your look with our stunning accessories.</p>
          </div>
          <div className="category">
            <img src={beautyImage} alt="Beauty" />
            <p>Beauty Essentials</p>
            <p>Enhance your natural beauty with our premium products.</p>
          </div>
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
