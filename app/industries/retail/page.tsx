import Spacer from "@/components/Spacer"
import Img1 from "@/assets/industry/retail02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Retail01 from "@/assets/industry/retail/01.webp"
import Retail02 from "@/assets/industry/retail/02.jpg"
import Carousels from "@/components/Carousels"
import Image from "next/image"

const uses = [
  "inform people who you are, what you do and when you do it",
  "entice people to enter the store",
  "reinforce the perceived value of your products",
  "use stylistic components that support the attitude and feel of the store",
  "are easily seen and understood by both pedestrians and drivers",
  "change regularly to keep people engaged with your business",
]

export default function Retail() {
  return (
    <div>
      <Carousels
        title="Retail Signs"
        carousels={[{ id: 1, img: Img1 }]}
        description="Retail signs that make sales easy"
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Retail
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            How do you entice people from the street to the sales counter?
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Retail signs that make sales easy
          </p>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="leading-7">
                As all retailers know, you pay high rents for a retail space
                with good foot-traffic. But foot traffic won't boost your sales
                if it stays on the footpath. To make the most of your site and
                turn location into revenue, you need a shop front that informs
                and entices within seconds.
              </p>

              <p className="leading-7">
                Refreshing your retail signage is an excellent way to renew
                interest in your business. We will guide you through our
                extensive range, including full colour digitally printed
                graphics, premium vinyl lettering and 3D signage. Whether you
                are a local independent trader or part of a national retail
                group, we deliver retail signs that entice, inform and bring
                people through your door.
              </p>

              <h4 className="font-bold">
                You can use signs and promotional materials to:
              </h4>

              <ul className="ml-5 list-disc space-y-4">
                {uses.map((sol, idx) => (
                  <li key={idx} className="leading-8">{sol}</li>
                ))}
              </ul>
            </div>
            <div>
              <Image src={Retail01} alt="Retail shop" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Image src={Retail02} alt="Retail shop" />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg text-[#D2302F] lg:text-2xl">
                When you work with Signarama you can expect:
              </h2>
              <ul className="ml-5 list-disc space-y-4">
                <li className="leading-8">
                  help customers find your location easily
                </li>
                <li className="leading-8">
                  announce the introduction of new menu items or offers with
                  posters, table talkers or brochures
                </li>
                <li className="leading-8">
                  support service staff by suggesting up-sizing and up-selling
                  of popular items emphasise unique features of your food and
                  beverage selections, such as where they are sourced from
                </li>
                <li className="leading-8">
                  promote time limited offers, such as set-menu events or early
                  bird discounts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Spacer>
    </div>
  )
}
