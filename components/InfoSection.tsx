"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface InfoSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  imagePosition?: "left" | "right"
}

export default function InfoSection({
  title,
  description,
  imageSrc,
  imageAlt = "",
  imagePosition = "left",
}: InfoSectionProps) {
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
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={520}
            height={520}
            className="h-auto w-full max-w-md rounded-lg object-contain"
          />
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
