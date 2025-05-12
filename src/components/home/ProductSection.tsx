'use client'
import React from 'react'
import img1 from '@/assets/cap/c1.jpg'
import img2 from '@/assets/cap/c2.avif'
import img3 from '@/assets/cap/c3.avif'
import img4 from '@/assets/cap/c4.avif'
import Image from 'next/image'
import {motion } from 'motion/react'
const products = [
  {
    id: 1,
    name: "Classic Snapback",
    image: img1,
    description: "Timeless style, perfect fit.",
  },
  {
    id: 2,
    name: "Streetwear Cap",
    image: img2,
    description: "Bold, urban design.",
  },
  {
    id: 3,
    name: "Bucket Hat",
    image: img3,
    description: "Casual and trendy.",
  },
  {
    id: 4,
    name: "Vintage Trucker",
    image: img4,
    description: "Retro vibes with modern comfort.",
  },
  {
    id: 5,
    name: "Sporty Cap",
    image: img1,
    description: "Built for performance.",
  },
  {
    id: 6,
    name: "Minimalist Beanie",
    image: img2,
    description: "Warmth meets simplicity.",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
      Our Hat & Cap Collection
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
   {
    products?.map((el, ind) => <motion.div initial={{opacity: 0, }} whileInView={{opacity: 1}} transition={{duration: 0.7, delay: ind * 0.2}} key={el.id} className="shadow cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
        <Image src={el.image} alt={el.name} height={200} width={300} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">classNameic Snapback</h3>
          <p className="text-gray-500 mt-1">Timeless style, perfect fit.</p>
        </div>
      </motion.div> )
   }
      
    
    </div>
  </div>
</section>

  )
}
