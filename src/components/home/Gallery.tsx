import React from 'react'

export default function Gallery() {
  return (
    <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
      Style Inspiration from Our Hats
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    
      <div className="overflow-hidden rounded-xl">
        <img src="/images/insta1.jpg" alt="Hat Style 1" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="overflow-hidden rounded-xl">
        <img src="/images/insta2.jpg" alt="Hat Style 2" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="overflow-hidden rounded-xl">
        <img src="/images/insta3.jpg" alt="Hat Style 3" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="overflow-hidden rounded-xl">
        <img src="/images/insta4.jpg" alt="Hat Style 4" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
      </div>

  
    </div>

    
    <div className="text-center mt-10">
      <a href="https://www.instagram.com/yourbrand" target="_blank" className="inline-block text-blue-600 hover:text-blue-800 font-medium text-lg">
        Follow us on Instagram →
      </a>
    </div>
  </div>
</section>

  )
}
