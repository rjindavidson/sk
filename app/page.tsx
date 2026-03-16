'use client'

import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
