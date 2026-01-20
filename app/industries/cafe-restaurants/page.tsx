import Image from "next/image"
import Spacer from "@/components/Spacer"
import Carousels from "@/components/Carousels"
import ContactUs from "@/components/sections/ContactUs"
import Img1 from "@/assets/industry/cafe02.webp"
import Cafe01 from "@/assets/services/shops/01.webp"
import Cafe02 from "@/assets/services/illuminated/01.webp"

const uses = [
  {
    id: 1,
    title: "help customers find your location easily",
  },
  {
    id: 2,
    title:
      "brand the exterior and interior of your site, making it unmistakable and memorable",
  },
  {
    id: 3,
    title:
      "announce the introduction of new menu items or offers with posters, table talkers or brochures",
  },
  {
    id: 4,
    title:
      "support service staff by suggesting up-sizing and up-selling of popular items",
  },
  {
    id: 5,
    title:
      "emphasise unique features of your food and beverage selections, such as where they are sourced from",
  },
  {
    id: 6,
    title:
      "promote time limited offers, such as set-menu events or early bird discounts",
  },
  {
    id: 7,
    title:
      "create and renew interest throughout the year with seasonal wallpaper graphics",
  },
]

export default function CafeRestaurants() {
  return (
    <div>
      <Carousels
        carousels={[{ id: 1, img: Img1 }]}
        title="A fresh look at your restaurant or cafe"
        description="Welcome your diners with striking menu boards, awesome awnings and amazing windows"
      />

      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Cafes & Restaurants
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            Cafe & Restaurant Signage
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Welcome your diners with striking menu boards, awesome awnings and
            amazing windows
          </p>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="leading-10">
                Well before your potential customers see your food, they see
                your signs, on the street and in your service areas. When they
                stand outside your cafe or restaurant, what do people see?
                Attractive and coordinated signage gives potential customers a
                sense of what you offer and when placed in a high visibility
                position, can boost your daily covers and takings.
              </p>

              <h4 className="font-bold">
                You can use signs and promotional materials to:
              </h4>

              <ul className="ml-5 list-disc space-y-4">
                {uses.map((sol) => (
                  <li key={sol.id} className="leading-8">
                    {sol.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image src={Cafe01} alt="Cafe shop" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Invest in quality signs for a competitive edge
              </h3>
              <p className="leading-8">
                Many cafe and restaurant owners make the mistake of treating
                signage as a 'set and forget' part of their marketing strategy.
                But by improving permanent signs and regularly mixing in
                temporary signs you can achieve an attractive and consistent
                look, as well as creating fresh interest from new and existing
                customers.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Illuminated signage solutions
              </h3>
              <p className="leading-8">
                For many cafes and restaurants being seen at night is
                fundamental to trade. Latest LED technology allows for low cost
                illumination of external building signage as well as internal
                menu boards and slimline poster signs. Talk to our sign experts
                about brightening up your business to stand out from the crowd.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
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
            <div>
              <Image src={Cafe02} alt="Cafe shop" />
            </div>
          </div>
        </div>
      </Spacer>
    </div>
  )
}
