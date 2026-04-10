'use client'
import Image from "next/image";
import { useState } from "react";

type ContactComponentProps = {
  title: string
  description: string
}
type DropdownProps = {
  answer: string
  question: string
  thisKey: string
}

const FAQs = [
  {
    key: "faq1",
    question: "Services Provided",
    answer: "Cosmetic metal finishing: nickel chrome plating and other finishes provide a shimmering quality that ensures durability and appearance"
  },
  {
    key: "faq2",
    question: "faq here",
    answer: "blah blah blah blah blah blah blah blah blah blah"
  },
  {
    key: "faq3",
    question: "faq here",
    answer: "blah blah blah blah blah blah blah blah blah"
  }
]

const ContactComponent = ({ title, description }: ContactComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-gray-500 uppercase font-bold text-[1rem]">
        {title}
      </div>
      <div className="text-white font-medium text-[1.3rem]">
        {description}
      </div>
    </div>
  )
}

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const Dropdown = ({ answer, question, thisKey }: DropdownProps) => {
    return (
      <div className="overflow-hidden rounded-[1.2rem] border border-white/10 transition-all 
      duration-300 backdrop-blur-md hover:border-white/20">
        <button
          className="flex justify-between items-center w-full cursor-pointer md:p-[1.2rem]"
          onClick={() => {
            return activeDropdown === thisKey ? setActiveDropdown(null) : setActiveDropdown(thisKey)
            // if (activeDropdown === thisKey) {
            //   setActiveDropdown(null)
            // } else {
            //   setActiveDropdown(thisKey)
            // }
          }}
        >
          <span className="text-white text-[1rem] font-semibold leading-[1.4] flex-1 md:text-[1.5rem]">{question}</span>
          <div className="flex items-center justify-center w-[2.8rem] h-[2.8rem] text-[2rem] font-light rounded-[0.8rem] shrink-0">+</div>
        </button>
        <div className={activeDropdown === thisKey ? "h-auto p-4" : "h-0"}>
          {answer}
        </div>
      </div>
    )
  }

  return (
    <section id="contact" className="flex flex-col items-center justify-center text-center text-white min-h-dvh">
      <div className="flex flex-1 items-center justify-around bg-[#124559] w-full">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h3 className="font-bold text-[1.5rem] md:text-[3rem]">
            FAQs
          </h3>
          <div className="flex flex-col gap-[1.6rem]">
            {FAQs.map(faq => (
              <Dropdown
                key={faq.key} question={faq.question} answer={faq.answer} thisKey={faq.key}
              />
            ))}
          </div>
        </div>
        <div className="h-auto rounded-2xl overflow-hidden m-4 hidden lg:block">
          <Image src="/team-image.png" alt="Company Photo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto"
            height={0}
            width={0}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-around bg-black w-full pb-4">
        <h2 className="font-bold text-[2rem] p-4 md:text-[3rem]p-8">Get in contact with us!</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <ContactComponent title="Located At" description="2727 N. Compton Ave. Compton, CA 90222" />
          <ContactComponent title="Number" description="(310)-632-7141" />
          <ContactComponent title="Email" description=" cs@skplating.com || mardig@skplating.com" />
          <ContactComponent title="Fax" description="(310)-762-1967" />
        </div>
      </div>
    </section>
  )
}

export default Footer;