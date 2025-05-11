import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/production", label: "PRODUCTION" },
        { href: "/contact", label: "CONTACT" },
        { href: "/blog", label: "BLOG" },
    ]
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="flex flex-col-reverse items-center text-center">
                    <Link className='text-4xl  tracking-wider text-center' href={'/'}>
                        HAGENTEX
                    </Link>

                    <div className="flex flex-wrap justify-center mb-6 -mx-4">
                        {
                            navLinks.map((link, index) => (
                                <Link key={link.href} href={link.href} className=" text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                                    {link.label}  {
                                        index !== navLinks.length - 1 && (<span className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">|</span>)
                                    }
                                </Link>
                            ))
                        }
                    </div>

                </div>


                <div className="flex justify-center">
                    <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>


                </div>
            </div>
        </footer>
    )
}
