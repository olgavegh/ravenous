import React from "react";
import "./Buisness.css";

const Buisness = () => {
  return (
    <div className="Buisness">
      <div className="imageContainer">
        <img src={src} alt="" />
      </div>
      <h2>name</h2>
      <div className="BuisnessInformation">
        <div className="BuisnessAddress">
          <p>address</p>
          <p>city</p>
          <p>state zipcode</p>
        </div>
        <div className="BuisnessReviews">
          <p>category</p>
          <p>rating</p>
          <p>reviewCount reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Buisness;
