import Image from "next/image"
import Spacer from "@/components/Spacer"
import Img1 from "@/assets/categories/promotional/01.webp"
import Img2 from "@/assets/categories/promotional/02.webp"
import Img3 from "@/assets/categories/promotional/03.webp"
import Img4 from "@/assets/categories/promotional/04.webp"
import Img5 from "@/assets/categories/promotional/05.webp"
import Img6 from "@/assets/categories/promotional/06.webp"

import Carousels from "@/components/Carousels"
import ContactUs from "@/components/sections/ContactUs"
import Promotional01 from "@/assets/services/promotional/01.webp"

const carousels = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
  { id: 6, img: Img6 },
]

const options = [
  {
    id: 1,
    title: "Pull-Up Banners",
    description:
      "Portable, durable, and perfect for events or in-store promotions.",
  },
  {
    id: 2,
    title: "Flags",
    description:
      "Bright, eye-catching outdoor signage to attract passing traffic.",
  },
  {
    id: 3,
    title: "Media Walls",
    description:
      "Ideal for exhibitions and corporate presentations, delivering brand visibility.",
  },
  {
    id: 4,
    title: "Branded Marquees",
    description:
      "When you're outdoors, a branded cover for your space is a must.",
  },
]

export default function Promotional() {
  return (
    <div>
      <Carousels
        carousels={carousels}
        title="Promotional Signage"
        description="Draw a crowd for your next event"
      />

      <ContactUs />
      <Spacer className="pb-16">
        <h1 className="text-2xl font-light lg:text-4xl">
          Promotional Signage in Your Area
        </h1>
        <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-2xl">
          Custom promotional signs that speak your brand's language
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="font-bold">
                Promote Your Brand with High-Impact Promotional Signs
              </h4>
              <p className="leading-10">
                We understand the value of creating quality signage to promote
                your brand and drive sales. Whether you're preparing for an
                event, running a special offer, or simply looking to elevate
                your brand awareness, Signarama offers promotional signage
                solutions that stand out.
              </p>
              <p className="leading-10">
                We've worked with well-known national and international brands
                across various industries, delivering signage that's not only
                visually impressive but also strategically effective.
              </p>
              <ul className="ml-5 list-disc space-y-4">
                {options.map((sol) => (
                  <li key={sol.id} className="leading-8">
                    <span className="font-bold text-[#D2302F]">
                      {sol.title}
                    </span>
                    : {sol.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-bold">Benefits of Promotional Signage</p>
              <ul className="ml-5 list-disc space-y-4">
                <li>Increase your brand visibility across various spaces</li>
                <li>
                  Engage your audience and boost foot traffic at events or
                  in-store
                </li>
                <li>
                  Cost-effective signage with reusable options for multiple
                  campaigns and events
                </li>
                <li>
                  Fully customisable solutions to align with your brand and
                  budget
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image src={Promotional01} alt="" />
          </div>
        </div>
      </Spacer>
    </div>
  )
}
