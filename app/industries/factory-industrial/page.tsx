import Spacer from "@/components/Spacer"
import Img1 from "@/assets/industry/Attachment.jpeg"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"

const uses = [
  "convert large factory and warehouse buildings into permanent billboards for your business",
  "catch the attention of pedestrians and motorists with high impact signage such as dimensional lettering and colour graphics",
  "assist people to find your location with pylon or exterior signage",
  "add a 'wow' factor to an otherwise ordinary or unexciting space",
  "create a welcoming and professional reception area, adding warmth and personality to sometimes cold or uninviting industrial spaces",
  "prime people for sales by prompting them to ask about special offers",
  "minimise safety risks to your workforce and visitors with painted floor areas and highly visible warning and hazard signs",
]

export default function Factory() {
  return (
    <div>
      <Carousels
        title="Factory & Industrial"
        carousels={[{ id: 1, img: Img1 }]}
        description="Minimise risks to your workforce with safety and directional signs that can't be ignored."
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Factory & Industrial
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            Factory signs that improve safety and branding
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Minimise risks to your workforce with safety and directional signs
            that can't be ignored.
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-16 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <h4 className="font-bold">
                Promote your brand and protect your workforce
              </h4>
              <p className="leading-7">
                From large scale warehouse signs that put your mark on the
                skyline to small but essential safety and directional signage,
                we deliver innovative signs that look great for a long time.
                When people visit your industrial site, you want them to find
                your location easily, navigate the site safely and leave with a
                positive impression of your business. Used well, signage is a
                powerful tool for achieving these outcomes
              </p>
              <h4 className="font-bold">
                With the right signage strategy you can:
              </h4>

              <ul className="ml-5 list-disc space-y-2">
                {uses.map((sol, idx) => (
                  <li key={idx} className="leading-7">
                    {sol}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#D2302F] px-6 py-3 text-lg text-white">
              We have the skills and experience required to work on large-scale
              buildings and multiple sites, so you can rely on us to deliver
              signage that meets your brand guidelines and looks great, every
              time.
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <h3 className="text-lg text-[#D2302F] lg:text-2xl">
              Project management to make your workload lighter
            </h3>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <p className="leading-8">
                We know that when you're running a business, it seems like there
                are never enough hours in the day. You need a signage provider
                that will simplify completion of your signage project and
                lighten your workload. We make approval processes easy with
                photographic proofs and easy-to-read estimates.
              </p>
              <p className="leading-8">
                Whether you need a single name sign for a small factory or
                billboard size branding of multiple sites, our proven project
                management processes ensure your signs are installed on-time and
                to specification, every time. Our experts will guide you through
                your options and manage production, installation and maintenance
                of your signs, helping you promote your brand and protect your
                workforce.
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
