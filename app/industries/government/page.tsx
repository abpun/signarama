import Image from "next/image"
import Spacer from "@/components/Spacer"
import Carousels from "@/components/Carousels"
import Img1 from "@/assets/industry/government02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Government01 from "@/assets/industry/government/01.webp"
import Government02 from "@/assets/services/building/01.webp"

export default function Government() {
  return (
    <div>
      <Carousels
        title="Government"
        carousels={[{ id: 1, img: Img1 }]}
        description="Communicate your message clearly, consistently and cost-effectively"
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Government
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            Value and reliability for local and national projects
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Communicate your message clearly, consistently and cost-effectively
          </p>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="leading-7">
                When you're responsible for managing public assets, property or
                programmes, there's a premium on transparency and accountability
                for every expenditure. We understand that you need to comply
                with complex approvals processes, procurement policies, OH&S
                requirements and reporting obligations.
              </p>

              <p className="leading-7">
                Delivering major capital works projects, improvements to
                existing facilities or significant public events can quickly
                become a headache when service providers don't live up to your
                expectations. That's why our estimating and proofing processes
                are detailed and efficient, so you have clarity over what is
                being delivered, confidence in the timeliness of production and
                a clear record of your orders and approvals.
              </p>
            </div>
            <div>
              <Image src={Government01} alt="Retail shop" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Proven project management processes
              </h3>
              <p className="leading-8">
                From first conversation to final installation, we can take care
                of your signage needs and coordinate with other contractors to
                help your project run on time and on budget. Our service team
                can also assist you by providing graphic mock-ups to help with
                obtaining approvals and coordinating with other contractors to
                ensure timely and safe installation.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Key messages are just the beginning
              </h3>
              <p className="leading-8">
                Deciding on the key messages you need to communicate is only the
                beginning when it comes to making sure your signs are seen, read
                and understood. The location of your signs, the durability and
                maintenance requirements of different materials and the
                frequency with which content needs to be updated, will all
                influence what represents best value for your project.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Image src={Government02} alt="Retail shop" />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg text-[#D2302F] lg:text-2xl">
                When you work with Signarama you can expect:
              </h2>
              <ul className="ml-5 list-disc space-y-4">
                <li className="leading-8">timely estimates</li>
                <li className="leading-8">
                  adherence to all supplied specifications
                </li>
                <li className="leading-8">
                  quality control that delivers consistent products on a
                  national scale, over long time-frames and across repeated
                  orders
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
