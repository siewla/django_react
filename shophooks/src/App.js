import React from 'react'
import ProductList from './components/products/ProductList'
import Cart from './components/cart/Cart'

function App() {
  const [cart, setCart]= React.useState([])
  const [products, setProducts]= React.useState([{ 
    id:1,
    name:'bag',
    price: 50.00
  },{
    id:2,
    name:'shirt',
    price: 70.00
  }
  ])

  return (
   <div>
     <Cart addCart={setCart} cart={cart}/>
     <ProductList addCart={setCart} cart={cart} products={products}/>
   </div>
  );
}

export default App;
