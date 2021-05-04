import React from "react";

function Cart({ addCart, cart }) {
  let amount = cart.length
    ? cart.reduce((t, c) => t + c.price * c.quantity, 0)
    : 0;

  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <h3>Total: {amount}</h3>
    </div>
  );
}

export default Cart;
