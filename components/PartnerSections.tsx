import Image from "next/image";

const PartnerSection = () => {
  return (
    <section id="partner-section" className="flex flex-col items-center justify-center py-8 bg-[#01161e] w-full">
        <p className="text-[1rem] font-medium mb-6 text-gray-400">Trusted by vendors:</p>
        <div className="flex flex-wrap justify-center items-center max-w-4xl gap-8">
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
    </section>
  )
}

export default PartnerSection;