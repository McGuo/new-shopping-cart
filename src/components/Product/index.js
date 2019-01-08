import React from "react";
import "./Product.css";

const Product = ({ item, addtoCart }) => {
  const renderedButtons = item.availableSizes.map(size => {
    return (
      <button
        className="ui primary button"
        key={size}
        onClick={() => {
          item.size = size;
          addtoCart(item);
        }}
      >
        {size}
      </button>
    );
  });

  return (
    <div className="shopping-item item column">
      <img
        className="ui image"
        src={require(`../../static/data/products/${item.sku}_1.jpg`)}
        alt={item.style}
      />
      <div className="header">{item.title}</div>
      <div className="content">
        <div className="description">
          <p>
            {item.description} <br />${item.price} <br />
            <b>Available in:</b>
          </p>
        </div>
        {renderedButtons}
      </div>
    </div>
  );
};

export default Product;
