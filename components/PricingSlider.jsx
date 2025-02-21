"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
  "./hero/trs1.jpg",
  "./hero/trs2.jpg",
  "./hero/trs3.jpg",
  "./hero/trs4.jpg",
  "./hero/trs5.jpg",
  "./hero/trs6.jpg",
  "./hero/trs7.jpg",
  "./hero/trs8.jpg",
  "./hero/trs9.jpg",
  "./hero/trs10.jpg",
  "./hero/trs11.jpg",
  "./hero/trs13.jpg",
  "./hero/trs14.jpg",
  "./hero/trs15.jpg"

];

export default function ImageSlider() {
  return (
    <div className="font-tentang py-10 flex flex-col items-center bg-orange-50">
      {/* Judul */}
      <h2 className="text-3xl font-bold mb-6 text-center">Proof of Order by Customer</h2>

      {/* Container Slider */}
      <div className="relative w-full max-w-4xl">
        {/* Swiper */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Biar ada 3 gambar kelihatan
          loop={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          coverflowEffect={{
            rotate: 35,
            stretch: 30,
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
                className="w-50 h-50 object-cover rounded-2xl shadow-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </div>
  );
}
