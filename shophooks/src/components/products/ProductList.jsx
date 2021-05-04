import React from "react";
import Product from "./Product";

function ProductList({ addCart, products, cart }) {
  return (
    <div>
      {products.map((product) => (
        <Product
          addCart={addCart}
          product={product}
          cart={cart}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default ProductList;
