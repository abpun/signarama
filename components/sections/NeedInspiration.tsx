import Spacer from "../Spacer"
import Image from "next/image"
import Inspiration from "@/assets/inspiration.webp"

import Link from "next/link"

export default function NeedInspiration() {
  return (
    <section className="py-16">
      <Spacer>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.5fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Need Inspiration?</h2>
            <p className="mt-2">
              We've compiled over 20 years of our signage experience and
              knowledge into a series of product and industry guides.
            </p>

            <div className="mt-8">
              <Link
                target="blank"
                href="https://www.signarama.com.au/buyers-guides"
                className="rounded-md bg-[#AF1E2D] px-4 py-2 text-white hover:bg-[#af1e2cde]"
              >
                View All Guides
              </Link>
            </div>
          </div>
          <div>
            <Image
              loading="eager" 
              src={Inspiration}
              alt="inspiration"
              className="h-72 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Spacer>
    </section>
  )
}
