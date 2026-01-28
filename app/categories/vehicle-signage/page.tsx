import Link from "next/link"
import Image from "next/image"
import Spacer from "@/components/Spacer"
import Carousels from "@/components/Carousels"

import Img1 from "@/assets/categories/vehicle/01.webp"
import Img2 from "@/assets/categories/vehicle/02.webp"
import Img3 from "@/assets/categories/vehicle/03.webp"
import Img4 from "@/assets/categories/vehicle/04.webp"
import Img5 from "@/assets/categories/vehicle/05.webp"
import Img6 from "@/assets/categories/vehicle/06.webp"

import Img07 from "@/assets/categories/vehicle/07.webp"
import Img08 from "@/assets/categories/vehicle/08.webp"
import Img09 from "@/assets/categories/vehicle/09.webp"
import Img10 from "@/assets/categories/vehicle/10.webp"
import Img11 from "@/assets/categories/vehicle/11.webp"
import Img12 from "@/assets/categories/vehicle/12.webp"
import Img13 from "@/assets/categories/vehicle/13.webp"

import Product01 from "@/assets/categories/vehicle/p01.webp"
import Product02 from "@/assets/categories/vehicle/p02.webp"
import Product03 from "@/assets/categories/vehicle/p03.webp"
import Product04 from "@/assets/categories/vehicle/p04.webp"
import Product05 from "@/assets/categories/vehicle/p05.webp"
import Product06 from "@/assets/categories/vehicle/p06.webp"
import Product07 from "@/assets/categories/vehicle/p07.webp"
import Product08 from "@/assets/categories/vehicle/p08.webp"
import Product09 from "@/assets/categories/vehicle/p09.webp"
import Product10 from "@/assets/categories/vehicle/p10.webp"
import Product11 from "@/assets/categories/vehicle/p11.webp"
import Product12 from "@/assets/categories/vehicle/p12.webp"
import Product13 from "@/assets/categories/vehicle/p13.webp"
import Product14 from "@/assets/categories/vehicle/p14.webp"

import ContactUs from "@/components/sections/ContactUs"
import DownloadImg from "@/assets/download/vehicle.webp"
import ContactForm from "@/components/sections/ContactForm"
import { BsChatLeftDotsFill } from "react-icons/bs"
import { Metadata } from "next"

const carousels = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
  { id: 6, img: Img6 },
]

const vehicleTypes = [
  { id: 1, img: Img07, title: "Car Signage" },
  { id: 2, img: Img08, title: "Van Signs" },
  { id: 3, img: Img09, title: "Ute Signs" },
  { id: 4, img: Img10, title: "Truck Signs" },
  { id: 5, img: Img11, title: "Bus Signs" },
  { id: 6, img: Img12, title: "Boat Signage" },
  { id: 7, img: Img13, title: "Aircraft Graphics" },
]

const products = [
  { id: 1, img: Product01, title: "Reflective Vehicle Signage" },
  { id: 2, img: Product02, title: "Bus Graphics" },
  { id: 3, img: Product03, title: "Aircraft Graphics" },
  { id: 4, img: Product04, title: "Boat Graphics" },
  { id: 5, img: Product05, title: "Trailer Signs" },
  { id: 6, img: Product06, title: "Truck Graphics" },
  { id: 7, img: Product07, title: "Van Wraps" },
  { id: 8, img: Product08, title: "Vehicle Lettering" },
  { id: 9, img: Product09, title: "Ute Wraps" },
  { id: 10, img: Product10, title: "One-Way Vision" },
  { id: 11, img: Product11, title: "Car Wraps" },
  { id: 12, img: Product12, title: "Fleet Graphics" },
  { id: 13, img: Product13, title: "Food Trucks" },
  { id: 14, img: Product14, title: "Magnetic Vehicle Signs" },
]

export const metadata: Metadata = {
  title: "Vehicle Signage in Australia | Professional Vehicle Signs",
  description:
    "Professional vehicle signage in Australia. Car magnets, wraps & custom sign designs. Expert installation & fast turnaround. Get your free quote today.",
}

