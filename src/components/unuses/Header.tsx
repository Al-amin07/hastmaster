"use client"
import * as React from "react"
import "./header.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Banner from "../home/Banner"
// import Banner from "../Banner"
export default function Header() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
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
    <div ref={sliderRef} className="keen-slider h-[600px] ">
      <div className="keen-slider__slide number-slide1">
        <Banner />
      </div>
      <div className="keen-slider__slide number-slide1">
        <Banner />
      </div>
      <div className="keen-slider__slide number-slide1">
        <Banner />
      </div>
      <div className="keen-slider__slide number-slide1">
        <Banner />
      </div>
      <div className="keen-slider__slide number-slide1">
        <Banner />
      </div>
    </div>
  )
}
