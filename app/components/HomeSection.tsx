import CTAButton from "./Button";
import PartnerSection from "./PartnerSections";

const HomeSection = () => {
  return (
    <section id="home"
      className="flex flex-col items-center justify-between text-center text-white pt-24
      min-h-dvh bg-linear-to-b from-[#01161e] to-[#598392] md:pt-48">
      <div className="flex flex-col gap-[1.4rem] mb-6">
        <h1 className="font-bold text-[3rem]">Quality Electroplating and Anodizing | Precision Metal Finishing</h1>
        <p className="text-[1.2rem] leading-8">
          Since 1967, S&K Plating has provided high quality precision metal finishing
          services to commercial and military specifications.
          Our mission is to satisfy our customer requests with quality and competitive pricing.
        </p>
        <div className="flex items-center justify-center mt-4">
          <CTAButton size="large" destination="contact">Contact Us</CTAButton>
        </div>
      </div>
      <PartnerSection />
    </section>
  )
}

export default HomeSection;