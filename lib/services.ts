import Vehicle from "@/assets/services/vehicle.webp"
import Service from "@/assets/services/service.webp"
import Shop from "@/assets/services/shop-signage.webp"
import Indoor from "@/assets/services/indoor-sign.webp"
import Outdoor from "@/assets/services/outdoor-sign.webp"
import Building from "@/assets/services/building-sign.webp"
import Illuminated from "@/assets/services/professionals.webp"
import Promotional from "@/assets/services/promotional-sign.webp"

import Illuminated01 from "@/assets/services/illuminated/01.webp"
import Illuminated02 from "@/assets/services/illuminated/02.webp"

import Vehicle01 from "@/assets/services/vehicle/01.webp"
import Vehicle02 from "@/assets/services/vehicle/02.webp"

import Shop01 from "@/assets/services/shops/01.webp"
import Shop02 from "@/assets/services/shops/02.webp"

import Promotional01 from "@/assets/services/promotional/01.webp"
import Promotional02 from "@/assets/services/promotional/02.webp"

import Building01 from "@/assets/services/building/01.webp"
import Building02 from "@/assets/services/building/02.webp"

import Outdoor01 from "@/assets/services/outdoor/01.webp"
import Outdoor02 from "@/assets/services/outdoor/02.webp"

import Indoor01 from "@/assets/services/indoor/01.webp"
import Indoor02 from "@/assets/services/indoor/02.webp"

import Service01 from "@/assets/services/shops/01.webp"
import Service02 from "@/assets/services/shops/02.webp"

export const services = [
  {
    id: 1,
    title: "Illuminated Signs",
    icons: [Illuminated, Illuminated01, Illuminated02],
    link: "/categories/illuminated-signs/",
    description:
      "Bright and energy-efficient signage designed to shine both day and night, perfect for grabbing attention.",
  },
  {
    id: 2,
    title: "Vehicle Signs",
    icons: [Vehicle, Vehicle01, Vehicle02],
    link: "/categories/vehicle-signage/",
    description:
      "Transform your vehicle into a moving billboard with custom wraps and graphics that promote your brand on the go.",
  },
  {
    id: 3,
    title: "Shop Signage",
    icons: [Shop, Shop01, Shop02],
    link: "/categories/shop-signage/",
    description:
      "Custom-designed shopfront signs that enhance your store's presence and attract foot traffic.",
  },
  {
    id: 4,
    title: "Promotional Signs",
    icons: [Promotional, Promotional01, Promotional02],
    link: "/categories/promotional/",
    description:
      "Temporary or seasonal signage to highlight promotions, sales, or special events and boost customer engagement.",
  },
  {
    id: 5,
    title: "Building Signs",
    icons: [Building, Building01, Building02],
    link: "/categories/building-signs/",
    description:
      "Large-scale exterior signage for buildings, ideal for branding offices, complexes, or corporate spaces.",
  },
  {
    id: 6,
    title: "Outdoor Signs",
    icons: [Outdoor, Outdoor01, Outdoor02],
    link: "/categories/outdoor-signs/",
    description:
      "Durable and weather-resistant signage built to withstand the elements while delivering strong visual impact.",
  },
  {
    id: 7,
    title: "Indoor Signs",
    icons: [Indoor, Indoor01, Indoor02],
    link: "/categories/indoor-signs/",
    description:
      "Interior signs that guide, inform, or decorate — from directory boards to reception branding.",
  },
  {
    id: 8,
    title: "Service",
    icons: [Service, Service01, Service02],
    link: "/categories/services/",
    description:
      "Professional signage services from design to installation — ensuring quality and satisfaction at every step.",
  },
]
