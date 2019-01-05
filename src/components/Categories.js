import React from "react";

const Categories = () => {
  return (
    <select className="ui fluid dropdown" multiple="">
      <option value="">Sizes</option>
      <option value="XS">Extra Small</option>
      <option value="S">Small</option>
      <option value="M">Medium</option>
      <option value="L">Large</option>
      <option value="XL">Extra Large</option>
      <option value="XXL">Extra Extra Large</option>
    </select>
  );
};

export default Categories;
