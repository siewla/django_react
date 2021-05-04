import React from 'react'

function Cart({addCart, cart}) {
    return (
        <div>
            Cart: {cart.length}
        </div>
    )
}

export default Cart
