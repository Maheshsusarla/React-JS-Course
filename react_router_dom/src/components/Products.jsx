// // import React from 'react'
// // import products from '../data/data'
// // import { Link } from 'react-router-dom';

// // const Products = () => {
// //     console.log(products);
    
// //   return (
// //     <div className='gird'>
// //         {
// //             products.map((product)=>(
// //                 <div className='card' key={product.id}>
// //                     {/* <h3>{product.id}</h3> */}
// //                     <h4>{product.name}</h4>
// //                     {/* <p>{product.price}</p> */}
// //                     <Link to={`/products/${product.id}`}>View</Link>

// //                 </div>
// //             ))
// //         }
        
// //     </div>
// //   )
// // }

// // export default Products

// import { Link } from "react-router-dom";

// const products = [
//   { id: 101, name: "Headphones", price: 1500 },
//   { id: 102, name: "Smart Watch", price: 2500 },
//   { id: 103, name: "Shoes", price: 1800 }
// ];

// function Products() {
//   return (
//     <div>
//       <h1>Products</h1>

//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>Price: ₹{product.price}</p>

//           <Link to={`/products/${product.id}`}>
//             View Details
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;

import { useParams } from "react-router-dom";

const products = [
  { id: 101, name: "Headphones", price: 1500 },
  { id: 102, name: "Smart Watch", price: 2500 },
  { id: 103, name: "Shoes", price: 1800 }
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product ID: {product.id}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductDetails;