import React from 'react'

export default function AboutSection() {
    return (
        <div className='bg-[#F4F3F3] text-black py-36 w-full flex justify-center '>
            <div className='max-w-xl'>
                <h1 className='text-5xl font-medium text-center mb-8'>About Hagentex</h1>
                <p className=''>At Hagentex, we specialize in providing premium accessory products to fashion brands around the world. Our focus is on building strong relationships with our customers, and delivering the quality and craftsmanship that they demand.</p>
                <p className='my-6'>Contact us today to learn more about our products and services, and how we can help take your brand to the next level.</p>
                <div className='flex justify-center'>
                    <button className='py-1.5 border  hover:bg-white hover:text-black transition-all duration-300 cursor-pointer px-5 bg-[#826757] text-white'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}
