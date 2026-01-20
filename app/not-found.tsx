import React from "react"
import Link from "next/link"

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-5 text-center font-sans">
      <h1 className="text-6xl mb-5">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-5 py-2 bg-[#D2302F] text-white rounded hover:bg-[#b92424] transition"
      >
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
