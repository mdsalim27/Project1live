
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "New Winter Collection",
    subtitle: "Up to 50% Off",
    image:
      "https://image2url.com/r2/default/images/1768988552384-846c72b6-6613-4189-8fd7-666f30e5ac2a.jpg",
  },
  {
    id: 2,
    title: "Smart Gadgets 2025",
    subtitle: "Best Tech Deals",
    image:
      "https://image2url.com/r2/default/images/1768988447622-7a445084-9efa-497a-a10e-6320e2e1ccd9.jpeg",
  },
  {
    id: 3,
    title: "Fashion Sale",
    subtitle: "Trending Styles",
    image:
      // "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      "https://image2url.com/r2/default/images/1768988335301-7103a075-60ad-4d09-af45-a81842d8c499.jpeg",
  },
];

const Banner = () => {
  return (
    <div className="w-full pt-22 pb-5">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        // className="h-[220px] md:h-[420px]"
        className="h-[70vh] md:h-[90vh]"
// className="h-[350px] md:h-[600px]"

      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="px-6 md:px-16 text-white animate-fadeIn">
                  <h1 className="text-2xl md:text-4xl font-bold mb-2">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg mb-4">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
