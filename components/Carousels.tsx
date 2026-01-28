"use client"
import Spacer from "./Spacer"
import Image, { StaticImageData } from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import "@splidejs/react-splide/css"

type CarouselItem = {
  id: number
  img: StaticImageData
}

type HeroProps = {
  title: string
  description?: string
  carousels: CarouselItem[]
}

export default function Carousels({
  carousels,
  title,
  description,
}: HeroProps) {
  return (
    <Spacer>
      <div className="relative">
        <div className="absolute bottom-0 left-0 z-10 w-full border-l-6 border-[#af1e2d] bg-[#ffffffaa] px-8 pt-2 pb-4 md:absolute lg:mb-8 lg:ml-8 lg:w-1/2">
          <h1 className="text-lg font-bold text-[#AF1E2D] lg:text-2xl">
            {title}
          </h1>
          <p className="text-[#AF1E2D]">{description}</p>
        </div>
        <Splide
          aria-label={`${title} Images`}
          options={{
            type: "fade",
            perPage: 1,
            arrows: false,
            interval: 2500,
            pagination: false,
            speed: 1000,
            drag: false,
            autoplay: true,
            rewind: true,
          }}
        >
          {carousels.map((car) => (
            <SplideSlide key={car.id}>
              <div className="relative h-auto">
                <Image
                  src={car.img}
                  alt="carousel-img"
                  loading="eager"
                  className="w-full"
                />
                <div className="top-0 left-0 hidden h-full w-full bg-black/30 md:absolute" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </Spacer>
  )
}
