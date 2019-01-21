import React from "react";
import Product from "../Product/";

const Catalogue = ({ products, addtoCart, sizesSelected, jodieWei }) => {
  var findOne = (haystack, arr) => {
    return arr.some(function(v) {
      return haystack.indexOf(v) >= 0;
    });
  };

  const renderedList = products.map(item => {
    if (sizesSelected.length === 0) {
      return (
        <Product
          item={item}
          addtoCart={addtoCart}
          key={item.id}
          jodieWei={jodieWei}
        />
      );
    } else if (findOne(sizesSelected, item.availableSizes)) {
      return (
        <Product
          item={item}
          addtoCart={addtoCart}
          key={item.id}
          jodieWei={jodieWei}
        />
      );
    } else {
      return "";
    }
  });

  return <div className="ui stackable three column grid">{renderedList}</div>;
};

export default Catalogue;