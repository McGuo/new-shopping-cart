import React from "react";

import ShoppingList from "./ShoppingList";
import Categories from "./Categories";
import data from "../data/products.json";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = {
    filter: null,
    items: data["products"],
    cart: [],
    sizesSelected: []
  };

  addtoCart = event => {
    if (this.state.cart.includes(event)) {
      const index = this.state.cart.indexOf(event);
      var newCart = this.state.cart;
      newCart[index].count = newCart[index].count + 1;
      this.setState({ cart: newCart });
    } else {
      event.count = 1;
      this.setState({ cart: [...this.state.cart, event] });
    }
  };

  removeFromCart = event => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== event.id)
    });
  };

  updateSizesSelected = event => {
    this.setState({
      sizesSelected: event
    });
  };

  render() {
    return (
      <div className="ui grid container">
        <div className="row">
          <div className="fourteen wide column">
            <Categories updateSizesSelected={this.updateSizesSelected} />
          </div>
        </div>
        <div className="row" />
        <div className="fourteen wide column">
          <ShoppingList items={this.state.items} addtoCart={this.addtoCart} />
        </div>

        <ShoppingCart
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
        />
      </div>
    );
  }
}

export default App;
