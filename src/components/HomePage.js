import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import heroImage from './freestocks-_3Q3tsJ01nc-unsplash.jpg'; 


const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Discover the Best Deals!</h1>
          <p>Explore our latest collections and exclusive offers.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </header>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories">
          <div className="category">
            <img src="../images/dresses/dress12.png" alt="Clothing" />
            <p>Dresses</p>
          </div>
          <div className="category">
            <img src="category2.png" alt="Accessories" />
            <p>Accessories</p>
          </div>
          <div className="category">
            <img src="category3.png" alt="Beauty" />
            <p>Beauty</p>
          </div>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          <div className="product-card">
            <img src="product1.png" alt="Product 1" />
            <p>Product Name</p>
            <p>$25.00</p>
          </div>
          <div className="product-card">
            <img src="product2.png" alt="Product 2" />
            <p>Product Name</p>
            <p>$30.00</p>
          </div>
          <div className="product-card">
            <img src="product3.png" alt="Product 3" />
            <p>Product Name</p>
            <p>$45.00</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
