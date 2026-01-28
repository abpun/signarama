import Image from "next/image"
import { Metadata } from "next"
import { BsChatLeftDotsFill } from "react-icons/bs"

import Link from "next/link"
import Spacer from "@/components/Spacer"
import Img1 from "@/assets/categories/illuminated/01.webp"
import Img2 from "@/assets/categories/illuminated/02.webp"
import Img3 from "@/assets/categories/illuminated/03.webp"
import Img4 from "@/assets/categories/illuminated/04.webp"
import Img5 from "@/assets/categories/illuminated/05.webp"
import Img6 from "@/assets/categories/illuminated/06.webp"

import Carousels from "@/components/Carousels"
import ContactUs from "@/components/sections/ContactUs"
import ContactForm from "@/components/sections/ContactForm"
import DownloadImg from "@/assets/download/illuminated.webp"

const carousels = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
  { id: 6, img: Img6 },
]

const studies = [
  {
    id: 1,
    title: "30-40% increase in customer visibility",
    description: "compared to standard signage",
  },
  {
    id: 2,
    title: "Higher foot traffic during evening hours",
    description: "when competitors go dark",
  },
  {
    id: 3,
    title: "Improved brand recall",
    description: "with memorable, distinctive displays",
  },
  {
    id: 4,
    title: "Better ROI",
    description: "through LED efficiency and durability",
  },
]

export const metadata: Metadata = {
  title: "Illuminated Signs in Australia | LED, Neon & Backlit Signage",
  description:
    "Boost visibility & revenue with eye-catching illuminated signs. LED, neon & backlit signage solutions for retail, restaurants & offices. Day and night customer attraction.",
}

