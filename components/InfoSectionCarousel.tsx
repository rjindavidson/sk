"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

interface InfoSectionCarouselProps {
  title: string
  description: string
  images: {
    src: string
    alt?: string
  }[]
  imagePosition?: "left" | "right"
}

export default function InfoSectionCarousel({
  title,
  description,
  images,
  imagePosition = "left",
}: InfoSectionCarouselProps) {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-center gap-12 rounded-xl border border-slate-200 bg-white px-10 py-14 shadow-sm",
          "md:grid-cols-2",
          imagePosition === "right" && "md:[&>*:first-child]:order-2"
        )}
      >
        {/* Image */}
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="items-center">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-full justify-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? ""}
                    width={520}
                    height={520}
                    className="max-h-[70vh] w-auto rounded-2xl object-contain"
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
