import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
    const pinkColor = "#ff69b4"; // Define the desired pink color
    const lightPinkColor = "#ffb6c1"; // Define a lighter shade of pink
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5" style={{ color: pinkColor }}>
              No item in Cart
            </h4>
            <Link
              to="/"
              className="btn btn-outline-dark mx-4"
              style={{
                color: pinkColor,
                borderColor: pinkColor,
              }}
            >
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
       <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div
                className="card mb-4"
                style={{ borderColor: pinkColor }}
              >
                <div
                  className="card-header py-3"
                  style={{ backgroundColor: pinkColor, color: "white" }}
                >
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>&#8377;{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>&#8377;{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>&#8377;{Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div
                className="card mb-4"
                style={{ borderColor: pinkColor }}
              >
                <div
                  className="card-header py-3"
                  style={{ backgroundColor: pinkColor, color: "white" }}
                >
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label
                          htmlFor="firstName"
                          className="form-label"
                          style={{ color: pinkColor, fontWeight: "bold" }}>
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                          style={{
                            borderColor: pinkColor,
                            borderWidth: "2px",
                          }}
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                            <label
                                htmlFor="lastName"
                                className="form-label"
                                style={{ color: pinkColor, fontWeight: "bold" }}
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder=""
                                required
                                style={{
                                borderColor: pinkColor,
                                borderWidth: "2px",
                                }}
                            />
                            <div className="invalid-feedback">Valid last name is required.</div>
                            </div>

                            <div className="col-12 my-1">
                                <label
                                    htmlFor="email"
                                    className="form-label"
                                    style={{ color: pinkColor, fontWeight: "bold" }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="you@example.com"
                                    required
                                    style={{
                                    borderColor: pinkColor,
                                    borderWidth: "2px",
                                    }}
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                                </div>


                                <div className="col-12 my-1">
                                        <label
                                            htmlFor="address"
                                            className="form-label"
                                            style={{ color: pinkColor, fontWeight: "bold" }}
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="1234 Main St"
                                            required
                                            style={{
                                            borderColor: pinkColor,
                                            borderWidth: "2px",
                                            }}
                                        />
                                        <div className="invalid-feedback">Please enter your shipping address.</div>
                                        </div>

                                        <div className="col-12">
                                            <label
                                                htmlFor="address2"
                                                className="form-label"
                                                style={{ color: pinkColor, fontWeight: "bold" }}
                                            >
                                                Address 2 <span className="text-muted">(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address2"
                                                placeholder="Apartment or suite"
                                                style={{
                                                borderColor: pinkColor,
                                                borderWidth: "2px",
                                                }}
                                            />
                                            </div>

                                        <div className="col-md-5 my-1">
                                            <label
                                                htmlFor="country"
                                                className="form-label"
                                                style={{ color: pinkColor, fontWeight: "bold" }}
                                            >
                                                Country
                                            </label>
                                            <br />
                                            <select
                                                className="form-select"
                                                id="country"
                                                required
                                                style={{
                                                borderColor: pinkColor,
                                                borderWidth: "2px",
                                                }}
                                            >
                                                <option value="">Choose...</option>
                                                <option>India</option>
                                            </select>
                                        <div className="invalid-feedback">Please select a valid country.</div>
                                        </div>

                                        <div className="col-md-4 my-1">
                            <label
                                htmlFor="state"
                                className="form-label"
                                style={{ color: pinkColor, fontWeight: "bold" }}
                            >
                                State
                            </label>
                            <br />
                            <select
                                className="form-select"
                                id="state"
                                required
                                style={{
                                borderColor: pinkColor,
                                borderWidth: "2px",
                                }}
                            >
                                <option value="">Choose...</option>
                                <option>Punjab</option>
                            </select>
                            <div className="invalid-feedback">Please provide a valid state.</div>
                            </div>

                            <div className="col-md-3 my-1">
                            <label
                                htmlFor="zip"
                                className="form-label"
                                style={{ color: pinkColor, fontWeight: "bold" }}
                            >
                                Zip
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                placeholder=""
                                required
                                style={{
                                borderColor: pinkColor,
                                borderWidth: "2px",
                                }}
                            />
                            <div className="invalid-feedback">Zip code required.</div>
                            </div>
                    </div>

                    <hr className="my-4" />

                    <h4
                      className="mb-3"
                      style={{ color: pinkColor }}
                    >
                      Payment
                    </h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label
                          htmlFor="cc-name"
                          className="form-label"
                          style={{ color: pinkColor, fontWeight: "bold" }}
                        >
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                          style={{
                            borderColor: pinkColor,
                            borderWidth: "2px",
                          }}
                        />
                        <small
                          className="text-muted"
                          style={{ color: pinkColor }}
                        >
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                            <label
                            htmlFor="cc-number"
                            className="form-label"
                            style={{ color: pinkColor, fontWeight: "bold" }}
                            >
                            Credit card number
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="cc-number"
                            placeholder=""
                            required
                            style={{
                                borderColor: pinkColor,
                                borderWidth: "2px",
                            }}
                            />
                            <div className="invalid-feedback">Credit card number is required</div>
                        </div>

                        <div className="col-md-3">
                                <label
                                htmlFor="cc-expiration"
                                className="form-label"
                                style={{ color: pinkColor, fontWeight: "bold" }}
                                >
                                Expiration
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-expiration"
                                    placeholder=""
                                    required
                                    style={{
                                        borderColor: pinkColor,
                                        borderWidth: "2px",
                                    }}
                                    />
                                    <div className="invalid-feedback">Expiration date required</div>
                                </div>

                                <div className="col-md-3">
                                    <label
                                    htmlFor="cc-cvv"
                                    className="form-label"
                                    style={{ color: pinkColor, fontWeight: "bold" }}
                                    >
                                    CVV
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="cc-cvv"
                                    placeholder=""
                                    required
                                    style={{
                                        borderColor: pinkColor,
                                        borderWidth: "2px",
                                    }}
                                    />
                                <div className="invalid-feedback">Security code required</div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary"
                      type="submit"
                      disabled
                      style={{
                        backgroundColor: pinkColor,
                        borderColor: pinkColor,
                      }}
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ color: pinkColor }}>
          Checkout
        </h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Checkout;