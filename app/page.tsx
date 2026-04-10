'use client'

import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";

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
