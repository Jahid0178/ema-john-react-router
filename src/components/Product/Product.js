import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  const { name, img, price, stock, seller, star } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h4 className="product-name">{name}</h4>
        <p>By: {seller}</p>
        <p>Price: ${price}</p>
        <Rating
          readonly
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
        />
        <p>only {stock} left in stock - order soon</p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="regular-btn"
        >
          <span>{cartIcon} add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
