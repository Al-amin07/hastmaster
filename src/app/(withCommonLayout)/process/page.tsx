import img1 from '@/assets/banner/banner1.jpg'
// import img2 from '@/assets/banner/banner2.jpg'
// import img3 from '@/assets/banner/banner4.jpg'
import Image from 'next/image'
import React from 'react'

export default function ProcessPage() {
  return (
    <div>
        <div>

        </div>
        <div>
            <Image src={img1} alt='logo'  width={400} height={500}  />
        </div>
    </div>
  )
}
