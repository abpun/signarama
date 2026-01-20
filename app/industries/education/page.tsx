import Image from "next/image"
import Spacer from "@/components/Spacer"
import Carousels from "@/components/Carousels"
import Img1 from "@/assets/industry/education02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Education01 from "@/assets/industry/medical03.webp"

const uses = [
  {
    id: 1,
    title: "Welcome Signs:",
    description:
      "Create a positive first impression with vibrant, customised signs that reflect your school's identity.",
  },
  {
    id: 2,
    title: "Directional Signs:",
    description:
      "Ensure smooth navigation with clear, visually appealing wayfinding signage for classrooms, offices, and key facilities.",
  },
  {
    id: 3,
    title: "Digital LED Signs:",
    description:
      "Communicate real-time updates, inspirational messages, or event notices with dynamic, easy-to-use LED boards.",
  },
  {
    id: 4,
    title: "Room and Door Signs:",
    description:
      "Label classrooms, offices, and other spaces with professional, durable signs that enhance accessibility and organisation.",
  },
  {
    id: 5,
    title: "Wall Decals and Wallpaper Designs:",
    description:
      "Transform blank walls into engaging spaces with school values, mascots, or educational visuals.",
  },
  {
    id: 6,
    title: "Enhance Engagement and School Spirit",
    description:
      "From changeable signs for event updates to inspirational banners in hallways, we provide solutions that promote learning and build school pride. Use motivational quotes, student achievements, or seasonal themes to create an environment that energises and unites your community.",
  },
  {
    id: 7,
    title: "Safety and Navigation Made Easy",
    description:
      "Safety is a priority in any educational setting. Our locator signs, school safety signs, and map signs ensure everyone can move confidently around the campus. Additionally, all our products comply with Australian safety standards for your peace of mind.",
  },
]

const popular = [
  "Front of school signs",
  "PBL (Positive Behaviour for Learning) signs",
  "Scoreboards",
  "School emblem and crest signs",
  "Door signs",
  "Foyer signs",
  "Lectern signs",
]

export default function Education() {
  return (
    <div>
      <Carousels
        title="Education"
        carousels={[{ id: 1, img: Img1 }]}
        description="Clear Communication for a Thriving Learning Environment"
      />

      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Education
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            School signs and University signage
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Inspire learning, ensure safety, and build community with durable,
            tailored school signage solutions.
          </p>

          <div className="mt-8 grid grid-cols-1">
            <div className="space-y-5">
              <p className="leading-7">
                Educational institutions are bustling hubs of activity, where
                effective communication and visual appeal are essential for
                fostering engagement, safety, and a sense of community.
              </p>
              <p className="leading-7">
                The right signage can set the tone for your campus, whether it's
                a warm welcome at the front gate or clear directions that help
                students, staff, and visitors navigate with ease. Our range of
                signage includes:
              </p>

              <ul className="ml-5 list-disc space-y-4">
                {uses.map((sol, idx) => (
                  <li key={idx} className="leading-8">
                    <span className="font-bold text-[#D2302F]">
                      {sol.title}&nbsp;
                    </span>
                    <span className="">{sol.description}</span>
                  </li>
                ))}
              </ul>

              <p className="font-bold">Popular School Signage:</p>

              <ul className="ml-5 list-disc space-y-2">
                {popular.map((sol, idx) => (
                  <li key={idx}>{sol}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Digital signage makes communication a breeze.
              </h3>
              <p className="leading-8">
                For the most engaging dynamic content, an LED digital message
                board is your goto option. With full-colour photo and video
                capability and easy-to-use software, authorised staff can update
                content without leaving the office. Allowing you to broadcast a
                daily message of inspiration or to-the-minute information to
                your school community. Complement large digital signs at your
                entry point with smaller message boards throughout your campus
                for a true whole-of-school messaging approach.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Signage project management lightens your workload
              </h3>
              <p className="leading-8">
                Educational institutions are busy places. You need a signage
                provider that will simplify completion of your signage project
                and lighten your workload. We make approval processes easy with
                photographic proofs and easy-to-read estimates. Whether you need
                a single name sign for a small primary school or directional
                signs on multiple campuses, our proven project management
                processes ensure your signs are installed on-time and to
                specification, every time.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Image src={Education01} alt="Retail shop" />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg text-[#D2302F] lg:text-2xl">
                When you work with Signarama you can expect:
              </h2>
              <ul className="ml-5 list-disc space-y-4">
                <li className="leading-8">timely estimates</li>
                <li className="leading-8">
                  adherance to all supplied specifications
                </li>
                <li className="leading-8">
                  quality control that delivers consistent products on a
                  national scale, over long time-frames and across repeated
                  orders
                </li>
                <li className="leading-8">
                  clear and detailed documentation to assist with approval
                  processes and expenditure reporting
                </li>
                <li className="leading-8">
                  retention of design files allowing for easy re-ordering and/or
                  re-purposing of your signage products.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Spacer>
    </div>
  )
}
