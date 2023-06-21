import React from "react";
import "./Product2.css";
const Product2 = () => {
  return (
    <div>
      <section className="product2-wrapper">
        <div className="paddings innerWidth">
          <div className=" paddings innerWidth flexCenter product2-container">
            <div className="product2-left">
              <div className=" flexColStart product2-title">
                <span>Apni-Gaadi Driver</span>
                <h3>
                  The ApniGaadi Driver app is a powerful tool designed for our
                  drivers. With its user-friendly interface and robust features,
                  drivers can efficiently manage their rides, track earnings,
                  receive trip requests, and access important information, all
                  in one convenient app. It empowers our drivers to provide
                  seamless and exceptional service to our passengers, ensuring a
                  smooth and efficient transportation experience for all.
                </h3>
              </div>
            </div>
            <div className="product2-right">
              <div className="product2-image">
                <img src="./apni driver.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product2;
