import React from "react";
import ProductCard from "./ProductCard/";

const ShoppingCart = ({ cart, removeFromCart }) => {
  const renderedList = cart.map(item => {
    return (
      <ProductCard key={item.id} item={item} removeFromCart={removeFromCart} />
    );
  });

  return (
    <div className="ui right visible  vertical sidebar labeled icon menu">
      <div className="item">
        <i className="shopping cart icon" />
        <div className="header"> Current Shopping Cart</div>
      </div>
      <div className="ui middle aligned divided list">{renderedList}</div>
    </div>
  );
};

export default ShoppingCart;
