// src/pages/Products.jsx
import React, { use, useEffect, useState } from 'react'
import { data } from 'react-router';


const Products = () => {

  const [products, setProducts] = useState([]);

useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products)) // Save products array
      .catch((err) => console.error('Failed to fetch products:', err));
      console.log(products)

}, []);

useEffect(() => {
    console.log(products)
}, [products]);







/*

useEffect(() => {
  // 1️⃣ Fetch data from DummyJSON API when the component mounts
  fetch('https://dummyjson.com/products')
    .then((res) => res.json()) // 2️⃣ Convert the response to JSON
    .then((data) => setProducts(data.products)) // 3️⃣ Save the products array to state
    .catch((err) => console.error('Failed to fetch products:', err)); // 4️⃣ Handle any errors during fetch

  // 5️⃣ This console.log runs immediately after fetch starts (not after state updates)
  console.log(products);
}, []); // 6️⃣ Empty dependency array means this runs only once on initial render

// 7️⃣ This console.log runs every time the component re-renders
console.log(products);

*/



  return (
    <>
    
    <div className='Products_row flex flex-col'>
      <div className='flex p-3 justify-center items-center gap-4'>
      <h1>We are the products</h1>
      <a href="Buttons">
      <button className='bg-red-200 rounded-2xl p-2'>Butttons</button>
      </a>
      </div>
    <div className='m-4'>
      <h2 className='p-2'>List of Products</h2>
      <div className='products flex gap-4 flex-wrap'>
        {products.map((product)=>(
        
        
        <div className='m-4'>
          <div className='bg-gray-100 w-50 h-50 p-2'>
            <img 
            src={product.thumbnail} 
            alt={product.title}
            />
          </div>
          <h2>Title: {product.title}</h2>
          <h2>Price: {product.price} $</h2>
        </div>
        ))}

      </div>
    </div>


    </div>
    </>
  )
}

export default Products
