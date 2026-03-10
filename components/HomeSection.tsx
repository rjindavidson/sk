import Image from "next/image";
import CTAButton from "./Button";

const HomeSection = () => {
  return (
    <section id="home-section" className="flex flex-col text-white items-center justify-center text-center pt-36 pb-24 bg-gray-900">
      <div className="flex flex-col gap-[1.4rem] max-w-5xl">
        <h1 className="font-bold text-[3rem]">Quality Electroplating and Anodizing | Precision Metal Finishing</h1>
        <div className="flex w-full h-128">
          <div className="relative w-full h-auto rounded-2xl overflow-hidden">
            <Image src="/landing-page-plating-image.png" alt="Company Photo"
              fill={true} className="w-full h-auto object-cover" />
          </div>
        </div>
        <p className="text-[1.2rem] leading-8">
          Since 1967, S&K Plating has provided high quality precision metal finishing
          services to commercial and military specifications.
          Our mission is to satisfy our customer requests with quality and competitive pricing.
        </p>
        <div className="flex items-center justify-center mt-4">
          <CTAButton size="large">Contact Us</CTAButton>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;