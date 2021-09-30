import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, key } = props.product;
  const { handleRemove } = props;
  return (
    <div className="product">
      <div className="product-details">
        <h1>Order-Review</h1>
        <h4 className="product-name">Name: {name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => handleRemove(key)} className="regular-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
