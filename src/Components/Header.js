import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/products">Shop</Link>
        <Link to="/checkout">Cart</Link>
      </nav>
    </div>
  );
}
