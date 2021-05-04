import React from 'react'
import Product from './Product'

function ProductList({addCart, products}) {
    return (
        <div>
            {products.map(product => (
                <Product 
                addCart={addCart}
                product={product} 
                key={product.id} />
            ))}
        </div>
    )
}

export default ProductList
