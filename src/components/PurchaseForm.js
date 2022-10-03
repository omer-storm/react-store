import { useState } from "react";
import React from "react";
// import axios from "axios";

const PurchaseForm = ({ onFormPost }) => {
  const [info, setInfo] = useState({
    paymentMethod: "cashOnDelivery",
    creditCardInfo: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormPost(info);
    setInfo({
      paymentMethod: "cashOnDelivery",
      creditCardInfo: {},
    });
  };

  const handleChange = ({ currentTarget: input }) => {
    if (input.name === "paymentMethod") info.creditCardInfo = {};
    info[input.name] = input.value;
    setInfo({ ...info });
  };

  const handleCreditCardInfoChange = ({ currentTarget: input }) => {
    info.creditCardInfo[input.name] = input.value;
    setInfo({ ...info });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-12">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="email"> Email address </label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-6">
            <label>Country</label>
            <input
              id="country"
              name="country"
              type="text"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-6">
            <label>City</label>
            <input
              id="city"
              name="city"
              type="text"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group col-12">
            <label>Delivery Address</label>
            <input
              id="homeAddress"
              name="homeAddress"
              type="text"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label> Payment Option: </label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="paymentMethod"
            name="paymentMethod"
            value="cashOnDelivery"
            onChange={handleChange}
            checked={info.paymentMethod === "cashOnDelivery" ? true : false}
          />
          <label className="form-check-label" htmlFor="paymentMethod">
            Cash on delivery
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="paymentMethod1"
            name="paymentMethod"
            value="creditCard"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="paymentMethod1">
            Credit Card
          </label>
        </div>

        {info.paymentMethod === "creditCard" && (
          <div className="row">
            <div className="col-12">
              <label htmlFor="">Card Number</label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                className="form-control"
                placeholder="Card Number"
                onChange={handleCreditCardInfoChange}
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="">MM / yy</label>
              <input
                id="date"
                name="date"
                type="text"
                className="form-control"
                placeholder="Date"
                onChange={handleCreditCardInfoChange}
                required
              />
            </div>

            <div className="col-6">
              <label htmlFor="">cvv code</label>
              <input
                id="cvvCode"
                name="cvvCode"
                type="text"
                className="form-control"
                placeholder="CVV"
                onChange={handleCreditCardInfoChange}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="">Card Name</label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                className="form-control"
                placeholder="Card Name"
                onChange={handleCreditCardInfoChange}
                required
              />
            </div>
          </div>
        )}

        <br />
        <button className="btn btn-primary mb-2">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default PurchaseForm;
