// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// export default function SwiperComponent() {
//   return (
//     <Swiper
//       cssMode={true}
//       navigation={true}
//       pagination={{ clickable: true }}
//       mousewheel={true}
//       keyboard={true}
//       loop={true}
//       modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//       className="mySwiper"
//     >
//       <SwiperSlide>Слайд 1</SwiperSlide>
//       <SwiperSlide>Слайд 2</SwiperSlide>
//       <SwiperSlide>Слайд 3</SwiperSlide>
//       <SwiperSlide>Слайд 4</SwiperSlide>
//     </Swiper>
//   );
// }
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container" style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