export default function Vehicle() {
  return (
    <div>
      <Carousels
        carousels={carousels}
        title="Professional Vehicle Signage Solutions in Australia"
      />
      <ContactUs />

      <Spacer className="pb-16">
        <div className="mt-12 space-y-5">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Professional Vehicle Signage Solutions in Australia
          </h2>
          <p className="leading-10">
            Transform your fleet into mobile marketing machines with
            professional vehicle signage designed specifically for Australian
            businesses. Whether you operate a single service vehicle or manage a
            multi-vehicle fleet, our vehicle signage solutions deliver maximum
            visibility and cost-effective advertising that works 24/7.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
              Why Choose Vehicle Signage for Your Business
            </h2>
            <p className="leading-10">
              Vehicle signage represents one of the smartest marketing
              investments available to Australian companies. Unlike traditional
              advertising that stops when you stop paying, vehicle signage
              generates continuous brand exposure. Each vehicle becomes a moving
              billboard, reaching thousands of potential customers monthly.
            </p>
            <p className="leading-10">
              A single vehicle generates 30,000-40,000 monthly impressions. This
              equates to significantly lower costs than traditional advertising
              methods. The investment in professional vehicle signage typically
              lasts 5-7 years, providing exceptional return on investment.
            </p>
          </div>
          <Link href="/guides/Illuminated_Guide.pdf" target="_blank">
            <Image
              src={DownloadImg}
              alt="Illuminated Shop sign"
              className="w-3/4 cursor-pointer"
            />
          </Link>
        </div>

        <div className="mt-12 space-y-5">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Different types of Vehicle Signage
          </h2>

          <div className="xs:grid-cols-2 xs:gap-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {vehicleTypes.map((item) => (
              <div
                key={item.id}
                className="relative mb-8 flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8"
              >
                <Image src={item.img} alt={item.title} className="w-full" />
                <div className="absolute bottom-0 left-0 w-full cursor-pointer bg-[#D2302FDD] py-6 transition-all hover:pb-10">
                  <h3 className="text-center text-lg font-light text-white uppercase lg:text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-5">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Our Products
          </h2>

          <div className="xs:grid-cols-2 xs:gap-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="relative mb-8 flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8"
              >
                <Image src={item.img} alt={item.title} className="w-full" />
                <div className="absolute bottom-0 left-0 w-full cursor-pointer bg-[#D2302FDD] py-6 transition-all hover:pb-10">
                  <h3 className="text-center text-lg font-light text-white uppercase lg:text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 w-full space-y-5 lg:w-1/2">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Why Material Quality Matters
          </h2>
          <p className="leading-10">
            Professional vehicle signage requires premium materials tested for
            Australian conditions. Marine-grade vinyl resists saltwater, UV
            exposure and temperature fluctuations without fading or peeling.
            Budget vinyl alternatives deteriorate within 18-24 months, requiring
            costly replacement.
          </p>

          <p className="leading-10">
            Premium materials ensure your investment maintains professional
            appearance throughout its entire lifespan. Quality adhesives,
            weather-resistant inks, and durable backing prevent edge peeling and
            color degradation. This translates to superior longevity and
            continued brand representation.
          </p>
        </div>

        <div className="mt-12 w-full space-y-5 lg:w-1/2">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Professional Installation Standards
          </h2>
          <p className="leading-10">
            Quality installation determines longevity and appearance. Our
            professional installation teams possess technical expertise ensuring
            correct surface preparation, precise application, and thorough
            quality inspection before completion.
          </p>
        </div>

        <div className="mt-12 w-full space-y-5 lg:w-1/2">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Durability and Warranty
          </h2>
          <p className="leading-10">
            Professional vehicle signage maintains impact throughout its
            lifecycle. Quality installation with premium materials ensures your
            investment continues delivering results.
          </p>
        </div>

        <div className="mt-12 w-full space-y-5 lg:w-1/2">
          <h2 className="text-xl font-bold text-[#D2302F] lg:text-2xl">
            Get Your Vehicle Signage Quote
          </h2>
          <p className="leading-10">
            Transform your vehicles into marketing assets with professional
            signage solutions. Our experienced team specializes in creating
            vehicle signage that generates customer inquiries and delivers
            business growth.
          </p>

          <p className="leading-10">
            <strong>
              Contact our signage specialists today for a free consultation and
              custom quote.
            </strong>
            &nbsp; Hundreds of Australian businesses leverage vehicle signage
            for cost-effective long-term marketing results.
          </p>

          <ContactForm>
            <button className="btn btn-primary" style={{ padding: "8px 16px" }}>
              <span className="btn-icon">
                <BsChatLeftDotsFill />
              </span>
              Get Free Quote
            </button>
          </ContactForm>
        </div>
      </Spacer>
    </div>
  )
}
