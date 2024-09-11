import React from "react";
import "./Buisness.css";

const buisness = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const Buisness = () => {
  return (
    <div className="Buisness">
      <div className="imageContainer">
        <img src={buisness.imageSrc} alt="" />
      </div>
      <h2>{buisness.name}</h2>
      <div className="BuisnessInformation">
        <div className="BuisnessAddress">
          <p>{buisness.address}</p>
          <p>{buisness.city}</p>
          <p>{`${buisness.state} ${buisness.zipCode}`}</p>
        </div>
        <div className="BuisnessReviews">
          <p>{buisness.category.toUpperCase()}</p>
          <p>{`{buisness.rating} stars`}</p>
          <p>{`${buisness.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Buisness;
