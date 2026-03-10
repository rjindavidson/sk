'use client'

import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import PartnerSection from "@/components/PartnerSections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="100vh">
        <HomeSection />
        <PartnerSection />
        <Gallery />
      </main>
    </>
  );
}
