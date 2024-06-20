import React from 'react';
import Footer from './Footer'; // Import the Footer component

const SellWithUs = () => {
  const pinkColor = '#ff69b4';

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-4" style={{ color: pinkColor }}>
          Sell With Us
        </h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              className="card h-100 border-pink"
              style={{ borderColor: pinkColor }}
            >
              <div
                className="card-header bg-pink text-white py-3"
                style={{ backgroundColor: pinkColor }}
              >
                <h5 className="mb-0">Become a Seller</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Join our community of sellers and start selling your products
                  with us today!
                </p>
                <a
                  href="#"
                  className="btn btn-outline-pink"
                  style={{ color: pinkColor, borderColor: pinkColor }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card h-100 border-pink"
              style={{ borderColor: pinkColor }}
            >
              <div
                className="card-header bg-pink text-white py-3"
                style={{ backgroundColor: pinkColor }}
              >
                <h5 className="mb-0">Seller Benefits</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li style={{ color: pinkColor }}>
                    <i className="fas fa-check" style={{ color: pinkColor }}></i>{' '}
                    Reach a wide audience
                  </li>
                  <li style={{ color: pinkColor }}>
                    <i className="fas fa-check" style={{ color: pinkColor }}></i>{' '}
                    Secure payments
                  </li>
                  <li style={{ color: pinkColor }}>
                    <i className="fas fa-check" style={{ color: pinkColor }}></i>{' '}
                    Dedicated seller support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default SellWithUs;
