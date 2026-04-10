import React from "react"
import { scrollToId } from "../utils"

type CTAButtonProps = {
  destination?: string
  size?: string
  children: React.ReactNode
}

const CTAButton = ({ destination = "", size, children }: CTAButtonProps) => {
  switch (size) {
    case 'small':
      return (
        <button className="block rounded-xl bg-linear-to-br from-blue-400 to-neutral-300 px-6 py-3 text-sm font-semibold
     text-white transition-all duration-300 hover:scale-105"
          onClick={() => scrollToId(destination)}>
          {children}
        </button>
      )
    case 'large':
      return (
        <button className="rounded-xl bg-linear-to-br from-blue-400 to-neutral-300 px-8 py-4 text-2xl font-bold
     text-white transition-all duration-300 hover:scale-105"
          onClick={() => scrollToId(destination)}>
          {children}
        </button>
      )
    default:
      return (
        <button className="rounded-xl bg-blue-400 px-6 py-3 text-sm font-semibold
     text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-125"
          onClick={() => scrollToId(destination)}>
          {children}
        </button>
      )
  }
}

export default CTAButton;