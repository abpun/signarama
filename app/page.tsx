import Hero from "@/components/sections/Hero"
import Img1 from "@/assets/carousel/img1.webp"
import Img2 from "@/assets/carousel/img2.webp"
import Img3 from "@/assets/carousel/img3.webp"
import Footer from "@/components/sections/Footer"
import AboutUs from "@/components/sections/AboutUs"
import Services from "@/components/sections/Services"
import ContactUs from "@/components/sections/ContactUs"
import Industries from "@/components/sections/Industries"
import HowItWorks from "@/components/sections/HowItWorks"
import PastClients from "@/components/sections/PastClients"

import "@/styles/scrollbar.css"
export const dynamic = "force-static";

const carousels = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
]

export default function Home() {
  return (
    <main className="custom-scrollbar overflow-y-auto">
      <Hero 
        carousels={carousels} 
        title="Put your best foot forward"
        description="Better signs, every time, Australia wide" 
      />
      <ContactUs />
      <Services />
      <Industries />
      <AboutUs />
      <HowItWorks />
      <PastClients />
      <Footer />
    </main>
  );
}
