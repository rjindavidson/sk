'use client'
import Image from "next/image";
import Dropdown from "./Dropdown";
import { useState } from "react";

type ContactComponentProps = {
  title: string
  description: string
}

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
  const [open1, setOpen1] = useState(false)

  return (
    <section id="contact" className="flex flex-col items-center justify-center text-center text-white min-h-dvh">
      <div className="flex flex-1 items-center justify-around bg-[#124559] w-full">
        <div className="flex flex-col max-w-2xl">
          <h3 className="font-bold text-[1.5rem] md:text-[3rem]">
            FAQs
          </h3>
          <div className="flex flex-col gap-[1.6rem]">
            <Dropdown question="Services provided" answer="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
            <Dropdown question="Services provided" answer="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />
            <Dropdown question="Services provided" answer="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />

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