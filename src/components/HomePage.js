import React from 'react';
import './HomePage.css';
import logo from './logo.png'; // Make sure to use your logo image

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Daisy Deals" />
        </div>
        <ul className="nav-links">
          <li><a href="#">MEN</a></li>
          <li><a href="#">WOMEN</a></li>
          <li><a href="#">KIDS</a></li>
          <li><a href="#">HOME & LIVING</a></li>
          <li><a href="#">BEAUTY</a></li>
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

      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Daisy Deals!</h1>
          <p>Discover the best deals on your favorite products.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </header>

      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories">
          <div className="category">
            <img src="category1.png" alt="Category 1" />
            <p>Clothing</p>
          </div>
          <div className="category">
            <img src="category2.png" alt="Category 2" />
            <p>Accessories</p>
          </div>
          <div className="category">
            <img src="category3.png" alt="Category 3" />
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

      <footer className="footer">
        <p>&copy; 2024 Daisy Deals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
