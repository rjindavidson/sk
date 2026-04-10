'use client'

import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Header from "@/app/components/Header";
import HomeSection from "@/app/components/HomeSection";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <HomeSection />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
