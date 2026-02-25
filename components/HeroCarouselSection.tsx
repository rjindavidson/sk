"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface HeroCarouselSectionProps {
  companyName: string
  tagline?: string
  onContactClick?: () => void
  images: {
    src: string
    alt?: string
  }[]
}

export default function HeroCarouselSection({
  companyName,
  tagline,
  onContactClick,
  images,
}: HeroCarouselSectionProps) {
  return (
    <section className="min-h-screen w-full">
      <div className="mx-auto grid h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Left: Text + CTA */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            {companyName}
          </h1>
          {tagline && (
            <p className="text-lg text-muted-foreground">
              {tagline}
            </p>
          )}
          <div>
            <Button size="lg" onClick={onContactClick}>
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right: Carousel */}
        <div className="relative w-full">
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
      </div>
    </section>
  )
}
