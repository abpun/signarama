import Spacer from "@/components/Spacer"

const services = [
  {
    id: 1,
    title: "🎨 Custom Signs & Banners",
    description:
      "Tailored signage solutions designed to perfectly represent your brand and attract customers.",
  },
  {
    id: 2,
    title: "🚗 Vehicle Graphics & Wraps",
    description:
      "Transform your vehicle into a mobile billboard with professional graphics and full wraps.",
  },
  {
    id: 3,
    title: "🏪 Storefront Signs & Displays",
    description:
      "Eye-catching storefront signage that helps your business stand out and draw foot traffic.",
  },
  {
    id: 4,
    title: "📄 Business Stationery & Promotional Products",
    description:
      "Complete branding solutions including stationery and promotional items for marketing success.",
  },
]

const aboutus = [
  {
    id: 1,
    icon: "👥",
    title: "Local Ownership",
    description:
      "Family-owned and operated by a dedicated husband-and-wife team who understand the local community's needs.",
  },
  {
    id: 2,
    icon: "🌟",
    title: "Global Expertise",
    description:
      "Backed by 30+ years of worldwide experience from the largest sign franchise network.",
  },
  {
    id: 3,
    icon: "💎",
    title: "Quality Promise",
    description:
      "We believe in quality, reliability, and customer-focused service that makes your brand memorable.",
  },
]

export default function AboutUs() {
  return (
    <section id="about-us" className="py-16">
      <Spacer>
        <div className="border-l-4 border-[#AF1E2D] pl-3">
          <h2 className="text-2xl font-bold text-[#AF1E2D] md:text-3xl">
            About Our Business
          </h2>
        </div>
        <p className="mt-1 text-base leading-relaxed text-slate-600">
          Proudly owned and operated by a local husband-and-wife team, we've
          been serving our community since October 2024, delivering
          high-quality signage with a personal touch. Backed by over 30 years
          of global expertise from the United Franchise Group, we're committed
          to providing exceptional signage solutions that help businesses
          stand out.
        </p>

        <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {aboutus.map((about) => (
            <div
              key={about.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-gray-50 to-gray-100 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 left-0 h-1 scale-x-0 transform bg-[#AF1E2D] transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="mb-5 bg-[#AF1E2D] bg-clip-text text-5xl text-transparent">
                {about.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-800">
                {about.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {about.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-linear-to-br from-gray-50 to-white px-6 py-8 md:p-12">
          <h3 className="mb-10 text-center text-3xl font-bold text-slate-800">
            Our Services Include
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item group rounded-xl border-l-4 border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:translate-x-1 hover:border-[#AF1E2D] hover:shadow-md"
              >
                <h4 className="mb-3 text-lg font-semibold text-slate-800 transition-colors group-hover:text-[#AF1E2D]">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Spacer>
    </section>
  )
}
