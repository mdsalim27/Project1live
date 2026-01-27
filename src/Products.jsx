
import React, { useRef } from "react";
import Container from "./compunent/Container";

import product from "../src/assets/product.png";
import product1 from "../src/assets/product1.png";
import product2 from "../src/assets/product2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";



const images = [product, product1, product2];

const Products = () => {
    const swiperRef = useRef(null);

    return (
        <section>
            <Container>
                <div className=" relative ">

                    {/* Heading */}
                    <div className="text-center py-10">
                        <h2 className="font-semibold text-[40px]">
                            Complete Printing Solutions for Every Need
                        </h2>
                        <p className="text-[20px] px-20 pt-5">
                            From business essentials to large-format displays, we deliver exceptional quality on every project
                        </p>
                    </div>

                    {/* Product Slider */}
                    <Swiper
                        slidesPerView={2}
                        loop={true}
                        spaceBetween={20}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                {/* Product Card */}
                                <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">

                                    <img
                                        src={img}
                                        alt={`product-${index}`}
                                        className="w-full h-[250px] object-cover rounded-lg"
                                    />

                                    <h3 className="text-xl font-semibold mt-4">
                                        Product {index + 1}
                                    </h3>

                                    <p className="text-gray-600 mt-2">
                                        High quality printing product description here.
                                    </p>


                                </div>

                            </SwiperSlide>

                        ))}
                    </Swiper>
                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => swiperRef.current.slidePrev()}
                            className="px-4 py-2 absolute top-90 left-[-45px] z-99"
                        >
                            <IoIosArrowDropleft className="w-12 h-12 text-gray-600 hover:text-black transition duration-300" />

                        </button>


                        <button onClick={() => swiperRef.current.slideNext()}
                            className="px-4 py-2 absolute top-90 right-[-45px] z-99"
                        >
                            <IoIosArrowDropright className="w-12 h-12 text-gray-600 hover:text-black transition duration-300" />

                        </button>
                    </div>
                </div>


            </Container>
        </section>
    );
};

export default Products;