export default function Illuminated() {
  return (
    <div>
      <Carousels
        carousels={carousels}
        title="Illuminated Signs in Australia - Get Noticed 24/7"
        description="Effective advertising day and night"
      />
      <ContactUs />

      <Spacer className="pb-16">
        <div className="mt-12 space-y-5">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Illuminate Your Brand & Dominate Your Market
          </h2>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="leading-10">
                Stop losing customers to competitors who are more visible. Our
                illuminated signs transform your storefront into a
                revenue-generating asset that works around the clock. Whether
                it's 8 AM or 8 PM, your business shines bright, attracts foot
                traffic, and closes sales—while your competitors fade into the
                darkness.
              </p>
              <p className="leading-10">
                Thousands of Australian businesses trust us to deliver
                illuminated signs that deliver real results. We don't just make
                signs—we create visibility solutions that convert passersby into
                paying customers, day and night. From Sydney to Perth, Brisbane
                to Melbourne, our clients report increased customer inquiries
                and higher sales within weeks of installation.
              </p>
            </div>

            <Link href="/guides/Illuminated_Guide.pdf" target="_blank">
              <Image
                src={DownloadImg}
                alt="Illuminated Shop sign"
                className="w-3/4 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div className="mt-12 space-y-5">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Why Illuminated Signs Drive Real Business Results
          </h2>
          <p className="leading-10">
            Visibility equals revenue. That's not theory—it's what our clients
            experience every single day. When your business features
            eye-catching illuminated signage, you're not just getting a sign;
            you're getting a silent salesman working 24/7 to bring customers
            through your doors.
          </p>
          <p className="leading-10">
            The numbers don't lie. Studies show businesses with illuminated
            signs experience:
          </p>
          <ul className="ml-10 list-disc space-y-4">
            {studies.map((item) => (
              <li key={item.id} className="leading-8">
                <span className="font-bold text-[#D2302F]">{item.title}</span>:{" "}
                {item.description}
              </li>
            ))}
          </ul>

          <p className="leading-10">
            Our illuminated signs aren't just visible—they're impossible to
            ignore. That eye catching factor stops hesitant customers and
            converts them into actual business.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Professional Illuminated Signage Solutions That Work
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col items-start rounded-xl border bg-white p-5 shadow transition-shadow duration-300 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">
                LED Illuminated Signs
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Modern, efficient, and virtually maintenance-free. LED signs
                consume 75% less energy while delivering brighter, bolder
                displays.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start rounded-xl border bg-white p-5 shadow transition-shadow duration-300 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">
                Neon Illuminated Signage
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Sophistication and exclusivity for premium restaurants, bars,
                and boutiques. Neon signs create atmosphere and prestige.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start rounded-xl border bg-white p-5 shadow transition-shadow duration-300 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">Backlit Solutions</h3>
              <p className="text-sm leading-7 text-gray-600">
                Professional and corporate. Perfect for law firms, medical
                practices, and offices. Project authority and stability.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start rounded-xl border bg-white p-5 shadow transition-shadow duration-300 hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">Front-Lit Displays</h3>
              <p className="text-sm leading-7 text-gray-600">
                Maximum impact, day and night visibility. Make your brand
                impossible to miss and see dramatic results.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Who's Getting Results Right Now?
          </h2>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-semibold">Retail Stores</h3>
              <p className="text-sm leading-7 text-gray-700">
                Owner-operated and chains alike are boosting foot traffic with
                eye-catching illuminated signs that stop window shoppers dead in
                their tracks.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold">Restaurants & Cafes</h3>
              <p className="text-sm leading-7 text-gray-700">
                Evening diners spot your illuminated signage blocks away,
                driving reservations and walk-ins through dinner rush hours.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold">Real Estate Agencies</h3>
              <p className="text-sm leading-7 text-gray-700">
                Property hunters searching after hours find your open houses
                instantly thanks to brilliant illuminated signs marking your
                locations.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold">Hospitality Venues</h3>
              <p className="text-sm leading-7 text-gray-700">
                Clubs, bars, and entertainment spaces create unforgettable
                atmospheres with premium illuminated signage that makes nights
                profitable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Medical & Professional Services</h3>
              <p className="text-sm leading-7 text-gray-700">
                Build trust and authority with sophisticated, well-lit
                illuminated signs that establish credibility immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Why Choose Our Illuminated Signs?
          </h2>

          <div className="space-y-6">
            <div className="space-y-1 rounded-lg border-l-4 border-[#D2302F] bg-gray-50 p-5">
              <h3 className="font-semibold">Expert Design</h3>
              <p className="text-sm leading-7 text-gray-700">
                Our designers understand what stops traffic, what captures
                attention, and what converts. Every illuminated signs project is
                crafted for maximum business impact.
              </p>
            </div>

            <div className="space-y-1 rounded-lg border-l-4 border-[#D2302F] bg-red-50 p-5">
              <h3 className="font-semibold">Quality Installation</h3>
              <p className="text-sm leading-7 text-gray-700">
                Proper installation means your signs work flawlessly for years.
                We handle all electrical integration, safety compliance, and
                Australian regulations. No shortcuts, no surprises.
              </p>
            </div>

            <div className="space-y-1 rounded-lg border-l-4 border-[#D2302F] bg-gray-50 p-5">
              <h3 className="font-semibold">Real Estate Agencies</h3>
              <p className="text-sm leading-7 text-gray-700">
                We have the testimonials, photos, and success stories to back up
                our claims. Our clients see results because we deliver quality
                that performs.
              </p>
            </div>

            <div className="space-y-1 rounded-lg border-l-4 border-[#D2302F] bg-red-50 p-5">
              <h3 className="font-semibold">Competitive Pricing</h3>
              <p className="text-sm leading-7 text-gray-700">
                Premium illuminated signs don't have to cost a fortune. We offer
                transparent pricing and flexible options for every budget.
              </p>
            </div>

            <div className="space-y-1 rounded-lg border-l-4 border-[#D2302F] bg-gray-50 p-5">
              <h3 className="font-semibold">Local Expertise</h3>
              <p className="text-sm leading-7 text-gray-700">
                We understand Australian markets, local regulations, weather
                challenges, and what actually works in your community. We're not
                a generic national chain—we're your local illuminated signs
                specialists.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            The Illuminated Signs Difference
          </h2>

          <p className="leading-10">
            Your competitors might have signs. You'll have an asset. While they
            hope customers notice them, your illuminated signs guarantee
            visibility day and night. While they blend into the streetscape,
            your eye catching display dominates the view.
          </p>
          <p className="leading-10">
            Quality illuminated signage is an investment that compounds. Every
            customer attracted is revenue generated. Every repeat visitor
            remembering your brand is loyalty built. Every competitive edge
            gained is market share won.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Ready to Upgrade? Let's Talk
          </h2>

          <p className="leading-10">
            Stop settling for invisible signage. Get illuminated signs that
            actually drive business results. Contact our team today for a free
            consultation. We'll assess your location, discuss your goals, and
            design illuminated signs that deliver the visibility and revenue
            boost your business deserves.
          </p>
          <p className="leading-10">
            Your competitors aren't waiting. Neither should you. Illuminate your
            brand today and watch your business transform.
          </p>

          <ContactForm>
            <button className="btn btn-primary" style={{ padding: "8px 16px" }}>
              <span className="btn-icon">
                <BsChatLeftDotsFill />
              </span>
              Get Free Quote
            </button>
          </ContactForm>
        </div>
      </Spacer>
    </div>
  )
}
