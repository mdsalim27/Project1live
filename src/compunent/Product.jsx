import React from 'react'
import Container from './Container'

import product from "../assets/product.png"
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import { Link } from 'react-router-dom'



const images = [product, product1, product2, product3, product4, product5,];

const Product = () => {
    return (
        <Container>
            <div className=' text-center mt-6'><h2 className='text-blue-600 font-bold text-[60px]' >All Product</h2></div>
            <div className=' grid grid-cols-3 mb-5'>
                {images.map((img, index) => (
                    <div className="border rounded-xl shadow hover:shadow-lg transition w-[96%] mt-5 ">
                        <img
                            src={img}
                            alt={`product-${index}`}
                            className="w-full h-[250px] object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
            <Link to="/productAll" >
                <div className='mb-3 text-end'>
                    <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition cursor-pointer ">
                        Show All
                    </button>
                </div>
            </Link>

        </Container>
    )
}

export default Product