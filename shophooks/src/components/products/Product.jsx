import React from "react";
import { Button } from "react-bootstrap";

function Product({ addCart, product, cart }) {
  function addToCart() {
    // console.log(cart)
    // console.log(product)
    // if (!cart.includes(product)) {
    //   addCart((prevState) => [...prevState, product]);
    // }
    let tempCart = [...cart];
    let index = cart.findIndex((el) => el.id === product.id);

    if (index > -1) {
      // increase quantity by 1
      tempCart[index].quantity += 1;
      addCart(tempCart);
    } else {
      //set quantity to 1
      product.quantity = 1;
      addCart((prevState) => [...prevState, product]);
    }
  }

  function removeFromCart() {
    // addCart(prevState=>[...prevState, product])
    if (cart.includes(product)) {
      let index = cart.findIndex((el) => el.id === product.id);
      let tempCart = [...cart];
      tempCart.splice(index, 1);
      addCart(tempCart);
    }
  }

  return (
    <div>
      {product.name}
      <i>{product.price}</i>
      <Button onClick={addToCart} variant="primary">
        Add To Cart
      </Button>
      <Button onClick={removeFromCart} variant="danger">
        Remove From Cart
      </Button>
    </div>
  );
}

export default Product;
