import React from "react";
import "./Product.css";

const Product = ({ item, addtoCart }) => {
  const renderedButtons = item.availableSizes.map(size => {
    return (
      <button
        className="ui primary button inverted product"
        key={size}
        onClick={() => {
          addtoCart(item, size);
        }}
      >
        {size}
      </button>
    );
  });

  return (
    <div class="ui card">
      <div class="image">
        <img
          src={require(`../../static/data/products/${item.sku}_1.jpg`)}
          alt={item.title}
        />
      </div>
      <div class="content">
        <h3 class="header">{item.title}</h3>
        <div class="description">
          ${item.price} <br />
          Available in:
          <br />
        </div>
      </div>
      <div class="extra content">{renderedButtons}</div>
    </div>
  );
};

export default Product;
