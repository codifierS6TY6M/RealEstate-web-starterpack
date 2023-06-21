import React from "react";
import "./Product1.css";
const Product1 = () => {
  return (
    <div>
      <section className="product-wrapper">
        <div className="paddings innerWidth">
          <div className="flexColStart product-head">
            <span>Our product</span>
          </div>
          <div className=" paddings innerWidth flexCenter product-container">
            <div className="product-left">
              <div className=" flexColStart product-title">
                <span>Apni-Gaadi user</span>
                <h3>
                  The ApniGaadi User app is your gateway to convenient and
                  reliable transportation. With its intuitive interface, you can
                  easily book rides, track your driver's location in real-time,
                  make secure in-app payments, and access essential ride
                  details. The user app also provides access to exclusive
                  offers, loyalty rewards, and responsive customer support,
                  ensuring a seamless and enjoyable experience every time you
                  travel with ApniGaadi. Experience the convenience and
                  reliability of our user app and enjoy hassle-free
                  transportation at your fingertips.
              </h3>
              </div>
            </div>
            <div className="product-right">
              <div className="product-image">
                <img src="./apni user.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product1;
