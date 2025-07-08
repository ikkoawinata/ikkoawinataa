// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

// const images = [
//   "./hero/trs1.jpg",
//   "./hero/trs2.jpg",
//   "./hero/trs3.jpg",
//   "./hero/trs4.jpg",
//   "./hero/trs5.jpg",
//   "./hero/trs6.jpg",
//   "./hero/trs7.jpg",
//   "./hero/trs8.jpg",
//   "./hero/trs9.jpg",
//   "./hero/trs10.jpg",
//   "./hero/trs11.jpg",
//   "./hero/trs13.jpg",
//   "./hero/trs14.jpg",
//   "./hero/trs15.jpg"
// ];

// export default function ImageSlider() {
//   return (
//     <div className="font-tentang py-10 flex flex-col items-center text-black dark:text-white">
//       {/* Judul */}
//       <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
//         Proof of Order by Customer
//       </h2>

//       {/* Container Slider */}
//       <div className="relative w-full max-w-4xl">
//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={3} // Menampilkan 3 gambar sekaligus
//           loop={true}
//           pagination={{ clickable: true }}
//           modules={[EffectCoverflow, Navigation, Pagination]}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2,
//             slideShadows: false,
//           }}
//           className="w-full"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <img
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//                 className="w-50 h-55 object-cover rounded-2xl shadow-xl dark:shadow-lg dark:shadow-gray-800"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }












"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./pricingslider.css";

const images = [
  "./hero/buktitf1.jpg",
  "./hero/buktitf2.jpg",
  "./hero/buktitf3.jpg",
  "./hero/buktitf4.jpg",
  "./hero/buktitf5.jpg",
  "./hero/buktitf6.jpg",
  "./hero/buktitf7.jpg",
  "./hero/buktitf8.jpg",
  "./hero/buktitf9.jpg",
  "./hero/buktitf10.jpg",
  "./hero/buktitf11.jpg",
  "./hero/buktitf13.jpg",
  "./hero/buktitf14.jpg",
  "./hero/buktitf15.jpg",
  "./hero/buktitf16.jpg",
  "./hero/buktitf17.jpg",
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="font-tentang py-10 flex flex-col items-center text-black dark:text-white">
      {/* Judul */}
      <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className=" font-serif text-3xl font-bold text-start mb-6 text-black dark:text-white">
            Proof of Order by Customer
          </h2>
          </div>

      {/* Container Slider */}
      <div className="relative w-full max-w-4xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Menampilkan 3 gambar sekaligus
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Navigation, Pagination]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className={`w-50 h-55 object-cover rounded-2xl shadow-xl transition-all duration-300 ${
                  activeIndex === index ? "opacity-100 scale-105" : "opacity-50"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
