"use client"
import { clients } from "@/lib/clients"
import Spacer from "../Spacer"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Image from "next/image"

export default function PastClients() {
  return (
    <section className="pt-16 pb-24">
      <Spacer>
        <div className="border-l-4 border-[#AF1E2D] pl-3">
          <h2 className="mb-6 text-xl font-bold text-[#AF1E2D] md:text-2xl">
            Clients we have worked with
          </h2>
        </div>

        <Splide
          aria-label="Client Logos"
          options={{
            type: "loop",
            autoplay: true,
            interval: 3000,
            pauseOnHover: false,
            arrows: false,
            pagination: false,
            speed: 800,
            perPage: 6,
            perMove: 1,
            drag: false,
            swipe: true,
            breakpoints: {
              1280: { perPage: 5 },
              1024: { perPage: 4 },
              768: { perPage: 3 },
              640: { perPage: 2 },
            },
          }}
        >
          {clients.map((client) => (
            <SplideSlide key={client.id}>
              <div className="mx-auto flex h-20 w-30 items-center justify-center bg-white sm:h-25 sm:w-50">
                <Image
                  loading="eager" 
                  src={client.img}
                  alt={`Client ${client.id}`}
                  className="max-h-15 w-auto object-contain sm:max-h-20"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </Spacer>
    </section>
  )
}
