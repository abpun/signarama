import Spacer from "@/components/Spacer"
import Img1 from "@/assets/industry/real-estate02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"

const uses = [
  "Flags to attract attention and create a sense of occasion at open houses and auctions",
  "A-frames to inform and direct foot and vehicle traffic to your store-front and property locations",
  "Image and text window decals for properties that can't accommodate ground mounted signs",
  "Frame signs with low-cost inserts for super-fast street-side presence",
]

export default function RealEstate() {
  return (
    <div>
      <Carousels
        title="Real Estate"
        carousels={[{ id: 1, img: Img1 }]}
        description="Start the sales conversation with quality real estate signage."
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Real Estate Signs in your area
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            Stand Out with Eye-Catching Real Estate Signs
          </h3>
          <p className="mt-8 text-xl font-light lg:text-2xl">
            Capture buyer attention with professional Real Estate Signs. Custom
            designs help attract buyers, boost branding, and get the phone
            ringing.
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-16 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <p className="font-bold">
                How do you boost your market presence?
              </p>
              <p className="leading-7">
                To take passers-by from stickybeaks to signing on the dotted
                line, you need to kick off the sales process with a strong first
                impression of your agency and your listings. Your street-side
                and in-store signage are a powerful way to send a positive
                message about your professionalism, credibility and expertise.
              </p>
              <p className="font-bold">
                You can boost your market presence by using:
              </p>

              <ul className="ml-5 list-disc space-y-2">
                {uses.map((sol, idx) => (
                  <li key={idx} className="leading-7">{sol}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#D2302F] px-6 py-3 text-lg text-white">
              Our experts will guide you through your options and manage
              production, installation and maintenance of your signs, helping
              you kick-start the sales process with a strong first impression.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Signs that stand up to all weather conditions
              </h3>
              <p className="leading-8">
                Your beautiful photography and sparkling sales copy isn't going
                to stand a chance if your signs fade in the sun, sag in the rain
                or end up face down in the grass. We use state-of-the-art
                production technology so that you can rely on consistent colours
                and impressive images, every time. With our experts on-hand to
                guide you through material selection and best practice
                installation, you can be sure your signs will withstand the
                toughest weather conditions.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Quick turnaround and reliable supply for your regular orders
              </h3>
              <p className="leading-8">
                When it comes to selling and leasing property, there's no time
                to waste. You need collateral for your marketing campaigns
                quickly and done to the highest standard. We keep your design
                files on-hand, so it's easy to make regular orders instead of
                starting from scratch for every listing.
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
