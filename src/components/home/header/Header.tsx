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
    <div className='md:h-screen relative'>
      <Swiper
        grabCursor={true}
        speed={1200}

        scrollbar={{
          el: '.custom-swiper-scrollbar',
          draggable: true,
        }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        hashNavigation={{ watchState: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}

        modules={[Navigation, HashNavigation, Autoplay, Scrollbar]}
        className="mySwiper h-[400px] md:h-[700px]"
      >

        <SwiperSlide>

          <div className="w-full bg-center bg-cover  min-h-screen bg-[url('@/assets/banner/b5.jpg')]"

          >
            <div className="flex items-center min-h-[450px]  md:min-h-[700px] justify-between w-full bg-gray-900/30">
              <div className="md:px-24  w-full 
              ">
                <h1 className="text-2xl  font-semibold  text-white   text-right  lg:text-[40px]">
                  GLOBAL LEADERS
                  IN 
                  PRIVATE LABEL <br />
                  HEADWEAR SOURCING
                </h1>

                <div className='flex justify-center md:justify-between items-center  lg:max-w-md ml-auto mt-6 border-0 md:border p-4 rounded-md cursor-pointer text-white hover:bg-black  hover:border-black transition-colors duration-500'>
                  <h1 className='text-sm md:text-xl uppercase font-medium'>Consalt </h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-sm md:text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-sm md:text-xl uppercase font-medium'>Product</h1> <span><GoDotFill size={20} /></span>
                  <h1 className='text-sm md:text-xl uppercase font-medium'>Deliver</h1>
                </div>
              </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="w-full bg-center bg-cover  min-h-screen bg-[url('@/assets/banner/banner5.jpg')]"

          >
            <div className="flex items-center min-h-[450px]  md:min-h-[700px] justify-between w-full bg-gray-900/30">
              <div className="md:px-24  w-full 
              ">
                <h1 className="text-2xl uppercase font-semibold  text-white   text-right  lg:text-[40px]">
               Headwear manufacturing specialist <br />
                   buying agent for importers
                </h1>

                <div className='flex justify-between items-center max-w-md ml-auto mt-6 border p-4 rounded-md cursor-pointer text-white hover:bg-black hover:border-black transition-colors duration-500'>
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

          <div className="w-full bg-center bg-cover  min-h-screen bg-[url('@/assets/banner/b1.jpg')]"

          >
            <div className="flex items-center min-h-[450px]  md:min-h-[700px] justify-between w-full bg-gray-900/30">
              <div className="md:px-24  w-full 
              ">
                <h1 className="text-3xl uppercase font-semibold  text-white   text-right  lg:text-[40px]">
                     We design, sample and manufacture <br />
                  with verified factory partners
                </h1>

                <div className='flex justify-between items-center max-w-md ml-auto mt-6 border p-4 rounded-md cursor-pointer text-white hover:bg-black hover:border-black transition-colors duration-500'>
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
      <div className="absolute left-1/2 -translate-x-1/2  flex items-center -bottom-[102px] mt-4  gap-3">
        <button className="custom-prev cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
          <FaChevronLeft size={18} />
        </button>
        <button className="custom-next cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
          <FaChevronRight size={18} />
        </button>
      </div>
      



    </div>
  );
}
