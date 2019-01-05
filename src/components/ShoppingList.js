import React from "react";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items }) => {
  const renderedList = items.map(item => {
    return (
      <ShoppingItem
        key={item.id}
        title={item.title}
        description={item.description}
        sizes={item.availableSizes}
      />
    );
  });

  return <div className="ui stackable three column grid">{renderedList}</div>;
};

export default ShoppingList;
