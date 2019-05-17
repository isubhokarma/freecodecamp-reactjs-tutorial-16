import React from "react";

const Product = props => {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>
        Price: {props.product.price}/- {props.product.description}
      </p>
    </div>
  );
};

export default Product;
