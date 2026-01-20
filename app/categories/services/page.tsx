import Spacer from "@/components/Spacer"
import Img1 from "@/assets/categories/services/01.webp"
import ContactUs from "@/components/sections/ContactUs"
import Carousels from "@/components/Carousels"

const carousels = [{ id: 1, img: Img1 }]

export default function ServiceCategory() {
  return (
    <div>
      <Carousels
        title="Services"
        carousels={carousels}
        description="Explore variety of services."
      />
      <ContactUs />
      <Spacer className="pb-16">
        <h1 className="text-2xl font-light lg:text-4xl">
          Need support to take your project from idea to installation?
        </h1>
        <h3 className="mt-8 text-base font-light lg:text-lg">
          Whether you're after a little design help or a reliable set of hands
          for a complex national project, it's easy with our design and service
          team looking after you. We can take care of your project from first
          conversation to final installation. With our proven project management
          processes, you can rely on us to deliver better signs, every time,
          Australia wide.
        </h3>
      </Spacer>
    </div>
  )
}
