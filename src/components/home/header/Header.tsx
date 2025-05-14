"use client"
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import '@/assets/banner/banner2.jpg'

import './header.css'

import {
  Scrollbar,
  Navigation,
  HashNavigation,
  Autoplay,
} from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';


export default function Header() {
  return (
    <div className='md:h-[600px] relative'>
      <Swiper
        grabCursor={true}
        speed={1200}

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

        modules={[Navigation, HashNavigation, Autoplay, Scrollbar]}
        className="mySwiper h-[400px] md:h-[550px]"
      >

        <SwiperSlide>

          <div className="w-full bg-center bg-cover min-h-[600px] bg-[url('@/assets/banner/banner2.jpg')]"

          >
            <div className="flex items-center min-h-[450px]  md:min-h-[600px] justify-between w-full bg-gray-900/20">
              <div className="md:px-24 ">
                <h1 className="text-3xl font-semibold  text-white md:w-[45%]  text-left lg:text-6xl">
                  GLOBAL LEADERS
                  <br /> IN <br />
                  PRIVATE LABEL
                  HEADWEAR SOURCING.
                </h1>

                <div className='flex justify-between items-center max-w-md ml-auto border p-4 rounded-md cursor-pointer hover:text-white hover:bg-black hover:border-black transition-colors duration-500'>
                  <h1 className='text-xl uppercase font-medium'>Consalt </h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Product</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Deliver</h1>
                </div>
              </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="w-full bg-center bg-cover min-h-[600px] bg-[url('@/assets/banner/banner5.jpg')]"

          >
            <div className="flex items-center min-h-[450px]  md:min-h-[600px] justify-between w-full  bg-gray-900/20">
              <div className="md:px-16 ">
                <h1 className="text-3xl uppercase font-semibold  text-white md:w-[75%]  text-left lg:text-6xl">
                  Headwear Sourcing specialist
                  <br />And <br />
                  buying agent for importers
                </h1>

                <div className='flex justify-between items-center max-w-md ml-auto border p-4 rounded-md cursor-pointer hover:text-white hover:bg-black hover:border-black transition-colors duration-500'>
                  <h1 className='text-xl uppercase font-medium'>Consalt </h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Product</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Deliver</h1>
                </div>
              </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="w-full bg-center bg-cover min-h-[600px] bg-[url('@/assets/banner/banner1.jpg')]"

          >
            <div className="flex items-center min-h-[450px]  md:min-h-[600px] justify-between w-full bg-gray-900/20">
              <div className="md:px-24 ">
                <h1 className="text-3xl uppercase font-semibold  text-white md:w-[60%] 
                 text-left lg:text-6xl">
                  We design, sample and manufacture
                  <br />with <br />
                  our verified factory partners
                </h1>

                <div className='flex justify-between items-center max-w-md ml-auto border p-4 rounded-md cursor-pointer hover:text-white hover:bg-black hover:border-black transition-colors duration-500'>
                  <h1 className='text-xl uppercase font-medium'>Consalt </h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Product</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-xl uppercase font-medium'>Deliver</h1>
                </div>
              </div>
            </div>
          </div>

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
