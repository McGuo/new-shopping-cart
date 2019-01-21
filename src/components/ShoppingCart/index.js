import React from "react";
import ProductCard from "../ProductCard/";

const ShoppingCart = ({ cart, cartTotal, removeFromCart }) => {
  const renderedList = cart.map(item => {
    return (
      <ProductCard
        key={item.uniqID}
        item={item}
        removeFromCart={removeFromCart}
      />
    );
  });

  return (
    <div className="ui right visible  vertical sidebar labeled icon menu">
      <div className="item">
        <i className="shopping cart icon" />
        <div className="header"> Current Shopping Cart</div>
      </div>
      <div className="ui middle aligned divided list">
        {renderedList}
        <div className="item">
          <div className="left floated content">
            <h4>Total:</h4>
          </div>
          <div className="right floated content">
            <p>${cartTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
