import React from "react";
import "./ShoppingItem.css";

const ShoppingItem = ({ title, description, image, sizes }) => {
  return (
    <div className="shopping-item item column">
      <img
        className="ui image"
        src={require("../images/cn16334263.jpg")}
        alt="Clothing item to purchase"
      />
      <div className="header">{title}</div>
      <div className="content">
        <div className="description">
          <p>
            Description: {description}
            <br />
            Available in: {sizes}
          </p>
        </div>
        <button className="ui primary button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ShoppingItem;
