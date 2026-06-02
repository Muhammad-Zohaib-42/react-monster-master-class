import React from 'react'

const ProductInfo = () => {
  const productData = {
    name: "Laptop",
    price: "$1200",
    availability: "In stock"
  }

  return (
    <div>
        <h2>Product Name: {productData.name}</h2>
        <p>Product Price: {productData.price}</p>
        <p>Product Availability: {productData.availability}</p>
    </div>
  )
}

export default ProductInfo