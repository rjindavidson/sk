'use client'
import { useState } from "react"

type DropdownProps = {
  question: string
  answer: string
}

const Dropdown = ({ question, answer }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-[1.2rem] border border-white/10 transition-all
     duration-300 backdrop-blur-md hover:border-white/20">
      <button
        className="flex justify-between items-center w-full cursor-pointer md:p-[1.2rem]"
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="text-white text-[1rem] font-semibold leading-[1.4] flex-1 md:text-[1.5rem]">{question}</span>
        <div className="flex items-center justify-center w-[2.8rem] h-[2.8rem] text-[2rem] font-light rounded-[0.8rem] shrink-0">+</div>
      </button>
      <div className={open ? "h-auto p-4" : "h-0"}>
        {answer}
      </div>
    </div>
  )
}

export default Dropdown;