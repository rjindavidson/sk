import Image from "next/image";

const Footer = () => {
  return (
    <section id="" className="flex flex-col items-center justify-between text-center text-white h-screen">
      <div className="flex items-center justify-center h-[50vh] bg-[#124559] w-full">
        <div className="flex flex-col">
          <h2 className="font-bold text-[3rem]">Get in contact with us!</h2>
           <div className="flex w-full h-128">
          <div className="relative w-full h-auto rounded-2xl overflow-hidden">
            <Image src="/team-image.png" alt="Company Photo"
              fill={true} className="w-full h-auto object-fill" />
          </div>
        </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[50vh] bg-black w-full">
        <div className="flex flex-col max-w-5xl ">
          <h2 className="font-bold text-[3rem]">Get in contact with us!</h2>
          <p className="text-[1.2rem] leading-8">
            S&K Plating
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer;