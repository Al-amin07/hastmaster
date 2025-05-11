import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React, { ReactNode } from 'react'

export default function WithCommmonLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className='mb-28'>
                {children}
            </div>
            <Footer />
        </div>
    )
}
