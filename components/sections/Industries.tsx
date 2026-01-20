import { industries } from "@/lib/industries"
import Image from "next/image"
import Spacer from "../Spacer"
import Link from "next/link"

export default function Industries() {
  return (
    <section className="py-12" id="industries">
      <Spacer>
        <div className="industries-container">
          <div className="border-l-4 border-[#AF1E2D] pl-3">
            <h2 className="text-xl font-bold text-[#AF1E2D] md:text-3xl">
              Signage Solutions by Industry
            </h2>
            <p className="industries-subtitle">
              Specialized expertise across diverse sectors with tailored
              solutions for every business need
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group relative cursor-pointer overflow-hidden rounded-md"
              >
                <Link href={industry.link} className="block" prefetch={false}>
                  <Image
                    loading="eager"
                    src={industry.img}
                    alt={industry.name}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute bottom-0 w-full bg-linear-to-t from-black/60 to-transparent px-4 py-2">
                    <h3 className="text-center text-lg font-semibold text-white">
                      {industry.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Spacer>
    </section>
  )
}
