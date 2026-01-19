import Spacer from "@/components/Spacer"
import Img1 from "@/assets/categories/indoor/01.webp"
import Img2 from "@/assets/categories/indoor/02.webp"
import Img3 from "@/assets/categories/indoor/03.webp"
import Img4 from "@/assets/categories/indoor/04.webp"
import Img5 from "@/assets/categories/indoor/05.webp"
import Img6 from "@/assets/categories/indoor/06.webp"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"

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
    title: "Reception and Lobby Signs",
    description:
      "Create a welcoming first impression with professionally designed signage that reflects your brand identity.",
  },
  {
    id: 2,
    title: "Wayfinding and Directory Signs",
    description:
      "Assist visitors and staff in navigating your premises efficiently, enhancing their overall experience.",
  },
  {
    id: 3,
    title: "Wall Graphics and Murals",
    description:
      "Transform blank walls into engaging visual displays that tell your brand story.",
  },
  {
    id: 4,
    title: "Window Graphics and Frosting",
    description:
      "Add privacy and style to your interiors while promoting your brand.",
  },
  {
    id: 5,
    title: "Safety and Compliance Signs",
    description:
      "Ensure your workplace meets all regulatory requirements with clear and effective signage.",
  },
]

const benefits = [
  {
    id: 1,
    title: "Enhanced Brand Perception",
    description:
      "Reinforce your brand identity and values throughout your interior spaces.",
  },
  {
    id: 2,
    title: "Improved Customer Experience",
    description:
      "Guide and inform visitors, making their interaction with your business seamless and enjoyable.",
  },
  {
    id: 3,
    title: "Increased Employee Engagement",
    description:
      "Create an inspiring work environment that boosts morale and productivity.",
  },
  {
    id: 4,
    title: "Compliance and Safety",
    description:
      "Meet legal requirements and promote a safe workplace with appropriate signage.",
  },
]

export default function IndoorSign() {
  return (
    <div>
      <Carousels
        carousels={carousels}
        title="Indoor Signs"
        description="What does your space say about your business?"
      />
      <ContactUs />
      <Spacer className="pb-16">
        <h1 className="text-2xl font-light lg:text-4xl">
          Indoor Signs in Your Area
        </h1>
        <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-2xl">
          Enhance your interior space with custom indoor signage
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="leading-10">
              Indoor signs can make a significant difference to the look and
              feel of your space and influence what people think of your
              business. From giving a simple office a feeling of spaciousness to
              creating a sense of service throughout a large site, explore how
              indoor signs can assist you in meeting your goals.
            </p>

            <h4 className="font-bold">Indoor Signage Solutions</h4>

            <ul className="ml-5 list-disc space-y-4">
              {solutions.map((sol) => (
                <li key={sol.id} className="leading-8">
                  <span className="font-bold text-[#D2302F]">{sol.title}</span>:{" "}
                  {sol.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="leading-10 font-bold">Benefits of Indoor Signage</h4>
            <ul className="ml-5 list-disc space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="leading-8">
                  <span className="font-bold">{benefit.title}</span>:{" "}
                  {benefit.description}
                </li>
              ))}
            </ul>
            <p className="leading-10">
              Help your customers feel confident in your products and services
              with indoor signs that elevate your environment from ordinary to
              exceptional.
            </p>
          </div>
        </div>
      </Spacer>
    </div>
  )
}
