import React from "react";
import Catalogue from "../Catalogue/";
import Categories from "../Categories/";
import ShoppingCart from "../ShoppingCart/";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyAZaYS-ueJVYspHOa-4vJTm3iFn1WyNM0Y",
  authDomain: "shopping-cart-5d4bb.firebaseapp.com"
});

class App extends React.Component {
  state = {
    products: [],
    cart: [],
    sizesSelected: [],
    cartTotal: 0.0,
    isSignedIn: false
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  roundedValue = number => Math.round(number * 100) / 100;

  addtoCart = (event, size) => {
    var newItem = JSON.parse(JSON.stringify(event));
    const target = this.state.cart.find(item => {
      if (item.sku === newItem.sku && item.size === size) {
        return item;
      }
      return undefined;
    });

    if (target) {
      const index = this.state.cart.indexOf(target);
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
      newItem.count = 1;
      newItem.currentCost = event.price;
      newItem.size = size;
      newItem.uniqID = newItem.sku + newItem.size;

      this.setState({
        cart: [...this.state.cart, newItem],
        cartTotal: this.roundedValue(this.state.cartTotal + event.price)
      });
    }
  };

  removeFromCart = event => {
    event.uniqID = event.sku + event.size;

    this.setState({
      cart: this.state.cart.filter(item => item.uniqID !== event.uniqID),
      cartTotal: this.roundedValue(
        this.state.cartTotal - event.count * event.price
      )
    });
  };

  updateSizesSelected = event => {
    this.setState({ sizesSelected: event });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
    import("../../static/data/products.json")
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
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>
                Sign Out
              </button>
              <h1>Welcome, {firebase.auth().currentUser.displayName}</h1>
              <img alt="profile" src={firebase.auth().currentUser.photoURL} />
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
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
            jodieWei={this.state.cart}
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
