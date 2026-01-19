"use client"
import Link  from "next/link"
import Image from "next/image"
import Spacer from "../Spacer"
import { services } from "@/lib/services"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

export default function Services() {
  return (
    <section className="services py-12" id="services">
      <Spacer>
        <div className="border-l-4 border-[#AF1E2D] pl-3">
          <h2 className="text-xl font-bold text-[#AF1E2D] md:text-3xl">
            Our Signature Services
          </h2>
          <p className="services-subtitle">
            Expert signage solutions tailored to elevate your brand presence
            across all industries
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer rounded-md bg-[#F8FAFC] shadow-[0_0_5px_0_rgba(0,0,0,0.1)] transition-all hover:-translate-y-2 hover:shadow-[0_0_10px_0_rgba(0,0,0,0.15)]"
            >
              <Link href={service.link} className="block">
                <div className="overflow-hidden rounded-t-md">
                  <Splide
                    aria-label="My Favorite Images"
                    options={{
                      type: "loop",
                      autoplay: true,
                      interval: 2000,
                      pauseOnHover: false,
                      pagination: false,
                      speed: 800,
                      arrows: false,
                      perPage: 1,
                      drag: false,
                    }}
                  >
                    {service.icons.map((icon, index) => (
                      <SplideSlide key={index}>
                        <Image
                          src={icon}
                          alt={service.title}
                          loading="eager" 
                          className="h-52 w-full object-cover"
                        />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
                <div className="space-y-2 px-5 pt-4 pb-8">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm leading-5">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Spacer>
    </section>
  )
}
