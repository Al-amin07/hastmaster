import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React, { ReactNode } from 'react'

export default function WithCommmonLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className=' min-h-screen mb-24 px-5 md:px-0  mx-auto '>
                {children}
            </div>
            <Footer />
        </div>
    )
}
