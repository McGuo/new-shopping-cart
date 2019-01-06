import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items, addtoCart, sizesSelected }) => {
  var findOne = (haystack, arr) => {
    return arr.some(function(v) {
      return haystack.indexOf(v) >= 0;
    });
  };

  const renderedList = items.map(item => {
    if (sizesSelected.length === 0) {
      return <ShoppingItem item={item} addtoCart={addtoCart} key={item.id} />;
    } else if (findOne(sizesSelected, item.availableSizes)) {
      return <ShoppingItem item={item} addtoCart={addtoCart} key={item.id} />;
    } else {
      return "";
    }
  });

  return <div className="ui stackable three column grid">{renderedList}</div>;
};

export default ShoppingList;
