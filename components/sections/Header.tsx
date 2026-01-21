"use client"
import Link from "next/link"
import Image from "next/image"
import Spacer from "@/components/Spacer"
import Logo from "@/assets/signarama-AU.webp"
import ContactForm from "@/components/sections/ContactForm"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { FaPhoneAlt } from "react-icons/fa"
import { BsChatLeftDotsFill } from "react-icons/bs"

import "@/styles/menu.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="z-99 w-full bg-white py-4 shadow-sm">
      <Spacer>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="logo" loading="eager" className="w-40" />
          </Link>
          <div className="relative">
            <button
              className="xl:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul
              className={cn(
                menuOpen ? "flex" : "hidden",
                "nav-menu absolute top-full right-0 z-9999 mt-5 w-fit flex-col items-center gap-4 rounded-lg bg-white px-10 py-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] xl:static xl:mt-0 xl:flex xl:w-auto xl:flex-row xl:gap-8 xl:bg-transparent xl:py-2 xl:shadow-none"
              )}
            >
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#industries">Industries</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/#about-us">About Us</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>

              <div className="my-4 space-y-4 lg:hidden">
                <Link
                  href="tel:02 8112 5666"
                  className="flex cursor-pointer gap-2 rounded-3xl border border-[#AF1E2D] px-6 py-3 leading-none text-[#AF1E2D] hover:bg-[#AF1E2D] hover:text-white"
                >
                  <FaPhoneAlt />
                  <span className="font-medium">02 8112 5666</span>
                </Link>
                <ContactForm>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="flex cursor-pointer gap-2 rounded-3xl border border-[#AF1E2D] px-6 py-3 leading-none text-nowrap text-[#AF1E2D] hover:bg-[#AF1E2D] hover:text-white"
                  >
                    <BsChatLeftDotsFill />

                    <span className="font-medium">Get Free Quote</span>
                  </a>
                </ContactForm>
              </div>
            </ul>
          </div>
          <div className="hidden space-x-2 xl:flex xl:gap-3">
            <Link
              href="tel:02 8112 5666"
              className="flex cursor-pointer gap-2 rounded-3xl border border-[#AF1E2D] px-6 py-3 leading-none text-[#AF1E2D] hover:bg-[#AF1E2D] hover:text-white"
            >
              <FaPhoneAlt />
              <span className="font-medium">02 8112 5666</span>
            </Link>
            <ContactForm>
              <a
                onClick={() => setMenuOpen(false)}
                className="flex cursor-pointer gap-2 rounded-3xl border border-[#AF1E2D] px-6 py-3 leading-none text-[#AF1E2D] hover:bg-[#AF1E2D] hover:text-white"
              >
                <BsChatLeftDotsFill />
                <span className="font-medium">Get Free Quote</span>
              </a>
            </ContactForm>
          </div>
        </nav>
      </Spacer>
    </header>
  )
}
