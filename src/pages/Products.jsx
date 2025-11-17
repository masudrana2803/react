// src/pages/Products.jsx
import React from 'react'


const Products = () => {

  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);



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
      <div className='bg-gray-400 w-50 h-50 p-2'>
        <img src="" alt="" />
      </div>
      <h2>Title:</h2>
      <h2>Price:</h2>
    </div>
    </div>
    </>
  )
}

export default Products
