import React from "react";
import { Dropdown } from "semantic-ui-react";

const styles = { margin: "10px" };

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
    return (
      <Dropdown
        placeholder="Select Sizes"
        fluid
        multiple
        selection
        options={options}
        style={styles}
        onChange={(e, { value }) => this.props.updateSizesSelected(value)}
      />
    );
  }
}

export default Categories;
