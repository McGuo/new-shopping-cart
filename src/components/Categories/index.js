import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./Categories.css";

const options = [
  { key: "XS", text: "Extra Small", value: "XS" },
  { key: "S", text: "Small", value: "S" },
  { key: "M", text: "Medium", value: "M" },
  { key: "L", text: "Large", value: "L" },
  { key: "XL", text: "Extra Large", value: "XL" },
  { key: "XXL", text: "Extra Extra Large", value: "XXL" }
];

class Categories extends React.Component {
  render() {
    const { updateSizesSelected } = this.props;
    return (
      <Dropdown
        placeholder="Select Sizes to Filter By"
        fluid
        multiple
        selection
        options={options}
        style={{ margin: "10px" }}
        onChange={(e, { value }) => updateSizesSelected(value)}
      />
    );
  }
}

export default Categories;
