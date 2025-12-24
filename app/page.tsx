import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex min-h-screen max-w-full flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex min-h-screen justify-around grow items-center w-full">
          <h1>
            QUALITY ELECTROPLATING AND ANODIZING
          </h1>
          <ImageCarousel />
        </div>
      </main>
    </div>
  );
}
