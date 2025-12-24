import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ImageCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>IMAGE GOES HERE</CarouselItem>
        <CarouselItem>IMAGE GOES HERE</CarouselItem>
        <CarouselItem>IMAGE GOES HERE</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}