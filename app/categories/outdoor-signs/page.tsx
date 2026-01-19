import Spacer from "@/components/Spacer"
import Carousels from "@/components/Carousels"
import Img1 from "@/assets/categories/outdoor/01.webp"
import Img2 from "@/assets/categories/outdoor/02.webp"
import Img3 from "@/assets/categories/outdoor/03.webp"
import Img4 from "@/assets/categories/outdoor/04.webp"
import Img5 from "@/assets/categories/outdoor/05.webp"
import Img6 from "@/assets/categories/outdoor/06.webp"
import ContactUs from "@/components/sections/ContactUs"

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
    title: "Illuminated Signs",
    description:
      "Ensure your brand shines both day and night with energy-efficient LED lighting options.",
  },
  {
    id: 2,
    title: "Dimensional Lettering",
    description:
      "Add depth and sophistication to your building facade with 3D lettering crafted from high quality materials.",
  },
  {
    id: 3,
    title: "Fascia and Awning Signs",
    description:
      "Maximise street visibility and reinforce brand identity with strategically placed signage.",
  },
  {
    id: 4,
    title: "Wall Murals and Graphics",
    description:
      "Transform blank walls into engaging visual displays that tell your brand story.",
  },
  {
    id: 5,
    title: "Window Graphics",
    description:
      "Utilise window space for promotional messaging or decorative elements that complement your building signage.",
  },
]

const benefits = [
  {
    id: 1,
    title: "Enhanced Visibility",
    description:
      "Attract attention and increase foot traffic with prominent and well-designed signage.",
  },
  {
    id: 2,
    title: "Brand Consistency",
    description:
      "Maintain a cohesive brand image across all physical locations.",
  },
  {
    id: 3,
    title: "Professional Appearance",
    description: "Convey credibility and establish a strong market presence.",
  },
  {
    id: 4,
    title: "Customisation",
    description:
      "Tailor signage solutions to align with your specific business needs and aesthetic preferences.",
  },
  {
    id: 5,
    title: "Durability",
    description:
      "Invest in signage that withstands the elements and remains vibrant over time.",
  },
]

export default function OutdoorSign() {
  return (
    <div>
      <Carousels
        carousels={carousels}
        title="Outdoor Signs"
        description="How do you get noticed rain, hail or shine?"
      />
      <ContactUs />
      <Spacer className="pb-16">
        <h1 className="text-2xl font-light lg:text-4xl">
          Outdoor Signs in Your Area
        </h1>
        <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-2xl">
          Outdoor signage that stands up all year round.
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="leading-10">
              Outdoor signs help your business claim space in the streetscape,
              on the roadside, or in the skyline. We specialise in designing and
              installing outdoor signs that withstand the elements and maintain
              their visual appeal throughout the year.
            </p>

            <h4 className="font-bold">
              Comprehensive Outdoor Signage Solutions Include
            </h4>

            <ul className="ml-5 list-disc space-y-4">
              {solutions.map((sol) => (
                <li key={sol.id} className="leading-8">
                  <span className="font-bold text-[#D2302F]">{sol.title}</span>:{" "}
                  {sol.description}
                </li>
              ))}
            </ul>
            <h4 className="font-bold">Benefits of Building Signage</h4>
            <ul className="ml-5 list-disc space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="leading-8">
                  <span className="font-bold">{benefit.title}</span>:{" "}
                  {benefit.description}
                </li>
              ))}
            </ul>
            <p className="leading-10">
              Our Signarama expert designers are ready to support you to get
              your business seen. Contact us for a free quote on your outdoor
              signage solutions.
            </p>
          </div>
        </div>
      </Spacer>
    </div>
  )
}
