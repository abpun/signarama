import Image from "next/image"
import Spacer from "@/components/Spacer"
import Img1 from "@/assets/industry/owners02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Owners01 from "@/assets/industry/owners03.webp"
import Carousels from "@/components/Carousels"

const uses = [
  "inform and remind residents of rules about use of common areas and amenities",
  "meet statutory safety requirements while minimising maintenance costs",
  "ensure visitors can easily navigate to and within the building",
  "provide visitors and tenants with up-to-date directory information, minimising confusion and assisting in the safe arrival of mail and deliveries",
  "clearly mark assigned areas such as car parks and storage areas to reduce conflicts between residents",
  "remind residents of how to properly dispose of waste, minimising complaints or fines from authorities",
  "boost the profile of your property and increase awareness of any vacancies",
  "encourage early reporting of maintenance issues with highly visible reminders of who the property manager is and how to contact them.",
]

export default function Owners() {
  return (
    <div>
      <Carousels
        title="Owners Corp"
        carousels={[{ id: 1, img: Img1 }]}
        description="The right signs make property management easier"
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Owners Corp
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            The patient experience starts well before the clinical consultation.
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Care for your patients from the moment they arrive in the carpark
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-16 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <p className="leading-7">
                Wherever there are shared spaces and rules to be followed, there
                is the potential for time consuming conflicts. Clear, durable
                and highly-visible signage helps to minimise undesirable
                behaviour by reminding tenants of their responsibilities and
                protects the value of the owners' investments by creating a
                desirable and functional environment.
              </p>
              <h4 className="font-bold">A well executed sign strategy will:</h4>

              <ul className="ml-5 list-disc space-y-4">
                {uses.map((sol, idx) => (
                  <li key={idx} className="leading-8">
                    {sol}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#D2302F] px-6 py-3 text-lg text-white">
              Our experts will guide you through your options to ensure your
              budget is used for maximum impact and your building signs remain
              attractive and functional over the long term.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Expert advice for the best value result
              </h3>
              <p className="leading-8">
                To ensure that your signs represent the best value-for-money,
                it's important that you get the right advice about which
                materials and types of signs are best suited to your needs. Our
                experts will guide you through your options to ensure your
                budget is used for maximum impact and your building signs remain
                attractive and functional over the long term. We can also take
                care of installation for you, so you don't have to arrange any
                other trades to get your signage done.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Image src={Owners01} alt="Retail shop" />
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
