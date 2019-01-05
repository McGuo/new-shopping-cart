import React from "react";
import "./ShoppingCartCard.css";

class ShoppingCartCard extends React.Component {
  // state = {
  //   count: 1
  // };
  // handleClick = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    return (
      <div className="shopping-cart-card item">
        <div className="right floated content">
          <button
            className="ui icon button red"
            onClick={() => {
              this.props.removeFromCart(this.props.item);
            }}
          >
            <i className="minus icon" />
          </button>
        </div>
        <img
          className="ui avatar image left floated content"
          src={require(`../data/products/${this.props.item.sku}_1.jpg`)}
          alt={this.props.item.style}
        />

        <div className="content">
          <div className="header">{this.props.item.title}</div>
          <p>Quantity: {this.props.item.count}</p>
        </div>
      </div>
    );
  }
}

export default ShoppingCartCard;
