import React from "react";
import ShoppingCartCard from "./ShoppingCartCard";

const ShoppingCart = ({ cart }) => {
  const renderedList = cart.map(item => {
    return <ShoppingCartCard key={item.id} item={item} />;
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
