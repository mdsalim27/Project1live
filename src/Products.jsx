
import React, { useRef } from "react";
import Container from "./compunent/Container";

import product from "../src/assets/product.png";
import product1 from "../src/assets/product1.png";
import product2 from "../src/assets/product2.png";
import product3 from "../src/assets/product3.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";



const images = [product, product1, product2, product3,product3,];

const Products = () => {
    const swiperRef = useRef(null);
    return (
        <section>
            <Container>
                <div className=" relative ">
                    {/* Heading */}
                    <div className="text-center py-2">
                        <h2 className="font-semibold text-[40px] italic">
                            Complete Printing Solutions for Every Need
                        </h2>
                        <p className="text-[20px] py-2 italic">
                            From business essentials to large-format displays, we deliver exceptional quality on every project
                        </p>
                    </div>
                    {/* Product Slider */}
                    <Swiper
                        slidesPerView={4}
                        loop={true}
                        spaceBetween={20}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}  >
                            
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                {/* Product Card */}
                                <div className="border border-blue-800 rounded-xl shadow-md 
                                                 hover:shadow-2xl transition duration-300 
                                                cursor-pointer overflow-hidden">
                                    {/* Image */}
                                    <div className="overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`product-${index}`}
                                            className="w-full h-[200px] object-cover 
                                                       transition-transform duration-700 ease-in-out 
                                                       hover:-translate-y-3 hover:scale-105"
                                        />
                                    </div>
                                    {/* Text Content */}
                                    <div className="bg-blue-600 text-white p-5">
                                        <h3 className="text-xl font-semibold mb-2">
                                            Product {index + 1}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-blue-100">
                                            High quality printing product description here.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => swiperRef.current.slidePrev()}
                            className="px-4 cursor-pointer py-2 absolute top-90 left-[-45px] z-99"  >
                            <IoIosArrowDropleft className="w-12 h-12 text-gray-600 hover:text-black transition duration-300" />
                        </button>
                        <button onClick={() => swiperRef.current.slideNext()}
                            className="px-4 cursor-pointer py-2 absolute top-90 right-[-45px] z-99" >
                            <IoIosArrowDropright className="w-12 h-12 text-gray-600 hover:text-black transition duration-300" />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Products;

