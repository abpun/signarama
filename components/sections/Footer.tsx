import Spacer from "../Spacer"
import ContactForm from "./ContactForm"

import Link  from "next/link"
import { FaFacebookF, FaMapMarkerAlt } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { BsChatLeftDotsFill } from "react-icons/bs"
import { FaInstagram, FaPhoneAlt } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#625C5C] text-white">
      <Spacer>
        <div className="py-10">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
              <div className="space-y-4">
                <Link
                  target="_blank"
                  href="https://share.google/HRGu1HK9TSltQlc01"
                  className="block text-gray-200 transition-colors hover:text-white hover:underline"
                >
                  Find your local store
                </Link>
                <Link
                  href="tel:02 8112 5666"
                  className="inline-flex items-center gap-3 rounded-lg border border-white px-6 py-3 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#AF1E2D]"
                >
                  <FaPhoneAlt />
                  <span className="font-medium">02 8112 5666</span>
                </Link>
              </div>
              <ContactForm>
                <button className="flex cursor-pointer items-center gap-3 rounded-lg border border-white px-6 py-3 text-white hover:bg-white hover:text-[#AF1E2D]">
                  <BsChatLeftDotsFill />
                  <span className="font-medium">Get Free Quote</span>
                </button>
              </ContactForm>
            </div>

            <div className="space-y-6">
              <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/1EdTH4BTV9/?mibextid=wwXIfr"
                  className="flex size-12 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-[#AF1E2D]"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/signaramawetherillpark?igsh=azhsMm03ODJqbnpx"
                  className="flex size-12 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-[#AF1E2D]"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/signarama-wetherill-park/"
                  className="flex size-12 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-[#AF1E2D]"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="mb-4 text-xl font-semibold">Visit Our Store</h3>
              <div className="rounded-lg border border-gray-400 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    className="mt-1 shrink-0 text-white"
                    size={16}
                  />
                  <div className="space-y-1 text-gray-100">
                    <p className="font-semibold text-white">
                      Signarama Wetherill Park
                    </p>
                    <p>Unit 4 / 413 Victoria Street</p>
                    <p>Wetherill Park, Sydney, NSW 2164</p>
                    <p>Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spacer>

      <div className="mt-8 bg-black py-2">
        <Spacer>
          <p className="text-center text-sm text-white">
            &copy; 2025 Signarama Wetherill Park. All rights reserved. | Leading
            the future of custom signage solutions worldwide.
          </p>
        </Spacer>
      </div>
    </footer>
  )
}
