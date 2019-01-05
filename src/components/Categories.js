import React from "react";

const Categories = () => {
  return (
    <select className="ui fluid dropdown" multiple="">
      <option value="">T-Shirt Size</option>
      <option value="XS">Extra Small</option>
      <option value="S">Small</option>
      <option value="M">Medium</option>
    </select>
  );
};

export default Categories;
