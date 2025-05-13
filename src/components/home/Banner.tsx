
import React from 'react'
import { GoDotFill } from "react-icons/go";

export default function Banner({text}: {text: string}) {
    return (
       

    <div className="w-full bg-center bg-cover min-h-[600px] bg-[url('@/assets/banner/banner2.jpg')]"

    >
        <div className="flex items-center min-h-[450px]  md:min-h-[600px] justify-center w-full bg-gray-900/20">
            <div className="md:px-24 ">
                <h1 className="text-3xl font-semibold  text-white md:w-[45%]  text-left lg:text-6xl">
                    {text}</h1>

               <div className='flex justify-between items-center max-w-md ml-auto border p-4 rounded-md cursor-pointer hover:text-white hover:bg-black hover:border-black transition-colors duration-500'>
                <h1 className='text-xl uppercase font-medium'>Consalt </h1> <span><GoDotFill size={20} /></span>
                <h1 className='text-xl uppercase font-medium'>Design</h1> <span><GoDotFill size={20} /></span>
                <h1 className='text-xl uppercase font-medium'>Product</h1> <span><GoDotFill size={20} /></span>
                <h1 className='text-xl uppercase font-medium'>Deliver</h1> 
               </div>
            </div>
        </div>
    </div>

    )
}
