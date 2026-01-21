import Footer from "@/components/sections/Footer"
import "@/styles/scrollbar.css"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div id="blog-signarama" className="custom-scrollbar overflow-y-auto">
      {children}
      <Footer />
    </div>
  )
}
