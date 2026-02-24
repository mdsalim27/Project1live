// import React from 'react'
// import Container from './Container'

// import product from "../assets/product.png"
// import product1 from "../assets/product1.png"
// import product2 from "../assets/product2.png"
// import product3 from "../assets/product3.png"
// import product4 from "../assets/product4.png"
// import product5 from "../assets/product5.png"
// import { Link } from 'react-router-dom'

// const images = [product, product1, product2, product3, product4, product5,];

// const Product = () => {
//     return (
//         <Container>  
//           <div>
//                 <div className="text-center pt-18">
//                     <h2 className="text-blue-600 font-bold text-[60px]">
//                         All Product
//                     </h2>
//                 </div>

//                 <div className="grid grid-cols-3 gap-6 mb-8">
//                     {images.map((img, index) => (
//                         <div
//                             key={index}
//                             className="group w-full h-[320px] border-2 border-gray-200 
//                                 rounded-2xl overflow-hidden shadow-md 
//                                 hover:shadow-2xl hover:border-blue-600
//                                 transition-all duration-500 ease-in-out 
//                                 cursor-pointer bg-white" >
//                             <div className="overflow-hidden h-full">
//                                 <img src={img} alt={`product-${index}`}
//                                     className="w-full h-full object-cover 
//                                       transform transition-transform 
//                                       duration-700 ease-in-out 
//                                       group-hover:scale-110"/>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <Link to="/productAll">
//                     <div className="mb-5 text-end">
//                         <button className="px-6 py-2 text-sm font-semibold text-white 
//                                             bg-blue-600 rounded-lg  hover:bg-blue-700 
//                                               hover:scale-105 transition-all duration-300" >
//                             Show All
//                         </button>
//                     </div>
//                 </Link>
//             </div>
//         </Container>
//     )
// }
// export default Product



import React from "react";
import Container from "./Container";

import product from "../assets/product.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import { Link } from "react-router-dom";

// Sample product data with name & price
const products = [
  { id: 1, name: "Smart Watch", price: 2999, image: product },
  { id: 2, name: "Wireless Earbuds", price: 1999, image: product1 },
  { id: 3, name: "Gaming Mouse", price: 899, image: product2 },
  { id: 4, name: "Bluetooth Speaker", price: 1499, image: product3 },
  { id: 5, name: "Laptop Stand", price: 1200, image: product4 },
  { id: 6, name: "Smartphone Holder", price: 699, image: product5 },
  { id: 6, name: "Smartphone Holder", price: 699, image: product5 },
  { id: 6, name: "Smartphone Holder", price: 699, image: product5 },
];

const Product = () => {
  return (
    <Container>
      <div>
        {/* Heading */}
        <div className="text-center pt-18">
          <h2 className="text-blue-600 font-bold text-[60px]">All Product</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative h-[250px] w-full 
                         border-2 border-gray-200 rounded-2xl overflow-hidden 
                         shadow-md hover:shadow-2xl hover:border-blue-600
                         transition-all duration-500 ease-in-out cursor-pointer bg-white"
            >
              {/* Product Image */}
              <div className="h-[70%] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover 
                             transition-transform duration-700 ease-in-out 
                             group-hover:scale-110"
                />
              </div>        
              {/* Product Info */}
              <div className="h-[30%] p-4 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-600 font-bold mt-1">৳ {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <Link to="/productAll">
          <div className="mb-5 text-end">
            <button className="px-6 py-2 text-sm font-semibold text-white 
                               bg-blue-600 rounded-lg hover:bg-blue-700 
                               hover:scale-105 transition-all duration-300">
              Show All
            </button>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Product;