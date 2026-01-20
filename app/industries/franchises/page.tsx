import Spacer from "@/components/Spacer"
import Img1 from "@/assets/industry/franchise02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"

const uses = [
  "announce changes of ownership of existing sites",
  "generate pre-opening attention with window signage",
  "communicate grand opening events and incentives with temporary lettering, decals or corflute",
  "execute durable and attractive signage outside and inside, with illumination for 24/7 visibility",
  "prime people for sales by prompting them to ask about special offers",
  "turn your vehicle into a 24/7 billboard for your local business",
  "ensure sponsorship agreements or donations give you maximum visibility in the local community",
]

export default function Franchise() {
  return (
    <div>
      <Carousels
        title="Franchises"
        carousels={[{ id: 1, img: Img1 }]}
        description="Quality and service Australia wide for better branding of new and established stores."
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Frachises
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            Franchise signs that make local marketing easy
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Quality and service Australia wide for better branding of new and
            established stores.
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-16 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <p className="leading-7">
                As part of a franchise, staying in line with standard operating
                procedures and making sure your communications are consistent
                with the visual identity of the brand is critical to attracting
                customers and securing approvals from head office. Bring in your
                guidelines and we'll make sure your signs are consistent in
                quality, colour and content and stay within specification.
              </p>
              <p className="leading-7">
                With the expertise to ensure all signs comply with franchise
                colour guides and logo requirements, we can help you use signage
                to:
              </p>

              <ul className="ml-5 list-disc space-y-2">
                {uses.map((sol, idx) => (
                  <li key={idx} className="leading-7">
                    {sol}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#D2302F] px-6 py-3 text-lg text-white">
              Our experts will guide you through your options and manage
              production, installation and maintenance of your signs, helping
              you make the most of your franchise brand and local area marketing
              efforts.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Are you making the most of your local area marketing
                opportunities?
              </h3>
              <p className="leading-8">
                As a franchisee, you enjoy access to a well-known brand to
                attract people to your store and umbrella marketing that keeps
                brand awareness humming along. But to make the most of a
                franchise often requires extra marketing efforts in your local
                community, to let people know about your specific store and
                special offers.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Project management to make your workload lighter
              </h3>
              <p className="leading-8">
                We know that when you're running a business, it seems like there
                are never enough hours in the day. You need a signage provider
                that will simplify completion of your signage project and
                lighten your workload. We make approval processes easy with
                photographic proofs and easy-to-read estimates.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16">
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
