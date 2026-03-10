import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="flex flex-col items-center justify-center
     bg-linear-to-b from-gray-800 to-gray-900 py-12">
      <div className="max-w-5xl text-center text-white">
        <h2 className="font-bold text-[2.5rem]">What we do:</h2>
        <p className="text-[1.2rem] leading-8 p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet distinctio cumque quod aperiam maxime temporibus ab quisquam nisi enim nemo consequatur accusamus expedita, eaque corrupti nam pariatur porro quibusdam!</p>
        <div className="flex flex-row justify-center items-center gap-8">
          <div className="relative w-full h-auto rounded-2xl overflow-hidden timeline-view
           animate-fade-in-right animate-range-[entry_10%_contain_60%]">
            <Image src="/service-image-2.png" alt="plating image 1" height={0} width={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-80 h-auto"
            />
          </div>
          <div className="relative w-full h-auto rounded-2xl overflow-hidden timeline-view
           animate-fade-in-up animate-range-[entry_10%_contain_60%]">
            <Image src="/service-image-1.png" alt="plating image 2" height={0} width={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-80 h-auto"
            />
          </div>
          <div className="relative w-full h-auto rounded-2xl overflow-hidden timeline-view
           animate-fade-in-left animate-range-[entry_10%_contain_60%]">
            <Image src="/service-image-3.png" alt="plating image 3" height={0} width={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-80 h-auto"
            />
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  )
}

export default Gallery;