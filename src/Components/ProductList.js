import React from "react";
import Button from "./Button";
import ProductItem from ".//ProductItem";

export default function ProductList({ products, handleClick }) {
  const renderList = products.map((product) => {
    return (
      <div key={product.id} className="card-container">
        <ProductItem
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
        />
        <div className="btn-wrap">
          <Button
            handleClick={handleClick}
            name="addToCart"
            id={`${product.id}`}
            btnText="ADD TO CART"
          />
        </div>
      </div>
    );
  });

  return <div className="card-list-container">{renderList}</div>;
}
