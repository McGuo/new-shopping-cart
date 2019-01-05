import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items, addtoCart }) => {
  const renderedList = items.map(item => {
    return <ShoppingItem item={item} addtoCart={addtoCart} />;
  });

  return <div className="ui stackable three column grid">{renderedList}</div>;
};

export default ShoppingList;
