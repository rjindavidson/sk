import Image from "next/image";
import Link from "next/link";
import CTAButton from "./Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-18 z-50 shadow-xl/20 bg-white">
      <div className="flex px-4 md:px-6 items-center justify-between h-full max-h-full">
        <div className="h-12">
          <Link href="#home">
            <Image alt="S&K Plating" height={0} width={0} sizes="100vw" className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110" src="/sk-logo.png" />
          </Link>
        </div>
        <nav className="h-16">
          <ul className="flex h-full items-center justify-center gap-4 font-semibold">
            <li>
              <Link className="transition-all duration-300 hover:scale-105 block" href="#home">Home</Link>
            </li>
            <li>
              <Link className="transition-all duration-300 hover:scale-105 hidden md:block" href="#gallery">Finishes & Coatings</Link>
              <Link className="transition-all duration-300 hover:scale-105 md:hidden" href="#gallery">Finishes</Link>
            </li>
            <li>
              <CTAButton size="small" destination="#contact">Contact</CTAButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;