import React from 'react';
import Footer from './Footer';
const Shipping = () => {
  const pinkColor = '#ff69b4';

  return (
    <>
    <div className="container py-5">
      <h1 className="text-center mb-4" style={{ color: pinkColor }}>
        Shipping Information
      </h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-pink" style={{ borderColor: pinkColor }}>
            <div className="card-header bg-pink text-white py-3" style={{ backgroundColor: pinkColor }}>
              <h5 className="mb-0">Standard Shipping</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Delivery in 5-7 business days.
              </p>
              <p className="card-text">
                Cost: &#8377;50.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-pink" style={{ borderColor: pinkColor }}>
            <div className="card-header bg-pink text-white py-3" style={{ backgroundColor: pinkColor }}>
              <h5 className="mb-0">Express Shipping</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Delivery in 2-3 business days.
              </p>
              <p className="card-text">
                Cost: &#8377;100.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-pink" style={{ borderColor: pinkColor }}>
            <div className="card-header bg-pink text-white py-3" style={{ backgroundColor: pinkColor }}>
              <h5 className="mb-0">Overnight Shipping</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Delivery by next business day.
              </p>
              <p className="card-text">
                Cost: &#8377;200.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Shipping;
