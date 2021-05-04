import React from 'react'

function Product({addCart, product, cart}) {
    function addToCart(){
        addCart(prevState=>[...prevState, product])
    }

    function removeFromCart(){
        // addCart(prevState=>[...prevState, product])
        let index = cart.findIndex(el => el.id === product.id)
        let tempCart = [...cart]
        tempCart.splice(index, 1)
        addCart(tempCart)
    }

    return (
        <div>
            {product.name}
            <i>{product.price}</i>
            <button onClick={addToCart}>Add To Cart</button>
            <button onClick={removeFromCart}>Remove From Cart</button>
        </div>
    )
}

export default Product
