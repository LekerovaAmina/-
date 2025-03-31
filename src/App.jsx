// import { useState } from "react";
// import Header from "./components/Header/Header";
// import "./App.css";
// import Hero from "./components/Hero/Hero";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import { Autoplay, FreeMode } from "swiper/modules";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Header></Header>
//       <Hero></Hero>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={40}
//         speed={6000}
//         autoplay={{
//           delay: 1,
//           disableOnInteraction: true,
//         }}
//         loop={true}
//         freeMode={true}
//         modules={[Autoplay, FreeMode]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="slider1.png" className="slider-el" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="slider2.png" className="slider-el" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="slider3.png" className="slider-el" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="slider4.png" className="slider-el" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="slider5.png" className="slider-el" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="slider6.png" className="slider-el" alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default App;


// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import "./App.css";

// function App() {
//   const cards = [
//     { title: "Показываем продажи по датам" },
//     { title: "Следим за новыми поступлениями и Sold out" },
//     { title: "Анализируем по брендам или продавцам" },
//     { title: "Изучаем динамику продаж", text: "Покажем какие продавцы повышают цены, а у каких брендов активная распродажа." },
//     { title: "Цены" }
//   ];

//   return (
//     <div className="slider-container">
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={20}
//         navigation
//         loop={true}
//         modules={[Navigation]}
//         className="mySwiper"
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide key={index}>
//             <div className="card">
//               <h3>{card.title}</h3>
//               {card.text && <p>{card.text}</p>}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// export default function App() {
//   return (
//     <div style={{ width: "80%", margin: "auto", padding: "50px 0" }}>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={3} 
//         loop={true} 
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         navigation
//         pagination={{ clickable: true }}
//         modules={[Navigation, Pagination, Autoplay]}
//       >
//         {[...Array(9)].map((_, index) => (
//           <SwiperSlide key={index}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 height: "200px",
//                 background: "#2a9d8f",
//                 color: "#fff",
//                 fontSize: "24px",
//                 borderRadius: "10px",
//               }}
//             >
//               Slide {index + 1}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import SwiperComponent from "./SwiperComponent";
// return (
//   <div>
//     <SwiperComponent />
//   </div>
// );

import React from "react";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div>
      <h1>React Image Slider</h1>
      <ImageSlider />
    </div>
  );
}

export default App;
