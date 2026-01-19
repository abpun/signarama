import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export default function Spacer({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-3 sm:px-4 md:px-8 xl:max-w-339",
        className
      )}
    >
      {children}
    </div>
  )
}
