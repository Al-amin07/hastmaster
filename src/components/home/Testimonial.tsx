'use client'
import * as React from "react"
import "./testimonial.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { CgProfile } from "react-icons/cg";

const reviews = [
  {
    rating: 5,
    name: "Alice Johnson",
    text: "Amazing service! The team was incredibly helpful and the product exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    website: "https://aliceportfolio.com"
  },
  {
    rating: 4,
    name: "Mark Thompson",
    text: "Great experience overall. There’s a little room for improvement, but I’m satisfied.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    website: "https://marktech.dev"
  },
  {
    rating: 5,
    name: "Sara Patel",
    text: "I love how user-friendly everything is. Support was top-notch too!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    website: "https://sarapdesigns.com"
  },
  {
    rating: 3,
    name: "Tom Harris",
    text: "Decent product. Could use more features, but it's heading in the right direction.",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    website: "https://tomh.dev"
  },
  {
    rating: 5,
    name: "Lena Morales",
    text: "Superb! This is now an essential tool in my daily workflow.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    website: "https://lenacodes.io"
  }
];
import { MdOutlineStar } from "react-icons/md";


export default function Testimonial() {

  const [sliderRef] = useKeenSlider<HTMLDivElement>(

    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 20
      }
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div>
      <h1 className=" text-5xl font-medium text-center mb-8">Real Reviews from Real Clients</h1>
      <div ref={sliderRef} className="keen-slider py-12 container mx-auto ">
        {
          reviews?.map((review) => (
            <div key={review.name} className="keen-slider__slide cursor-pointer bg-white shadow-xl rounded-lg p-8 text-center w-full mx-auto">
              {/* Rating Stars */}
              <div className="text-black flex gap-2 items-center justify-center mb-4 text-xl">{
                [...Array(review.rating)].map((_, i) => (
                  <span key={i}><MdOutlineStar size={28} className=" text-black" /></span>
                  // <span key={i}>⭐</span>
                ))
              }</div>

              {/* Text */}
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                {
                  review.text
                }
              </p>

              {/* Image */}
              <div className="flex justify-center mb-2">
                {/* <Image
                  src={p1} // replace with actual image path
                  alt="Lowell Neset"
                  width={54}
                  height={24}
                  className="rounded-full border-2"
                /> */}
                <CgProfile  size={50}/>
              </div>

              {/* Name */}
              <div className="font-semibold text-lg text-black">{review?.name}</div>

              {/* Website */}
              <div className="text-gray-600 text-sm">{review?.website}</div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
