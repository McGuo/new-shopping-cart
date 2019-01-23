import React from "react";
import "./ProductCard.css";

class ProductCard extends React.Component {
  render() {
    const { item, removeFromCart } = this.props;
    return (
      <div className="shopping-cart-card item">
        <div className="right floated content">
          <button
            className="ui icon button red mini inverted"
            onClick={() => {
              removeFromCart(item);
            }}
          >
            <i className="minus icon" />
          </button>
        </div>
        <img
          className="ui avatar image left floated content"
          src={require(`../../static/data/products/${item.sku}_1.jpg`)}
          alt={item.style}
        />

        <div className="content">
          <div className="header">{item.title}</div>
          <p>
            Size: {item.size}
            <br />
            {item.count} x {item.currencyFormat}
            {item.price} = {item.currencyFormat}
            {item.currentCost}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
