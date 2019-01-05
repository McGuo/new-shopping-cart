import React from "react";
import "./ShoppingCartCard.css";

const ShoppingCartCard = ({ item }) => {
  return (
    <div className="shopping-cart-card item">
      <div className="content">
        <div className="header">
          {item.title}
          <button class="ui icon button red">
            <i class="minus icon" />
          </button>
        </div>
        <p>Quantity: X</p>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
