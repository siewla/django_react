import React from "react";
import ProductList from "./components/products/ProductList";
import Cart from "./components/cart/Cart";
import AddProduct from "./components/products/AddProduct";

function App() {
  const [cart, setCart] = React.useState([]);
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: "bag",
      price: 50.0,
    },
    {
      id: 2,
      name: "shirt",
      price: 70.0,
    },
  ]);

  return (
    <div>
      <Cart addCart={setCart} cart={cart} />
      <ProductList addCart={setCart} cart={cart} products={products} />
      <AddProduct addProducts={setProducts} products={products} />
    </div>
  );
}

export default App;
