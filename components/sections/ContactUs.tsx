import Link from "next/link"
import Spacer from "@/components/Spacer"
import ContactForm from "@/components/sections/ContactForm"

import { FaPhoneAlt } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BsChatLeftDotsFill } from "react-icons/bs"

import "@/styles/button.css"

export default function ContactUs() {
  return (
    <section id="contact" className="pt-6 pb-12">
      <Spacer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="tel:02 8112 5666" className="btn btn-primary">
            <span className="btn-icon">
              <FaPhoneAlt />
            </span>
            <span>Call Us Now</span>
          </Link>
          <ContactForm>
            <button className="btn btn-primary">
              <span className="btn-icon">
                <BsChatLeftDotsFill />
              </span>
              Get Free Quote
            </button>
          </ContactForm>

          <Link
            target="_blank"
            className="btn btn-primary"
            href="https://share.google/iFXdbP6dVnP127nTD"
          >
            <span className="btn-icon">
              <FaMapMarkerAlt />
            </span>
            <span>Find Us</span>
          </Link>
        </div>
      </Spacer>
    </section>
  )
}
