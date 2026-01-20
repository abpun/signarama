import Spacer from "@/components/Spacer"
import Img1 from "@/assets/industry/advertising02.webp"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"

const uses = [
  "place-based media experiences",
  "out-of-home video ad networks",
  "in-store shopper marketing solutions",
  "superior product launch, activation and exhibition experiences",
]

export default function Advertising() {
  return (
    <div>
      <Carousels
        title="Advertising"
        carousels={[{ id: 1, img: Img1 }]}
        description="Advertising signs that do your ideas justice"
      />
      <ContactUs />
      <Spacer className="pb-16">
        <div className="bg-[#fafafa] px-10 py-8">
          <h1 className="text-xl font-bold text-[#D2302F] lg:text-3xl">
            Advertising
          </h1>
          <h3 className="mt-8 text-xl font-light text-[#D2302F] lg:text-3xl">
            Wow the client with a-grade execution
          </h3>

          <p className="mt-8 text-xl font-light lg:text-2xl">
            Advertising signs that do your ideas justice
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-16 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <p className="leading-7">
                Ffffsssssssst....
                <br />
                Do you hear that? It's the sound of great creative work being
                let down by poor execution.
              </p>
              <p className="font-bold">
                If you'd rather be toasting your campaign successes, work with
                Signarama.
              </p>
              <p className="leading-7">
                Every agency is looking to deliver a distinctive experience, to
                draw people in and engage them in ways that are bespoke, fresh
                and unexpected. But the best concept in the world will flop
                unless you have partners who have the expertise to execute your
                vision. Whether you need pull-up banners, digital visuals,
                vehicle graphics or complete event signage, we have the depth of
                knowledge and technology to push the boundaries of production
                and deliver signs that do your ideas justice.
              </p>
              <p className="font-bold">Use digital signage to deliver:</p>

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
              you to deliver seamless campaign execution.
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Digital signage for a next generation experience
              </h3>
              <p className="leading-8">
                Running a campaign without digital signage is like using a
                screwdriver when you have a power drill in your toolbox.
                Delivering video and image content in strategic locations,
                digital signage can engage, inform and influence people in
                almost any space. With in-store installations and out-of-home
                networks you can guide your target audience through the content
                experience at a time and place where your message is most likely
                to be adopted and actioned.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg text-[#D2302F] lg:text-2xl">
                Project management support for seamless campaign execution
              </h3>
              <p className="leading-8">
                We get it. Your clients can be changeable, even unreasonable.
                Timelines are tight and less than perfect is not an option. With
                our proven project management processes we can help you turn
                things around when your client demands something more, something
                different and something done by...well, yesterday. Partner with
                us to deliver seamless campaign execution Australia wide and
                production quality that's worthy of your ideas and artwork.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-16">
            <div className="space-y-4">
              <h2 className="text-lg text-[#D2302F] lg:text-2xl">
                When you work with Signarama you can expect:
              </h2>
              <ul className="ml-5 list-disc space-y-4">
                <li className="leading-8">timely and easy-to-read estimates</li>
                <li className="leading-8">
                  production quality that's worthy of your ideas and artwork
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
