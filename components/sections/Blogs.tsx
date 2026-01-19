import Image from "next/image"
import Spacer from "@/components/Spacer"
import Blog1 from "@/assets/blogs/blog1.gif"
import Blog2 from "@/assets/blogs/blog2.webp"
import Blog3 from "@/assets/blogs/blog3.webp"
import Blog4 from "@/assets/blogs/blog4.webp"
import Blog5 from "@/assets/blogs/blog5.webp"
import Blog6 from "@/assets/blogs/blog6.webp"
import { LuChevronRight } from "react-icons/lu"
import { BsChevronDoubleDown } from "react-icons/bs"

const blogs = [
  {
    id: 1,
    img: Blog1,
    tag: "Branding",
    date: "Jul 19, 2025",
    title: "Why Sustainable Signage Matters For Your Business",
    link: "https://www.signarama.com.au/signwriters-blog/article/Why-Sustainable-Signage-Matters",
    description:
      "Discover how eco-friendly signs aren't just good for the planet—but great for your brand image too!",
  },
  {
    id: 2,
    img: Blog2,
    tag: "Inspiration",
    date: "Jul 19, 2025",
    title: "Maximise Your EOFY Sales with High-Impact Signage",
    link: "https://www.signarama.com.au/signwriters-blog/article/signage-for-eofy-sales",
    description:
      "Get noticed and boost your end-of-financial-year sales with signage that demands attention.",
  },
  {
    id: 3,
    img: Blog3,
    tag: "Guides",
    date: "Jul 19, 2025",
    title: "Attract More Customers with Eye-Catching Illuminated Signs",
    link: "https://www.signarama.com.au/signwriters-blog/article/illuminated-signs",
    description:
      "Light up your storefront and turn window shoppers into loyal customers!",
  },
  {
    id: 4,
    img: Blog4,
    tag: "Branding",
    date: "Jul 19, 2025",
    title: "Stand Out & Increase Your Sales With Shop Signs",
    link: "https://www.signarama.com.au/signwriters-blog/article/shop-signs",
    description:
      "Uncover how the right shop sign can set you apart and drive more foot traffic.",
  },
  {
    id: 5,
    img: Blog5,
    tag: "Inspiration",
    date: "Jul 19, 2025",
    title: "Elevate Your Business With New Signage",
    link: "https://www.signarama.com.au/signwriters-blog/article/elevate-your-business-with-new-signage",
    description:
      "Give your brand a fresh face with signage that speaks louder than words.",
  },
  {
    id: 6,
    img: Blog6,
    tag: "Guides",
    date: "Jul 19, 2025",
    title: "Ready to maximise your sales this silly season?",
    link: "https://www.signarama.com.au/signwriters-blog/article/maximise-your-sales",
    description:
      "Learn how smart signage can turn festive footfall into real revenue.",
  },
]

export default function Blogs() {
  return (
    <section className="py-16" id="blogs">
      <Spacer>
        <div className="border-l-4 border-[#AF1E2D] pl-3">
          <h2 className="text-xl font-bold text-[#AF1E2D] md:text-3xl">
            From Our Studio
          </h2>
          <p className="mt-1">
            Explore insights and stories from our design journey.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative overflow-hidden rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
            >
              <div className="h-auto overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  loading="eager" 
                  className="h-auto w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-2xl font-bold">{blog.title}</h3>
                <p className="text-sm">{blog.description}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  className="inline-flex cursor-pointer items-center gap-1 hover:underline"
                >
                  <span>Read More</span>
                  <LuChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <a
            target="_blank"
            className="inline-flex items-center gap-1 hover:underline"
            href="https://www.signarama.com.au/signwriters-blog"
          >
            <span>View More</span>
            <BsChevronDoubleDown size={12} />
          </a>
        </div>
      </Spacer>
    </section>
  )
}
