import Image from "next/image";

const PartnerSection = () => {
  return (
    <section id="partner-section" className="flex items-center justify-center bg-linear-to-b from-gray-900 to-gray-800 pb-12">
      <div className="text-center max-w-5xl">
        <p className="text-[1rem] font-medium mb-6 text-gray-400">Trusted by vendors:</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />
          <Image src="/bassani-logo.png" alt="Bassani Logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-40 h-auto" height={0} width={0} />

        </div>
      </div>
    </section>
  )
}

export default PartnerSection;