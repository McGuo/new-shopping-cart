import React from "react";

import Catalogue from "./Catalogue";
import Categories from "./Categories";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = {
    products: [],
    cart: [],
    sizesSelected: []
  };

  addtoCart = event => {
    if (this.state.cart.includes(event)) {
      const index = this.state.cart.indexOf(event);
      var newCart = this.state.cart;
      newCart[index].count += 1;
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
          removeFromCart={this.removeFromCart}
        />
      </div>
    );
  }
}

export default App;
