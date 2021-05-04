import React from "react";

function Product({ addCart, product, cart }) {
  function addToCart() {
    // console.log(cart)
    // console.log(product)
    if (!cart.includes(product)) {
      addCart((prevState) => [...prevState, product]);
    }

    // let tempProduct = {...product}
    // let index = cart.findIndex((el) => el.id === product.id);
    // if (index >-1){

    // }else{

    // }
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
      <button onClick={addToCart}>Add To Cart</button>
      <button onClick={removeFromCart}>Remove From Cart</button>
    </div>
  );
}

export default Product;
