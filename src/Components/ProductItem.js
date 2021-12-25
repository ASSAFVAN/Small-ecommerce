import React from "react";

const ProductItem = ({ name, image, description, price }) => {
  return (
    <div>
      <img src={`${image}`} alt={`${name}`}></img>
      <div>{name}</div>
      <div>{description}</div>
      <div>${price}</div>
    </div>
  );
};

export default ProductItem;
