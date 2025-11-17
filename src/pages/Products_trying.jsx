// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import { data } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch products once when component mounts
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products)) // Save products array
      .catch((err) => console.error('Failed to fetch products:', err));
      console.log(products)
  }, []);

console.log(products)

  return (
    <>
      <div className="Products_row flex flex-col w-full min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="flex p-4 justify-center items-center gap-4 bg-white shadow">
          <h1 className="text-2xl font-bold">We are the products</h1>
          <a href="Buttons">
            <button className="bg-red-200 rounded-2xl px-4 py-2 hover:bg-red-300 transition">
              Buttons
            </button>
          </a>
        </div>

        {/* Product Listing */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-xl font-semibold mb-4">List of Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h2 className="text-lg font-semibold truncate">{product.title}</h2>
                <p className="text-red-600 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;