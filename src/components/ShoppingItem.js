import React from "react";
import "./ShoppingItem.css";

const ShoppingItem = ({ item, addtoCart }) => {
  return (
    <div className="shopping-item item column">
      <img
        className="ui image"
        src={require(`../data/products/${item.sku}_1.jpg`)}
        alt={item.style}
      />
      <div className="header">{item.title}</div>
      <div className="content">
        <div className="description">
          <p>
            Description: {item.description}
            <br />
            Available in: {item.availableSizes.join(", ")}
          </p>
        </div>
        <button className="ui primary button" onClick={() => addtoCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingItem;
