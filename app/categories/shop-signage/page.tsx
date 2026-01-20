import Image from "next/image"
import { Metadata } from "next"
import Spacer from "@/components/Spacer"
import Img1 from "@/assets/categories/shop/01.webp"
import Img2 from "@/assets/categories/shop/02.webp"
import Img3 from "@/assets/categories/shop/03.webp"
import Img4 from "@/assets/categories/shop/04.webp"
import Img5 from "@/assets/categories/shop/05.webp"
import Img6 from "@/assets/categories/shop/06.webp"

import Carousels from "@/components/Carousels"
import ContactUs from "@/components/sections/ContactUs"
import ShopImg from "@/assets/services/illuminated/01.webp"

const carousels = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
  { id: 6, img: Img6 },
]

const solutions = [
  {
    id: 1,
    title: "Illuminated Shop Signs:",
    description: "Ensure high visibility day and night.",
  },
  {
    id: 2,
    title: "Wall Graphics:",
    description: "Make use of your shopfront for promotional messaging.",
  },
  {
    id: 3,
    title: "Awning Signs:",
    description: "Be seen and create a lasting first impression",
  },
  {
    id: 4,
    title: "A-Frame Signs:",
    description: "Attract foot traffic with strategic pavement signage.",
  },
]

const benefits = [
  "Enhance storefront appeal",
  "Improve brand recall",
  "Drive foot traffic into your store",
]

export const metadata: Metadata = {
  title: "Shop Signage in Australia | Signarama",
  description:
    "Shop signage is the welcome your customers need. Whether you're a new business or an established one, striking shop signs can help you attract customers.",
}

export default function ShopSign() {
  return (
    <div>
      <Carousels
        carousels={carousels}
        title="Shop Signs"
        description="When was the last time you updated your shop front?"
      />
      <ContactUs />

      <Spacer className="pb-16">
        <h1 className="text-2xl font-light lg:text-4xl">
          Shop Signage in Your Area
        </h1>
        <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-2xl">
          Shop signage is the welcome your customers need
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="leading-10">
              Whether you're a new business or an established one, striking shop
              signs can help you attract customers.
            </p>
            <p className="leading-10">
              Make the most of your building's features to create impactful
              branding. Large windows, pavements, high ceilings and more can all
              create opportunities for your shop signage to shine. And with free
              quotes available, our team can assist you in seeing the potential
              for your space.
            </p>
            <h4 className="font-bold">Effective Shop Signage Solutions</h4>
            <ul className="ml-5 list-disc space-y-4">
              {solutions.map((sol) => (
                <li key={sol.id} className="leading-8">
                  <span className="font-bold text-[#D2302F]">{sol.title}</span>:{" "}
                  {sol.description}
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <h4 className="leading-10 font-bold">
                Why Invest in Shop Signs?
              </h4>

              <ul className="ml-5 list-disc space-y-4">
                {benefits.map((sol, idx) => (
                  <li key={idx} className="leading-8">
                    {sol}
                  </li>
                ))}
              </ul>

              <p className="font-light text-[#D2302F]">
                Stand Out & Increase Your Sales With Shop Signs
              </p>
            </div>
          </div>
          <div>
            <Image src={ShopImg} loading="eager" alt="Illuminated Shop sign" />
          </div>
        </div>
      </Spacer>
    </div>
  )
}
