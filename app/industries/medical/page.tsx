import Image from "next/image"
import Spacer from "@/components/Spacer"
import Carousels from "@/components/Carousels"
import Img1 from "@/assets/industry/medical02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Medical01 from "@/assets/industry/medical03.webp"
import Medical02 from "@/assets/services/building/01.webp"

const uses = [
  "Exterior signage to assist patients to easily identify your location and entry points",
  "Reception signage that welcomes and directs patients to engage with the correct staff",
  "Waiting room signage that gives patients permission to use amenities, ask questions and report relevant clinical information",
  "Wayfinding signage that assists patients navigate to needed services and amenities",
  "Interior signage that distinguishes between clinical and non-clinical spaces and patient and staff spaces",
  "Door and directory signage that accurately reflects who is on duty",
]

export default function Medical() {
  return (
    <div>
      <Carousels
        title="Medical"
        carousels={[{ id: 1, img: Img1 }]}
        description="Care for your patients from the moment they arrive in the carpark"
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Medical
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            The patient experience starts well before the clinical consultation.
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Care for your patients from the moment they arrive in the carpark
          </p>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="leading-7">
                Locating a medical service for the first time, accessing
                transport and car parking, finding amenities and waiting in
                unfamiliar environments can contribute to patient stress and
                anxiety at a time that may already be quite stressful. Take into
                account the varied mobility and cognitive needs of many patients
                and it's clear that creating a welcoming physical environment
                and ensuring signs comply with statutory requirements is an
                important component of patient care.
              </p>
              <h4 className="font-bold">
                You can contribute to patient comfort and satisfaction by
                providing:
              </h4>

              <ul className="ml-5 list-disc space-y-4">
                {uses.map((sol, idx) => (
                  <li key={idx} className="leading-8">
                    {sol}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image src={Medical01} alt="Retail shop" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Project management for sites large and small
              </h3>
              <p className="leading-8">
                Whether you need signs for a boutique practice or a large
                hospital, our proven project management processes ensure your
                signs are installed on-time and to specification, every time.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Support staff efficiency
              </h3>
              <p className="leading-8">
                Clear and easy-to-understand signage is also good for staff.
                According the Center for Health Design, when patients have the
                benefit of an information system, including elements such as a
                welcome sign and orientation aids, patients are more
                self-reliant and make fewer demands on staff.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Image src={Medical02} alt="Retail shop" />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg text-[#D2302F] lg:text-2xl">
                When you work with Signarama you can expect:
              </h2>
              <ul className="ml-5 list-disc space-y-4">
                <li className="leading-8">timely estimates</li>
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
