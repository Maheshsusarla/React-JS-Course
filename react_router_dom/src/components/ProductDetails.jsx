// import React from 'react'
// import { useParams } from 'react-router-dom'
// import products from '../data/data';

// const ProductDetails = () => {
//     const {id}=useParams();
//     console.log(id);

//     const product=products.find((item)=>(item.id)===Number(id))
//     console.log(product);
    
//     if(!product){
//         return <h2>Product not found</h2>
//     }
    
//   return (
//     <div>
//         <h2>{product.name}</h2>
//         <p>{product.price}</p>
//     </div>
//   )
// }

// export default ProductDetails

import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Product ID: {id}</h2>
    </div>
  );
}

export default ProductDetails;