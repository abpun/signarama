import Spacer from "@/components/Spacer"
import Img1 from "@/assets/industry/transport02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"

const uses = [
  "increase awareness of your business without ongoing advertising costs",
  "highlight your safety record and the experience of your drivers",
  "encourage customers to contact you or to visit your website",
  "make your depots easy to find and welcoming to visitors.",
]

export default function Transport() {
  return (
    <div>
      <Carousels
        title="Transport"
        carousels={[{ id: 1, img: Img1 }]}
        description="Turn heavy vehicles into premium advertising assets."
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Transport
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            Truck signs that get sales moving.
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Turn heavy vehicles into premium advertising assets.
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-16 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <p className="font-bold">
                How do you make more of your heavy vehicle assets?
              </p>
              <p className="leading-7">
                Your vehicles are out on the road everyday, making products move
                for your customers but are they making your sales move? Truck
                and trailer signage is an investment in growing your business
                and a highly effective form of marketing. With full-colour
                graphics and colour matching technology, your trucks and
                trailers can deliver messages about your brand wherever they go.
              </p>
              <p className="font-bold">
                As part of your marketing strategy, you can use signs to:
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
              you get your sales on the move.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Flexible scheduling for seamless installation
              </h3>
              <p className="leading-8">
                Trucking schedules are tight. When you take a vehicle off the
                road for sign installation you want a quick turnaround and no
                surprise delays. At Signarama, we have a national network of
                stores, so we can apply your vehicle signs at the location and
                time that suits your logistics business best.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Making the most of your vehicle has never been easier
              </h3>
              <p className="leading-8">
                We can help you adapt your branding to vehicle signage and will
                make sure that the final product looks great in the short and
                long term. Our designers will also make sure your new signage
                adheres to any visual identity guidelines you provide. We can
                guide you through your options and provide ideas if you're not
                sure where to start.
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
