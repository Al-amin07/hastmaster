"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; // ✅ Needed for fade effect

// import './styles.css';
import './header.css'
// import required modules
import { Scrollbar,
  Navigation,
  HashNavigation,
  Autoplay,
   } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Banner from '../Banner';

export default function Header() {
  return (
    <div className='md:h-[600px] relative'>
      <Swiper
      grabCursor={true}
        speed={1200} // duration in ms
    
       scrollbar={{
  el: '.custom-swiper-scrollbar',
  draggable: true,
}}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          hashNavigation={{ watchState: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
           
         modules={[Navigation, HashNavigation, Autoplay, Scrollbar ]}
        className="mySwiper h-[400px] md:h-[550px]"
      >
        <SwiperSlide>
          <Banner text={`GLOBAL LEADERS
      \n IN \n
 PRIVATE LABEL
HEADWEAR SOURCING.`} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner text={`GLOBAL LEADERS
<br /> IN <br className='hidden md:inline-block' /> PRIVATE LABEL
HEADWEAR SOURCING.`} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner text={`GLOBAL LEADERS
<br /> IN <br className='hidden md:inline-block' /> PRIVATE LABEL
HEADWEAR SOURCING.`}  />
        </SwiperSlide>
      </Swiper>
<div className="h-16 flex  items-center  rounded-b-2xl  bg-[#3d3d3d] opacity-60 relative">
  {/* Swiper will inject the scrollbar drag element here */}
  <div className="custom-swiper-scrollbar w-[40%] h-1  rounded relative overflow-hidden"></div>
</div>
        <div className="absolute left-1/2 -translate-x-1/2  flex items-center bottom-0 mt-4  gap-3">
              <button className="custom-prev cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                         <FaChevronLeft size={18} />
                       </button>
                       <button className="custom-next cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                         <FaChevronRight size={18} />
                       </button>
              </div>
           {/* <div className="relative rounded-full w-[200px] p-8 text-center font-bold text-gray-700 dotted-border-moving">
  Animated Border
</div> */}



    </div>
  );
}
