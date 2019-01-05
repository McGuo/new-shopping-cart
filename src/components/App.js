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

  addtoCart = event => {
    if (this.state.cart.includes(event)) {
      return;
    } else {
      this.setState({
        cart: [...this.state.cart, event]
      });
    }
  };
  removeFromCart = event => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== event.id)
    });
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
          <ShoppingCart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
