import Spacer from "@/components/Spacer"
import Img1 from "@/assets/categories/vehicle/01.webp"
import Img2 from "@/assets/categories/vehicle/02.webp"
import Img3 from "@/assets/categories/vehicle/03.webp"
import Img4 from "@/assets/categories/vehicle/04.webp"
import Img5 from "@/assets/categories/vehicle/05.webp"
import Img6 from "@/assets/categories/vehicle/06.webp"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"
import ShopImg from "@/assets/services/illuminated/02.webp"
import Image from "next/image"

const carousels = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
  { id: 6, img: Img6 },
]

const benefits = [
  "Continuous brand exposure on the move",
  "Durable and weather-resistant materials",
  "Cost-effective advertising with long-term benefits",
]

export default function Vehicle() {
  return (
    <div>
      <Carousels
        carousels={carousels}
        title="Vehicle Signs"
        description="We're the automotive signage experts"
      />
      <ContactUs />

      <Spacer className="pb-16">
        <h1 className="text-2xl font-light lg:text-4xl">
          Vehicle Signs in Your Area
        </h1>
        <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-2xl">
          Turn your vehicles into mobile billboards with lasting impact
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="leading-10">
              From a single vehicle to an entire fleet, vehicle signs are an
              extremely cost-effective way to be seen. With a one-off investment
              lasting up to five years, it makes sense to drive your business,
              and turn your vehicle into a mobile billboard, spreading your
              message 24/7.
            </p>

            <p className="leading-10">
              Discover what we can do from cars and utes, to trucks, buses and
              boats. And with over 100 Australian stores, we can create signs
              for your vehicles wherever they are.
            </p>

            <div className="space-y-4">
              <h4 className="leading-10 font-bold">
                Benefits of Vehicle Signage
              </h4>

              <ul className="ml-5 list-disc space-y-4">
                {benefits.map((sol, idx) => (
                  <li key={idx} className="leading-8">
                    {sol}
                  </li>
                ))}
              </ul>

              <p className="font-light text-[#D2302F]">
                Drive your business with vehicle signage today.
              </p>
            </div>
          </div>
          <div>
            <Image src={ShopImg} alt="Illuminated Shop sign" />
          </div>
        </div>
      </Spacer>
    </div>
  )
}
