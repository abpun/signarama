import Spacer from "../Spacer"

const workflows = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We take the time to understand your business goals before creating the right sign for your space. We're happy to meet you on site or at our showroom.",
  },
  {
    id: 2,
    title: "Design & Production",
    description:
      "Each sign is designed and crafted at your local location by our graphic designers and expert production team.",
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "A dedicated account manager keeps you informed throughout the process, ensuring timely delivery and perfect results.",
  },
  {
    id: 4,
    title: "Installation & Fulfillment",
    description:
      "Our professional installers ensure your signage is perfectly placed and ready to make an impact.",
  },
]

export default function HowItWorks() {
  return (
    <section id="process">
      <div className="bg-[#F8FAFC] py-16 md:px-8">
        <Spacer>
          <div className="process-content">
            <div className="border-l-4 border-[#AF1E2D] pl-3">
              <h2 className="text-xl font-bold text-[#AF1E2D] md:text-3xl">
                How Our Expert Service Works
              </h2>
              <p className="process-subtitle mt-1">
                From concept to installation, we guide you through every step
                with professional expertise
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {workflows.map((workflow) => (
                <div key={workflow.id} className="flex items-start gap-5">
                  <div className="flex h-10 w-full max-w-10 items-center justify-center rounded-full bg-[#AF1E2D] text-lg">
                    <span className="font-bold text-white">{workflow.id}</span>
                  </div>
                  <div className="step-content">
                    <h3 className="text-lg font-semibold">{workflow.title}</h3>
                    <p className="text-sm">{workflow.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Spacer>
      </div>
    </section>
  )
}
