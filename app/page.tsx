'use client'

import HeroCarouselSection from "@/components/CarouselSection";
import ContactSection from "@/components/ContactSection";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen max-w-full flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start text-center">
        <HeroCarouselSection
          companyName="S&K Plating"
          tagline="Quality Electroplating and Anodizing"
          onContactClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          images={[
            {
              src: "/plating-image1.png",
              alt: "Slide",
            },
            {
              src: "/plating-image1.png",
              alt: "Slide",
            },
            {
              src: "/plating-image1.png",
              alt: "Slide",
            },
          ]}
        />
        <InfoSection
          title="S&K Plating"
          description="Since 1967, S&K Plating has provided high-quality, precision metal finishing services to commercial and military specifications. Our mission is to satisfy our customer’s requests with quality and competitive pricing."
          imageSrc="/logo.jpg"
          imagePosition="left"
        />
        <InfoSection
          title="Our Team"
          description="Our quality staff has a tremendous technical background and is led by our PE certified engineer and our chemist. They have over 35 years of experience in the plating and metal finishing industry. Our high-volume plating production is finely tuned to provide consistent repeatability for all services offered through constant system evaluation."
          imageSrc="/team-image.png"
          imagePosition="right"
        />
        <ContactSection
          email="cs@skplating.com || mardig@skplating.com"
          phone="(310)-632-7141"
          fax="(310)-762-1967"
          location="2727 N. Compton Ave. Compton, CA 90222"
          onSubmit={(data) => {
            console.log(data)
          }}
        />
      </main>
    </div>
  );
}
