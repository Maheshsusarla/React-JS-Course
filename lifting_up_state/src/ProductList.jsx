import React from 'react'

const ProductList = ({ searchText }) => {
    const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Laptop Bag"
  ];

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
        <h2>Products</h2>

      {filteredProducts.map((product) => (
        <p key={product}>{product}</p>
      ))}

    </div>
  )
}

export default ProductList