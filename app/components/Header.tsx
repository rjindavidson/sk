import Image from "next/image";
import CTAButton from "./Button";
import { scrollToId } from "../utils";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 w-full h-14 z-50 shadow-xl/20 bg-white md:h-18">
      <div className="flex px-4 md:px-6 items-center justify-between h-full max-h-full">
        <div className="h-12">
          <button onClick={() => scrollToId('home')}>
            <Image alt="S&K Plating" height={0} width={0} sizes="100vw" className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110" src="/sk-logo.png" />
          </button>
        </div>
        <nav className="h-16">
          <ul className="flex h-full items-center justify-center gap-4 font-semibold">
            <li>
              <button className="transition-all duration-300 hover:scale-105 block" onClick={() => scrollToId('home')}>Home</button>
            </li>
            <li>
              <button className="transition-all duration-300 hover:scale-105 hidden md:block" onClick={() => scrollToId('gallery')}>Finishes & Coatings</button>
              <button className="transition-all duration-300 hover:scale-105 md:hidden" onClick={() => scrollToId('gallery')}>Finishes</button>
            </li>
            <li>
              <CTAButton size="small" destination="contact">Contact</CTAButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;