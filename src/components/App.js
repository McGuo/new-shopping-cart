import React from "react";

import Catalogue from "./Catalogue";
import Categories from "./Categories";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = {
    products: [],
    cart: [],
    sizesSelected: [],
    cartTotal: 0.0
  };

  roundedValue = number => Math.round(number * 100) / 100;

  addtoCart = event => {
    console.log(`The selection was a ${event.size} ${event.title}`);

    if (this.state.cart.includes(event)) {
      const index = this.state.cart.indexOf(event);
      var newCart = this.state.cart;
      newCart[index].count += 1;
      newCart[index].currentCost = this.roundedValue(
        newCart[index].count * newCart[index].price
      );

      this.setState({
        cart: newCart,
        cartTotal: this.roundedValue(
          this.state.cartTotal + newCart[index].price
        )
      });
    } else {
      event.count = 1;
      event.currentCost = event.price;
      this.setState({
        cart: [...this.state.cart, event],
        cartTotal: this.roundedValue(this.state.cartTotal + event.price)
      });
    }
  };

  removeFromCart = event => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== event.id),
      cartTotal: this.roundedValue(
        this.state.cartTotal - event.count * event.price
      )
    });
  };

  updateSizesSelected = event => {
    this.setState({ sizesSelected: event });
  };

  componentDidMount() {
    import("../static/data/products.json")
      .then(json => {
        this.setState({ products: json.products });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="row">
          <div className="twelve wide column">
            <Categories updateSizesSelected={this.updateSizesSelected} />
          </div>
        </div>
        <div className="row" />
        <div className="twelve wide column">
          <Catalogue
            products={this.state.products}
            addtoCart={this.addtoCart}
            sizesSelected={this.state.sizesSelected}
          />
        </div>

        <ShoppingCart
          cart={this.state.cart}
          cartTotal={this.state.cartTotal}
          removeFromCart={this.removeFromCart}
        />
      </div>
    );
  }
}

export default App;
