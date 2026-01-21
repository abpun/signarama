"use client"
import { useEffect } from "react"

export default function ReadingProgress() {
  useEffect(() => {
    const container = document.getElementById("blog-signarama")
    const bar = document.getElementById("reading-progress")

    const update = () => {
      if (!container || !bar) return

      const scrollTop = container.scrollTop
      const height = container.scrollHeight - container.clientHeight

      const progress = Math.min(100, Math.ceil((scrollTop / height) * 100))
      bar.style.width = progress + "%"
    }

    container?.addEventListener("scroll", update)
    return () => container?.removeEventListener("scroll", update)
  }, [])

  return (
    <div
      id="reading-progress"
      className="absolute top-16.5 left-0 z-9999 h-0.5 bg-linear-to-r from-[#af1e2d] to-[#ff6b6b] xl:top-18.5"
    />
  )
}
