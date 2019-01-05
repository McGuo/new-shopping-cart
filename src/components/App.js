import React from "react";
import ShoppingList from "./ShoppingList";
import Categories from "./Categories";
import data from "../data/products.json";

class App extends React.Component {
  state = {
    filter: null,
    items: data["products"]
  };

  render() {
    console.log(this.state.items);
    return (
      <div className="ui grid container">
        <div className="two wide column">
          <Categories />
        </div>
        <div className="fourteen wide column">
          <ShoppingList items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
