import React from "react";
// import Button from "./Button";
import ProductItem from ".//ProductItem";

export default function CarProductList({ cartProducts, handleClick }) {
  const renderList = cartProducts.map((cartProduct) => {
    return (
      <div key={cartProduct.id} className="card-container">
        <ProductItem
          id={cartProduct.id}
          name={cartProduct.name}
          image={cartProduct.image}
          description={cartProduct.description}
          price={cartProduct.price}
        />
        <div>quantity</div>
        {/* <div className="btn-wrap">
          <Button
            handleClick={handleClick}
            name="addToCart"
            id={`${product.id}`}
            btnText="ADD TO CART"
          />
        </div> */}
      </div>
    );
  });

  return <div className="card-list-container">{renderList}</div>;
}
