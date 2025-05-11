import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className="relative w-full h-[500px] bg-[#8b7260] overflow-hidden">
            {/* Left Model Image */}
            <div className="absolute left-0 bottom-0 h-full w-1/3 md:w-auto">
                <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Model with beige beanie"
                    width={400}
                    height={500}
                    className="object-cover h-full"
                    priority
                />
            </div>

            {/* Right Model Image */}
            <div className="absolute right-0 bottom-0 h-full w-1/3 md:w-auto">
                <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Model with gray beanie and scarf"
                    width={400}
                    height={500}
                    className="object-cover h-full"
                    priority
                />
            </div>

            {/* Center Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-10">
                <h1 className="text-3xl md:text-5xl font-light text-center mb-6">Premium Accessory Manufacturer</h1>
                <p className="text-center max-w-xl mb-8">
                    Taking pride in excellent customer service, we provide the highest quality craftsmanship with all of our
                    products.
                </p>
                <button className="border border-white hover:bg-white hover:text-[#8b7260] transition-colors duration-300 px-8 py-3">
                    Get Quote
                </button>
            </div>


        </div>
    )
}
