import React from "react";

import ShoppingList from "./ShoppingList";
import Categories from "./Categories";
import data from "../data/products.json";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = {
    filter: null,
    items: data["products"],
    cart: []
  };

  addtoCart = item => {
    this.setState({ cart: [...this.state.cart, item] });
  };
  removeFromCart = item => {
    console.log("Successfully clicked!");
    this.setState({ cart });
  };

  render() {
    console.log(this.state.items);
    return (
      <div className="ui grid container">
        <div className="two wide column">
          <Categories />
        </div>
        <div className="eleven wide column">
          <ShoppingList items={this.state.items} addtoCart={this.addtoCart} />
        </div>
        <div className="three wide column">
          <ShoppingCart cart={this.state.cart} />
        </div>
      </div>
    );
  }
}

export default App;
